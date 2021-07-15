package com.eng.geco;

import static com.eng.geco.Util.*;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import static com.eng.geco.User.user;
import static com.eng.geco.Util.stringfy;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Component
@Aspect
public class AuditAspect {

    @Value("${audit.persist:false}")
    private boolean persist_audit;

    @Value("${audit.retention:14}")
    private int retention_audit;

    @Autowired(required = false)
    private HttpServletRequest request;

    @Autowired
    NamedParameterJdbcOperations template;

    @Around("@annotation(com.eng.geco.Audit)")
    public Object log(ProceedingJoinPoint p) throws Throwable {

        Long start = Instant.now().toEpochMilli();
        Object result = null;
        try {
            result = p.proceed();
            boolean traceResponse = ((MethodSignature) (p.getSignature())).getMethod().getAnnotation(Audit.class)
                    .value();
            persistAudit(result, HttpStatus.OK.value(), traceResponse);
        } catch (ResponseStatusException e) {
            persistAudit(Map.of("reason", e.getReason(), "status", e.getStatus()), e.getStatus().value(), true);
            throw e;
        } catch (Exception e) {
            persistAudit(Map.of("message", e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR.value(), true);
            throw e;
        } finally {
            Long end = Instant.now().toEpochMilli();
            debug("Executing method: " + p.getSignature().getDeclaringTypeName() + "." + p.getSignature().getName()
                    + " , execution time: " + (end - start) + " ms");
        }

        return result;
    }

    private void persistAudit(Object result, int status, boolean traceResponse) {
        if (!persist_audit) {
            return;
        }
        String sql = "INSERT INTO audit_geco ( %s )  VALUES( %s )";
        //@formatter:off
        Map<String , Object > params = Map.of(
            "id" , UUID.randomUUID().toString(),
            "at" , Instant.now().toString(),
            "username" , user() == null ? "system" : user().name,
            "url", request.getRequestURI(),
            "method" , request.getMethod(),
            "request", stringfy(request.getParameterMap()),
            "response", traceResponse ? stringfy(result) : "NotTraced",
            "status", status
        );

        sql = String.format(
            sql,
            params.keySet().stream().collect(Collectors.joining(",")),
            params.keySet().stream().map(e -> ":" + e).collect(Collectors.joining(","))
        );
	    //@formatter:on
        try {
            template.update(sql, params);
        } catch (Exception e) {
            error(e.getMessage());
        }
    }

    // "*/15 * * * * *" --> every 15 secs
    // 0 5 */14 * * * --> every 14 days
    // 0 0 * * * * --> every day at midnight
    @Scheduled(cron = "0 0 * * * *")
    private void clearAudit() {
        if (!persist_audit) {
            return;
        }
        int rows = 0;
        String sql = "DELETE FROM audit_geco WHERE status = '200' AND  \"at\" < :retention ";
        String limitTime = Instant.now().minus(retention_audit, ChronoUnit.DAYS).toString();
        debug(sql);
        try {
            rows = template.update(sql, Map.of("retention" , limitTime));
        } catch (Exception e) {
            error(e.getMessage());
        }
        info("Successful status log before " + limitTime + " has been deleted from persistence. Rows affected = "
                + rows);
    }


    @Scheduled(cron = "0 1 * * * *")
    private void auditReport(){
        if (!persist_audit) {
            return;
        }
        String sql = "insert into audit_report_geco select substring(at, 0 , 11) as date , url ,method ,  status , count(*) as qty  "+
        " from audit_geco where substring(at, 0 , 11) = substring((current_date - 1 )::text , 0 , 11) "+
        " group by substring(at, 0 , 11)  ,  url , method ,status";
        debug(sql);
        try {
            template.update(sql, Map.of( ));
        } catch (Exception e) {
            error(e.getMessage());
        }
        info("Successful audit_report saved.");
    }

}
