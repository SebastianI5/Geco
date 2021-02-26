import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { BoxesComponent } from './boxes/boxes.component';
import { ContractsComponent } from './contracts/contracts.component';
import { CoverComponent } from './cover/cover.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DealerComponent } from './dealer/dealer.component';
import { DealersComponent } from './dealers/dealers.component';
import { DocumentsComponent } from './documents/documents.component';
import { ReportDealerNoPecComponent } from './report-dealer-no-pec/report-dealer-no-pec.component';
import { ReportOccupationByPecComponent } from './report-occupation-by-pec/report-occupation-by-pec.component';
import { VersionsComponent } from './versions/versions.component';

const routes: Routes = [

{ path: 'dashboard', component: DashboardComponent },
{ path: 'dealers', component: DealersComponent },
{ path: 'dealers/:id', component: DealerComponent },
{ path: 'contracts', component: ContractsComponent },
{ path: 'contracts/:id', component: ContractsComponent },
{ path: 'dealers/:id/contracts/:contract_id/documents', component: DocumentsComponent },
{ path: 'dealers/:id/contracts/:contract_id/documents/:document_id/versions', component: VersionsComponent },
{ path: 'boxes', component: BoxesComponent },
{ path: 'boxes/:id', component: BoxComponent },
{ path: 'covers/:id', component: CoverComponent },
{ path: 'report-dealer-no-pec', component: ReportDealerNoPecComponent },
{ path: 'report-occupation-by-pec', component: ReportOccupationByPecComponent },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: '**', redirectTo: '/dealers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
