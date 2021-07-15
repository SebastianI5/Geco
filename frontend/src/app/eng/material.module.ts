import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
    declarations: [],
    exports: [
        MatGridListModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatTableModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatChipsModule,
        MatTabsModule,
        MatDividerModule,
        MatSnackBarModule,
        MatBottomSheetModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatSelectModule,
        MatButtonModule,
        MatSortModule,
        MatTooltipModule,
        MatMenuModule,
        MatFormFieldModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [
        MatPaginatorIntl,
        MatDatepickerModule,
        {provide: MAT_DATE_LOCALE, useValue: navigator.language},
    ],
    bootstrap: [],

})
export class EngMaterialModule { }
