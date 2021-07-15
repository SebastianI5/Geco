import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DealersComponent } from './dealers/dealers.component';
import { FormsModule } from '@angular/forms';
import { DealerComponent } from './dealer/dealer.component';
import { DealerInfoComponent } from './dealer-info/dealer-info.component';
import { DealerStructuresComponent } from './dealer-structures/dealer-structures.component';
import { DealerMandatesComponent } from './dealer-mandates/dealer-mandates.component';
import { DealerContractsComponent } from './dealer-contracts/dealer-contracts.component';
import { DocumentsComponent } from './documents/documents.component';
import { ContractsComponent } from './contracts/contracts.component';
import { VersionsComponent } from './versions/versions.component';
import { BoxesComponent } from './boxes/boxes.component';
import {  DatePipe, registerLocaleData } from '@angular/common';
import { BoxComponent } from './box/box.component';
import { AddCoverBottomSheetComponent } from './add-cover-bottom-sheet/add-cover-bottom-sheet.component';
import { CoverComponent } from './cover/cover.component';
// import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDocTypeBottomSheetComponent } from './add-doc-type-bottom-sheet/add-doc-type-bottom-sheet.component';

import { ChartsModule } from 'ng2-charts';
import { BasechartComponent } from './dashboard/basechart/basechart.component';
import { ReportDealerNoPecComponent } from './report-dealer-no-pec/report-dealer-no-pec.component';
import { ReportOccupationByPecComponent } from './report-occupation-by-pec/report-occupation-by-pec.component';
import { GecoDatePipe } from './geco-date.pipe';
import localeIt from '@angular/common/locales/it'
import localeEn from '@angular/common/locales/en';
import { EngModule } from './eng/eng.module';
import { ContractService } from './contract.service';
import { CoverService } from './cover.service';
import { ChartService } from './chart.service';
import { DealerService } from './dealer.service';
import { DocumentTypesService } from './document-types.service';
import { ReportService } from './report.service';
import { BoxesService } from './boxes.service';
import { EngMaterialModule } from './eng/material.module';
import { NewCoverComponent } from './new-cover/new-cover.component';

registerLocaleData( localeIt )
registerLocaleData( localeEn )


@NgModule( {
  declarations: [
    AppComponent,
    DealersComponent,
    DealerComponent,
    DealerInfoComponent,
    DealerStructuresComponent,
    DealerMandatesComponent,
    DealerContractsComponent,
    DocumentsComponent,
    ContractsComponent,
    VersionsComponent,
    BoxesComponent,
    BoxComponent,
    AddCoverBottomSheetComponent,
    CoverComponent,
    // SidenavComponent,
    DashboardComponent,
    AddDocTypeBottomSheetComponent,
    BasechartComponent,
    ReportDealerNoPecComponent,
    ReportOccupationByPecComponent,
    NewCoverComponent,
    GecoDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    EngModule,
    EngMaterialModule

  ],
  providers: [
    BoxesService,
    ContractService,
    CoverService,
    ChartService,
    DealerService,
    DocumentTypesService,
    ReportService,
    DatePipe,
    GecoDatePipe],
  bootstrap: [AppComponent]
} )
export class AppModule { }
