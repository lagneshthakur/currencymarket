import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Angular Material
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatStepperModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { APIService } from './services/api.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoaderComponent } from './loader/loader.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TablePageComponent } from './table-page/table-page.component';
import { CurrenciesCustomComponent } from './currencies/currencies.component';

@NgModule({
  exports: [
    MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatStepperModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule
  ]
})
export class CurrencyMatModule {}

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesCustomComponent,
    LoaderComponent,
    TablePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CurrencyMatModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {enabled: true}),
    RouterModule.forRoot([
      {
        path: '',
        component: TablePageComponent
      },
      {
        path: 'currencies/:currency',
        component: CurrenciesCustomComponent
      },
      {
        path: 'table',
        component: TablePageComponent
      }
    ])
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
