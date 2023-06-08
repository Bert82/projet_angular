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
import { EditEventComponent } from './edit-event/edit-event.component';
import { EventFormComponent } from './event-form/event-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/envent', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  
  { path: 'home', component: HomePageComponent},
  { path: 'inscription', component: InscriptionPageComponent},
  { path: 'inscription-marathon', component: InscriptionMarathonPageComponent },
  { path: 'inscription-rando', component: InscriptionRandoPageComponent },
  { path: 'event', component: EventPageComponent },
  { path: 'participants', component: ParticipantsPageComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'detail/:id', component: DetailEventPageComponent},
  { path: 'edit-event/:id', component: EditEventComponent, canActivate: [AuthGuard]},
  { path: 'event-form', component: EventFormComponent, canActivate: [AuthGuard]}


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
    DetailEventPageComponent,
    EditEventComponent,
    EventFormComponent
    ],
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule, CommonModule, SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
