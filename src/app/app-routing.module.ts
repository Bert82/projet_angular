import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  { path: '', redirectTo: '/envent', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  
  { path: 'home', component: HomePageComponent},
  { path: 'inscription', component: InscriptionPageComponent, canActivate:[AuthGuard] },
  { path: 'event', component: EventPageComponent, canActivate:[AuthGuard] },
];

@NgModule({
  declarations: [
    InscriptionPageComponent,
    EventPageComponent,
    HomePageComponent,
    RegistrationComponent,
    LoginComponent,
    ],
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule, CommonModule, SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
