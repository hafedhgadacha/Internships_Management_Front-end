import { SallesModule } from './salles/salles.module';
import { EncadrementEtudiantComponent } from './encadrement-etudiant/encadrement-etudiant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DemandesComponent } from './demandes/demandes.component';
import { ConventionComponent } from './convention/convention.component';
import { DocumentsComponent } from './documents/documents.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'demandes', component: DemandesComponent },
  { path: 'etudiants', loadChildren: () => import('./etudiants/etudiants.module').then(m => m.EtudiantsModule) },
  { path: 'enseignants', loadChildren:() => import('./enseignants/enseignants.module').then(m => m.EnseignantsModule)},
  { path: 'departments', loadChildren:() => import('./departments/departments.module').then(m => m.DepartmentsModule)},
  { path: 'sfes', loadChildren:() => import('./sfes/sfes.module').then(m => m.SfesModule)},
  { path: 'salles', loadChildren:() => import('./salles/salles.module').then(m => m.SallesModule)},
  { path: 'encadrement/etudiant',component: EncadrementEtudiantComponent},
  { path: 'convention', component: ConventionComponent},
  { path: 'documents', component: DocumentsComponent},
  { path: 'entreprises', component: EntreprisesComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
