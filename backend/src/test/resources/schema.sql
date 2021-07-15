--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1 (Debian 13.1-1.pgdg100+1)
-- Dumped by pg_dump version 13.1 (Debian 13.1-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE OR REPLACE VIEW geco.v_boxes_geco AS
SELECT
    NULL::character varying AS id,
    NULL::character varying AS status,
    NULL::character varying AS username,
    NULL::character varying AS created_at,
    NULL::json AS history,
    NULL::integer AS qty_contracts,
    NULL::integer AS qty_documents;
ALTER TABLE ONLY geco.dealers_geco DROP CONSTRAINT dealers_geco_pk;
ALTER TABLE ONLY geco.covers_geco DROP CONSTRAINT covers_geco_pk;
ALTER TABLE ONLY geco.contracts_geco DROP CONSTRAINT contracts_geco_pk;
ALTER TABLE ONLY geco.boxes_geco DROP CONSTRAINT boxes_geco_pk;
DROP VIEW public.v_dealers_no_pec;
DROP VIEW public.v_covers_geco;
DROP VIEW geco.v_occupation_geco;
DROP VIEW geco.v_documents_by_year_geco;
DROP VIEW geco.v_documents_by_service_geco;
DROP VIEW geco.v_dealers_no_pec_geco;
DROP VIEW geco.v_covers_geco;
DROP VIEW geco.v_contracts_incompleted_by_service_geco;
DROP VIEW geco.v_contracts_geco;
DROP VIEW geco.v_contracts_completed_by_service_geco;
DROP VIEW geco.v_contract_documents_geco;
DROP VIEW geco.v_boxes_geco;
DROP TABLE geco.occupation_geco;
DROP TABLE geco.document_types_geco;
DROP TABLE geco.dealers_geco;
DROP TABLE geco.covers_geco;
DROP TABLE geco.contracts_geco;
DROP TABLE geco.boxes_geco;
DROP SCHEMA geco;
--
-- Name: geco; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA geco;


ALTER SCHEMA geco OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: boxes_geco; Type: TABLE; Schema: geco; Owner: postgres
--

CREATE TABLE geco.boxes_geco (
    id character varying NOT NULL,
    status character varying,
    username character varying,
    created_at character varying,
    history json
);


ALTER TABLE geco.boxes_geco OWNER TO postgres;

--
-- Name: contracts_geco; Type: TABLE; Schema: geco; Owner: postgres
--

CREATE TABLE geco.contracts_geco (
    dealer_id character varying NOT NULL,
    service_id character varying NOT NULL,
    brand_id character varying NOT NULL,
    created_at character varying,
    documents json,
    id character varying NOT NULL
);


ALTER TABLE geco.contracts_geco OWNER TO postgres;

--
-- Name: covers_geco; Type: TABLE; Schema: geco; Owner: postgres
--

CREATE TABLE geco.covers_geco (
    id character varying NOT NULL,
    dealer_id character varying,
    status character varying,
    box_id character varying,
    username character varying,
    created_at character varying,
    market character varying,
    service_id character varying,
    brand_id character varying,
    document_types json
);


ALTER TABLE geco.covers_geco OWNER TO postgres;

--
-- Name: dealers_geco; Type: TABLE; Schema: geco; Owner: postgres
--

CREATE TABLE geco.dealers_geco (
    id character varying NOT NULL,
    info json,
    market character varying,
    category character varying,
    dealership character varying,
    fake character varying,
    description character varying,
    structures json,
    mandates json,
    salesmanager character varying,
    aftersalesmanager character varying,
    vatcode character varying,
    idpec character varying,
    status character varying
);


ALTER TABLE geco.dealers_geco OWNER TO postgres;

--
-- Name: document_types_geco; Type: TABLE; Schema: geco; Owner: postgres
--

CREATE TABLE geco.document_types_geco (
    id character varying NOT NULL,
    description character varying,
    category character varying,
    attachment character varying,
    sort numeric,
    mandatory character varying,
    services json
);


ALTER TABLE geco.document_types_geco OWNER TO postgres;

--
-- Name: occupation_geco; Type: TABLE; Schema: geco; Owner: postgres
--

CREATE TABLE geco.occupation_geco (
    idpec character varying(1024),
    space character varying(1024),
    percentage character varying(1024),
    dealer_id character varying(1024),
    brand_id character varying(1024),
    created_at character varying(1024)
);


ALTER TABLE geco.occupation_geco OWNER TO postgres;

--
-- Name: v_boxes_geco; Type: VIEW; Schema: geco; Owner: geco
--

CREATE VIEW geco.v_boxes_geco AS
SELECT
    NULL::character varying AS id,
    NULL::character varying AS status,
    NULL::character varying AS username,
    NULL::character varying AS created_at,
    NULL::json AS history,
    NULL::integer AS qty_contracts,
    NULL::integer AS qty_documents;


ALTER TABLE geco.v_boxes_geco OWNER TO geco;

--
-- Name: v_contract_documents_geco; Type: VIEW; Schema: geco; Owner: postgres
--

CREATE VIEW geco.v_contract_documents_geco AS
 SELECT d.id,
    d.service_id,
    d.doc_id,
        CASE
            WHEN (cg_doc.doc_id IS NULL) THEN 0
            ELSE 1
        END AS present
   FROM (( SELECT cg.id,
            cg.service_id,
            dtg.id AS doc_id
           FROM geco.contracts_geco cg,
            ( SELECT dtg_1.id,
                    dtg_1.mandatory,
                    json_array_elements_text(dtg_1.services) AS service_id
                   FROM geco.document_types_geco dtg_1
                  WHERE ((dtg_1.mandatory)::text = '1'::text)) dtg
          WHERE ((cg.service_id)::text = dtg.service_id)) d
     LEFT JOIN ( SELECT contracts_geco.id,
            contracts_geco.service_id,
            (json_array_elements(contracts_geco.documents) ->> 'type'::text) AS doc_id
           FROM geco.contracts_geco) cg_doc ON ((((d.service_id)::text = (cg_doc.service_id)::text) AND ((d.id)::text = (cg_doc.id)::text) AND ((d.doc_id)::text = cg_doc.doc_id))));


ALTER TABLE geco.v_contract_documents_geco OWNER TO postgres;

--
-- Name: v_contracts_completed_by_service_geco; Type: VIEW; Schema: geco; Owner: postgres
--

CREATE VIEW geco.v_contracts_completed_by_service_geco AS
 SELECT d.service_id AS label,
    sum(d.completed) AS data
   FROM ( SELECT d_1.id,
            d_1.service_id,
                CASE
                    WHEN (sum(d_1.present) = count(0)) THEN 1
                    ELSE 0
                END AS completed
           FROM geco.v_contract_documents_geco d_1
          GROUP BY d_1.id, d_1.service_id) d
  GROUP BY d.service_id;


ALTER TABLE geco.v_contracts_completed_by_service_geco OWNER TO postgres;

--
-- Name: v_contracts_geco; Type: VIEW; Schema: geco; Owner: geco
--

CREATE VIEW geco.v_contracts_geco AS
 SELECT cg.dealer_id,
    cg.service_id,
    cg.brand_id,
    cg.created_at,
    cg.documents,
    cg.id,
    dg.description
   FROM geco.contracts_geco cg,
    geco.dealers_geco dg
  WHERE ((cg.dealer_id)::text = (dg.id)::text);


ALTER TABLE geco.v_contracts_geco OWNER TO geco;

--
-- Name: v_contracts_incompleted_by_service_geco; Type: VIEW; Schema: geco; Owner: postgres
--

CREATE VIEW geco.v_contracts_incompleted_by_service_geco AS
 SELECT d.service_id AS label,
    (count(0) - sum(d.completed)) AS data
   FROM ( SELECT d_1.id,
            d_1.service_id,
                CASE
                    WHEN (sum(d_1.present) = count(0)) THEN 1
                    ELSE 0
                END AS completed
           FROM geco.v_contract_documents_geco d_1
          GROUP BY d_1.id, d_1.service_id) d
  GROUP BY d.service_id;


ALTER TABLE geco.v_contracts_incompleted_by_service_geco OWNER TO postgres;

--
-- Name: v_covers_geco; Type: VIEW; Schema: geco; Owner: postgres
--

CREATE VIEW geco.v_covers_geco AS
 SELECT c.id,
    c.dealer_id,
    d.description,
    c.status,
    c.box_id,
    c.username,
    c.created_at,
    c.market,
    c.service_id,
    c.brand_id,
    c.document_types
   FROM geco.covers_geco c,
    geco.dealers_geco d
  WHERE ((c.dealer_id)::text = (d.id)::text);


ALTER TABLE geco.v_covers_geco OWNER TO postgres;

--
-- Name: v_dealers_no_pec_geco; Type: VIEW; Schema: geco; Owner: geco
--

CREATE VIEW geco.v_dealers_no_pec_geco AS
 SELECT d.vatcode,
    d.description,
    d.dealer_id,
    d.brand_id,
    COALESCE(d.idpec_dealer, d.idpec_vatcode) AS idpec
   FROM ( SELECT d_1.vatcode,
            d_1.description,
            d_1.dealer_id,
            d_1.brand_id,
            ( SELECT og.idpec
                   FROM geco.occupation_geco og
                  WHERE ((og.dealer_id)::text = (d_1.dealer_id)::text)
                 LIMIT 1) AS idpec_dealer,
            ( SELECT og.idpec
                   FROM geco.occupation_geco og,
                    geco.dealers_geco dg
                  WHERE (((og.dealer_id)::text = (dg.id)::text) AND ((dg.vatcode)::text = (d_1.vatcode)::text))
                 LIMIT 1) AS idpec_vatcode
           FROM ( SELECT DISTINCT d_1_1.vatcode,
                    d_1_1.description,
                    d_1_1.id AS dealer_id,
                    (json_array_elements(d_1_1.mandates) ->> 'brand_id'::text) AS brand_id
                   FROM geco.dealers_geco d_1_1
                  WHERE (((d_1_1.fake)::text <> 'Y'::text) AND ((d_1_1.status)::text = '1'::text))) d_1
          WHERE (NOT (EXISTS ( SELECT NULL::text AS text
                   FROM geco.occupation_geco o
                  WHERE (((d_1.dealer_id)::text = (o.dealer_id)::text) AND (d_1.brand_id = (o.brand_id)::text)))))) d;


ALTER TABLE geco.v_dealers_no_pec_geco OWNER TO geco;

--
-- Name: v_documents_by_service_geco; Type: VIEW; Schema: geco; Owner: postgres
--

CREATE VIEW geco.v_documents_by_service_geco AS
 SELECT cg.service_id AS label,
    sum(json_array_length(cg.documents)) AS data
   FROM geco.contracts_geco cg
  GROUP BY cg.service_id;


ALTER TABLE geco.v_documents_by_service_geco OWNER TO postgres;

--
-- Name: v_documents_by_year_geco; Type: VIEW; Schema: geco; Owner: postgres
--

CREATE VIEW geco.v_documents_by_year_geco AS
 SELECT "substring"(d.label, 1, 4) AS label,
    count(0) AS data
   FROM ( SELECT (json_array_elements((json_array_elements(cg.documents) -> 'versions'::text)) ->> 'created_at'::text) AS label
           FROM geco.contracts_geco cg) d
  GROUP BY ("substring"(d.label, 1, 4));


ALTER TABLE geco.v_documents_by_year_geco OWNER TO postgres;

--
-- Name: v_occupation_geco; Type: VIEW; Schema: geco; Owner: postgres
--

CREATE VIEW geco.v_occupation_geco AS
 SELECT t.idpec,
    t.space,
    t.percentage,
    t.dealer_id,
    t.brand_id,
    t.description,
    t.status,
    t.category,
    t.salesmanager,
    t.aftersalesmanager,
        CASE
            WHEN (t.percentage <= (60)::numeric) THEN 'green'::text
            WHEN (t.percentage <= (80)::numeric) THEN 'yellow'::text
            ELSE 'red'::text
        END AS color
   FROM ( SELECT o.idpec,
            (replace((o.space)::text, ','::text, '.'::text))::numeric AS space,
            (replace((o.percentage)::text, ','::text, '.'::text))::numeric AS percentage,
            o.dealer_id,
            o.brand_id,
            d.description,
            d.status,
            d.category,
            d.salesmanager,
            d.aftersalesmanager
           FROM geco.occupation_geco o,
            geco.dealers_geco d
          WHERE ((o.dealer_id)::text = (d.id)::text)) t;


ALTER TABLE geco.v_occupation_geco OWNER TO postgres;

--
-- Name: v_covers_geco; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.v_covers_geco AS
 SELECT c.id,
    c.dealer_id,
    d.description,
    c.status,
    c.box_id,
    c.username,
    c.created_at,
    c.market,
    c.service_id,
    c.brand_id,
    c.document_types
   FROM geco.covers_geco c,
    geco.dealers_geco d
  WHERE ((c.dealer_id)::text = (d.id)::text);


ALTER TABLE public.v_covers_geco OWNER TO postgres;

--
-- Name: v_dealers_no_pec; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.v_dealers_no_pec AS
 SELECT d.vatcode,
    d.description,
    d.dealer_id,
    d.brand_id,
    ( SELECT og.idpec
           FROM geco.occupation_geco og
          WHERE ((og.dealer_id)::text = (d.dealer_id)::text)
         LIMIT 1) AS idpec_dealer,
    ( SELECT og.idpec
           FROM geco.occupation_geco og,
            geco.dealers_geco dg
          WHERE (((og.dealer_id)::text = (dg.id)::text) AND ((dg.vatcode)::text = (d.vatcode)::text))
         LIMIT 1) AS idpec_vatcode
   FROM ( SELECT d_1.vatcode,
            d_1.description,
            d_1.id AS dealer_id,
            (json_array_elements(d_1.mandates) ->> 'brand_id'::text) AS brand_id
           FROM geco.dealers_geco d_1
          WHERE (((d_1.fake)::text <> 'Y'::text) AND ((d_1.status)::text = '1'::text))) d
  WHERE (NOT (EXISTS ( SELECT NULL::text
           FROM geco.occupation_geco o
          WHERE (((d.dealer_id)::text = (o.dealer_id)::text) AND (d.brand_id = (o.brand_id)::text)))));


ALTER TABLE public.v_dealers_no_pec OWNER TO postgres;

--
-- Name: boxes_geco boxes_geco_pk; Type: CONSTRAINT; Schema: geco; Owner: postgres
--

ALTER TABLE ONLY geco.boxes_geco
    ADD CONSTRAINT boxes_geco_pk PRIMARY KEY (id);


--
-- Name: contracts_geco contracts_geco_pk; Type: CONSTRAINT; Schema: geco; Owner: postgres
--

ALTER TABLE ONLY geco.contracts_geco
    ADD CONSTRAINT contracts_geco_pk PRIMARY KEY (id);


--
-- Name: covers_geco covers_geco_pk; Type: CONSTRAINT; Schema: geco; Owner: postgres
--

ALTER TABLE ONLY geco.covers_geco
    ADD CONSTRAINT covers_geco_pk PRIMARY KEY (id);


--
-- Name: dealers_geco dealers_geco_pk; Type: CONSTRAINT; Schema: geco; Owner: postgres
--

ALTER TABLE ONLY geco.dealers_geco
    ADD CONSTRAINT dealers_geco_pk PRIMARY KEY (id);


--
-- Name: v_boxes_geco _RETURN; Type: RULE; Schema: geco; Owner: geco
--

CREATE OR REPLACE VIEW geco.v_boxes_geco AS
 SELECT bg.id,
    bg.status,
    bg.username,
    bg.created_at,
    bg.history,
    (count(DISTINCT d.idcover))::integer AS qty_contracts,
    (count(0))::integer AS qty_documents
   FROM (geco.boxes_geco bg
     LEFT JOIN ( SELECT bg_1.id,
            cg.id AS idcover,
            json_array_elements(cg.document_types) AS json_array_elements
           FROM geco.boxes_geco bg_1,
            geco.covers_geco cg
          WHERE ((bg_1.id)::text = (cg.box_id)::text)) d ON (((bg.id)::text = (d.id)::text)))
  GROUP BY bg.id;


--
-- Name: SCHEMA geco; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA geco TO geco;


--
-- Name: TABLE boxes_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.boxes_geco TO geco;


--
-- Name: TABLE contracts_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.contracts_geco TO geco;


--
-- Name: TABLE covers_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.covers_geco TO geco;


--
-- Name: TABLE dealers_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.dealers_geco TO geco;


--
-- Name: TABLE document_types_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.document_types_geco TO geco;


--
-- Name: TABLE occupation_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.occupation_geco TO geco;


--
-- Name: TABLE v_contract_documents_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.v_contract_documents_geco TO geco;


--
-- Name: TABLE v_contracts_completed_by_service_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.v_contracts_completed_by_service_geco TO geco;


--
-- Name: TABLE v_contracts_geco; Type: ACL; Schema: geco; Owner: geco
--

GRANT ALL ON TABLE geco.v_contracts_geco TO postgres;


--
-- Name: TABLE v_contracts_incompleted_by_service_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.v_contracts_incompleted_by_service_geco TO geco;


--
-- Name: TABLE v_covers_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.v_covers_geco TO geco;


--
-- Name: TABLE v_documents_by_service_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.v_documents_by_service_geco TO geco;


--
-- Name: TABLE v_documents_by_year_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.v_documents_by_year_geco TO geco;


--
-- Name: TABLE v_occupation_geco; Type: ACL; Schema: geco; Owner: postgres
--

GRANT ALL ON TABLE geco.v_occupation_geco TO geco;


--
-- PostgreSQL database dump complete
--

