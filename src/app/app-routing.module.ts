import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';

const routes: Routes = [
  { path: 'inscription', component: InscriptionPageComponent },
];

@NgModule({
  declarations: [InscriptionPageComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
