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
  inscriptionForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    birthday: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    adresse: new FormControl('',[Validators.required]),
    ville: new FormControl('',[Validators.required]),
   // sexe: new FormControl('false',[Validators.requiredTrue]),
  })

  
constructor(
  private readonly localStorageService: LocalStorageServiceService,
  private readonly router: Router,
  private readonly _authService: AuthService,
  
) { }
  
ngOnInit(){ 
    const currentUser = this._authService.currentUser;
    console.log(currentUser)
      this.inscriptionForm.patchValue({
        firstName: currentUser?.firstName,
        lastName: currentUser?.lastName,
        birthday: currentUser && currentUser.birthday ? (currentUser.birthday) : '',
        email: currentUser?.email

      });
}

OnSubmit() {
  if (this.inscriptionForm.valid) {
    const users = this.localStorageService.getItem('users') || [];
    
    users.push(this.inscriptionForm.value);
    this.localStorageService.setItem('users', users);
    this.inscriptionForm.reset();
    this.router.navigate(['/event']);
    }
}


}
