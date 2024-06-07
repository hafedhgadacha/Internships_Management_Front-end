import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbaradminComponent } from './navbars/navbaradmin/navbaradmin.component';
import { DemandesComponent } from './demandes/demandes.component';
import { EncadrementEtudiantComponent } from './encadrement-etudiant/encadrement-etudiant.component';
import { ConventionComponent } from './convention/convention.component';
import { DocumentsComponent } from './documents/documents.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbaradminComponent,
    DemandesComponent,
    EncadrementEtudiantComponent,
    ConventionComponent,
    DocumentsComponent,
    EntreprisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
