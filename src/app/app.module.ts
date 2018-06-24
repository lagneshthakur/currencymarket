import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Angular Material
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatListModule,
   MatCardModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { BoutiqueService } from './services/boutique.service';
import { RouterModule } from '@angular/router';
import { BoutiquesComponent } from './boutiques/boutiques.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from './services/auth-guard.service';
import { LoaderComponent } from './loader/loader.component';
import { environment } from '../environments/environment.prod';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardCardComponent,
    BoutiquesComponent,
    ContactsComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {enabled: environment.production}),
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardCardComponent
      },
      {
        path: 'boutiques',
        component: BoutiquesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ])
  ],
  providers: [BoutiqueService, AuthService, JwtHelperService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
