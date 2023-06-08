import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { InscriptionMarathonPageComponent } from './inscription-marathon-page/inscription-marathon-page.component';
import { InscriptionRandoPageComponent } from './inscription-rando-page/inscription-rando-page.component';
import { ParticipantsPageComponent } from './participants-page/participants-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';
import { SharedModule } from './shared/shared.module';
import { LogoutComponent } from './logout/logout.component';
import { DetailEventPageComponent } from './detail-event-page/detail-event-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/envent', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  
  { path: 'home', component: HomePageComponent},
  { path: 'inscription', component: InscriptionPageComponent, canActivate:[AuthGuard] },
  { path: 'inscription-marathon', component: InscriptionMarathonPageComponent, canActivate:[AuthGuard] },
  { path: 'inscription-rando', component: InscriptionRandoPageComponent, canActivate:[AuthGuard] },
  { path: 'event', component: EventPageComponent, canActivate:[AuthGuard] },
  { path: 'participants', component: ParticipantsPageComponent, canActivate: [AuthGuard]},
  { path: 'logout', component: LogoutComponent},
  { path: 'detail/:id', component: DetailEventPageComponent}

];

@NgModule({
  declarations: [
    InscriptionPageComponent,
    InscriptionMarathonPageComponent,
    InscriptionRandoPageComponent,
    EventPageComponent,
    HomePageComponent,
    RegistrationComponent,
    LoginComponent,
    ParticipantsPageComponent,
    LogoutComponent,
    DetailEventPageComponent
    ],
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule, CommonModule, SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
