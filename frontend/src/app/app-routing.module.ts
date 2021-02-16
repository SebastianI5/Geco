import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './contracts/contracts.component';
import { DealerComponent } from './dealer/dealer.component';
import { DealersComponent } from './dealers/dealers.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  
{ path: 'dealers', component: DealersComponent },
{ path: 'dealers/:id', component: DealerComponent },
{ path: 'contracts', component: ContractsComponent },
{ path: 'contracts/:id', component: ContractsComponent },
{ path: 'dealers/:id/contracts/:contract_id/documents', component: DocumentsComponent },
{ path: '', redirectTo: '/dealers', pathMatch: 'full' },
{ path: '**', redirectTo: '/dealers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
