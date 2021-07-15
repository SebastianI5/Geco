import { Injectable } from '@angular/core';
import { NetService } from '@eng';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private net : NetService) { }

  occupation(params : any){
    return this.net.list("reports/occupation", params );
  }

  dealers_no_pec(params : any){
    return this.net.list("reports/dealers-no-pec", params );
  }


}
