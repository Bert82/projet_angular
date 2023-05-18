import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageServiceService } from '../local-storage-service.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService} from 'primeng/api';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscription-rando-page',
  templateUrl: './inscription-rando-page.component.html',
  styleUrls: ['./inscription-rando-page.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class InscriptionRandoPageComponent implements OnInit{
  value: string
  inscriptionForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    birthday: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    adresse: new FormControl('',[Validators.required]),
    ville: new FormControl('',[Validators.required]),
    sexe: new FormControl('',[Validators.required]),
  })

constructor(
  private readonly localStorageService: LocalStorageServiceService,
  private readonly router: Router,
  private confirmationService: ConfirmationService, private messageService: MessageService,
  private readonly _authService: AuthService,
  
) { }
  
ngOnInit(){ 
    const currentUser = this._authService.currentUser;
      this.inscriptionForm.patchValue({
        firstName: currentUser?.firstName,
        lastName: currentUser?.lastName,
        birthday: currentUser && currentUser.birthday ? (currentUser.birthday) : '',
        email: currentUser?.email

      });
}

register() {
  if (this.inscriptionForm.valid) {
    const newUser = this.inscriptionForm.getRawValue()
    const users = this.localStorageService.getItem('users') || [];
    //const existingUser = users.some((u: any) => u.login == newUser.login);
    //if (existingUser) {
    //  alert('Cet utilisateur existe déjà ');
    //  return;
    // }
    users.push(users);
    this.localStorageService.setItem('users', users);
    this.inscriptionForm.reset();
    this.router.navigate(['/event']);
    }
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
