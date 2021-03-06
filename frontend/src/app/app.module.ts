import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DealersComponent } from './dealers/dealers.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { DealerComponent } from './dealer/dealer.component';
import { MatSortModule } from '@angular/material/sort';
import { Interceptor } from './error-http-interceptor';
import { ErrorsService } from './errors.service';
import { TPipe } from './t.pipe';
import { DealerInfoComponent } from './dealer-info/dealer-info.component';
import { DealerStructuresComponent } from './dealer-structures/dealer-structures.component';
import { DealerMandatesComponent } from './dealer-mandates/dealer-mandates.component';
import { DealerContractsComponent } from './dealer-contracts/dealer-contracts.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DocumentsComponent } from './documents/documents.component';
import { ContractsComponent } from './contracts/contracts.component';
import { SearchComponent } from './search/search.component';
import { VersionsComponent } from './versions/versions.component';
import { BoxesComponent } from './boxes/boxes.component';
import { DatePipe } from '@angular/common';
import { BoxComponent } from './box/box.component';
import { AddCoverBottomSheetComponent } from './add-cover-bottom-sheet/add-cover-bottom-sheet.component';
import { CoverComponent } from './cover/cover.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDocTypeBottomSheetComponent } from './add-doc-type-bottom-sheet/add-doc-type-bottom-sheet.component';
import { FilterPipe } from './filter.pipe';
import { LimitPipe } from './limit.pipe';
import { ChartsModule } from 'ng2-charts';
import { BasechartComponent } from './dashboard/basechart/basechart.component';
import { SpinnerInterceptor } from './spinner-interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner.service';
import { ReportDealerNoPecComponent } from './report-dealer-no-pec/report-dealer-no-pec.component';
import { ReportOccupationByPecComponent } from './report-occupation-by-pec/report-occupation-by-pec.component';


@NgModule({
  declarations: [
    AppComponent,
    DealersComponent,
    DealerComponent,
    TPipe,
    DealerInfoComponent,
    DealerStructuresComponent,
    DealerMandatesComponent,
    DealerContractsComponent,
    DocumentsComponent,
    ContractsComponent,
    SearchComponent,
    VersionsComponent,
    BoxesComponent,
    BoxComponent,
    AddCoverBottomSheetComponent,
    CoverComponent,
    SidenavComponent,
    DashboardComponent,
    AddDocTypeBottomSheetComponent,
    FilterPipe,
    LimitPipe,
    BasechartComponent,
    SpinnerComponent,
    ReportDealerNoPecComponent,
    ReportOccupationByPecComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatTabsModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatSidenavModule,
    ChartsModule,
    MatProgressSpinnerModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    SpinnerService, {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },

    ErrorsService, DatePipe, TPipe, MatPaginatorIntl],
  bootstrap: [AppComponent]
})
export class AppModule { }
