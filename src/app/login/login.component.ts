import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private messageService: MessageService
  ) { }

  show() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'login ou password incorrect' });
}

  login() {
    const userForm: any = this.loginForm.getRawValue();
    const exists = this._authService.login(userForm)
    if (exists) {
       this._router.navigate(['/event']);
    } else {
      this.show()
    }

  }
}

