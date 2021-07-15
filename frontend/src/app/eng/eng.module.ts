import { APP_INITIALIZER, NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule, PlatformLocation } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { TPipe } from './t.pipe';

import { FormsModule } from '@angular/forms';

import { BusService } from './bus.service';
import { LimitPipe } from './limit.pipe';
import { FilterPipe } from './filter.pipe';
import { SpinnerInterceptor } from './spinner-interceptor';
import { ErrorHttpInterceptor } from './error-http-interceptor';
import { NetService } from './net.service';
import { ConfigService } from './config.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { EngMaterialModule } from './material.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AddBottomsheetComponent } from './add-bottomsheet/add-bottomsheet.component';
import { AddInputComponent } from './add-input/add-input.component';
import { ConfirmationBottomsheetComponent } from './confirmation-bottomsheet/confirmation-bottomsheet.component';
import { AuditsComponent } from './audits/audits.component';
import { AuditComponent } from './audits/audit/audit.component';
// import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NavbarComponent } from './navbar/navbar.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ServerErrorsComponent } from './error-page/server-errors/server-errors.component';

export * from "./bus.service"
export * from "./filter.pipe"
export * from "./pdf"
export * from "./t.pipe"
export * from "./util"
export * from "./net.service"
export * from "./config.service"
export * from "./authentication"
export * from "./confirmation-bottomsheet/confirmation-bottomsheet.component"
export * from "./add-bottomsheet/add-bottomsheet.component"
export * from "./audits/audits.component"


@NgModule( {
  declarations: [
    SearchComponent,
    TPipe,
    LimitPipe,
    FilterPipe,
    SpinnerComponent,
    ErrorPageComponent ,
    AutocompleteComponent ,
    AddBottomsheetComponent,
    AddInputComponent,
    ConfirmationBottomsheetComponent,
    AuditsComponent,
    AuditComponent,
    NavbarComponent,
    UnauthorizedComponent,
    ServerErrorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // NgxJsonViewerModule,
    HttpClientModule,
    EngMaterialModule,

  ],
  exports: [
    SearchComponent,
    TPipe,
    LimitPipe,
    FilterPipe,
    SpinnerComponent,
    ErrorPageComponent,
    AutocompleteComponent,
    AddInputComponent,
    AuditsComponent,
    NavbarComponent
  ],
  providers:
    [
      LimitPipe,
      FilterPipe,
      BusService,
      NetService,
      {
        provide: APP_INITIALIZER,
        deps: [ConfigService],
        useFactory: ( configService: ConfigService ) => async () => { await configService.setup() },
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass : ErrorHttpInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass : SpinnerInterceptor,
        multi: true
      },
      {
        provide: APP_BASE_HREF,
        useFactory: ( s: PlatformLocation ) => s.getBaseHrefFromDOM(),
        deps: [PlatformLocation]
      },
     TPipe
    ]

} )
export class EngModule {
 }
