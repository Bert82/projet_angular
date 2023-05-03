import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: '/envent', pathMatch: 'full' },
  { path: 'inscription', component: InscriptionPageComponent },
  { path: 'event', component: EventPageComponent },
];

@NgModule({
  declarations: [
    InscriptionPageComponent,
    EventPageComponent,
    RegistrationComponent,
    LoginComponent,
    ],
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule, CommonModule, SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
