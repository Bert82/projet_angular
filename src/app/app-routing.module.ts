import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { EventPageComponent } from './event-page/event-page.component';

const routes: Routes = [
  { path: 'inscription', component: InscriptionPageComponent },
  { path: 'event', component: EventPageComponent },
];

@NgModule({
  declarations: [InscriptionPageComponent, EventPageComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
