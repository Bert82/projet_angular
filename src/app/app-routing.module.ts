import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registation', component: RegistrationComponent },
  { path: '', redirectTo: '/envent', pathMatch: 'full' },
  { path: 'inscription', component: InscriptionPageComponent },
  { path: 'event', component: EventPageComponent },
];

@NgModule({
  declarations: [
    InscriptionPageComponent,
    EventPageComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
