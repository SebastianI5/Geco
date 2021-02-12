import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerComponent } from './dealer/dealer.component';
import { DealersComponent } from './dealers/dealers.component';

const routes: Routes = [
  
{ path: 'dealers', component: DealersComponent },
{ path: 'dealers/:id', component: DealerComponent },
{ path: '', redirectTo: '/dealers', pathMatch: 'full' },
{ path: '**', redirectTo: '/dealers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
