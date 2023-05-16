import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    TabMenuModule,
    CalendarModule,
    ConfirmDialogModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    TabMenuModule,
    CalendarModule,
    CalendarModule,
    ConfirmDialogModule

  ]

})
export class SharedModule { }
