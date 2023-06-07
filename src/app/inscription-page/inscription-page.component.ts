import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  inscriptionForm: FormGroup;
  formData: any[] =[];
  
   
  
constructor(
  private readonly localStorageService: LocalStorageServiceService,
  private readonly router: Router,
  private readonly _authService: AuthService,
  private formBuilder: FormBuilder
) { 
   this.inscriptionForm = this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    birthday: ['',Validators.required],
    email: ['',Validators.required],
    adresse: ['',Validators.required],
    ville: ['',Validators.required],
   
  })
}
  
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
    const formData = this.inscriptionForm.value;
    this.formData.push(formData);
    this.inscriptionForm.reset();
  }
}


}
