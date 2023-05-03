import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    TabMenuModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    TabMenuModule

  ]

})
export class SharedModule { }
