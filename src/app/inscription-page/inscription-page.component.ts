import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageServiceService } from '../local-storage-service.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService} from 'primeng/api';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class InscriptionPageComponent implements OnInit{
  value: string
  registrationForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    birthday: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    adresse: new FormControl('',[Validators.required]),
    ville: new FormControl('',[Validators.required]),
  })

constructor(
  private readonly localStorageService: LocalStorageServiceService,
  private readonly router: Router,
  private confirmationService: ConfirmationService, private messageService: MessageService,
  private readonly _authService: AuthService,
) { }
  
ngOnInit(){
  
}

register() {
 // if (this.registrationForm.valid) {
  //  const newUser = this.registrationForm.getRawValue()
  //  const users = this.localStorageService.getItem('users') || [];
    //const existingUser = users.some((u: any) => u.login == newUser.login);
    //if (existingUser) {
    //  alert('Cet utilisateur existe déjà ');
    //  return;
 //   }
    //users.push(newUser);
    //this.localStorageService.setItem('users', users);
    //this.registrationForm.reset();
    //this.router.navigate(['/login']);
//  }
}

confirm() {
  this.confirmationService.confirm({
      message: 'Félicitation vous êtes inscrit',
      icon: 'pi pi-exclamation-triangle',
    
      
  });
}

valide() {
  this.router.navigate(['/event']);
}

}
