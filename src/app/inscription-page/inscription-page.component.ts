import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageServiceService } from '../local-storage-service.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService} from 'primeng/api';
import { Evenement } from '../event-page/event-list';
import { EventService } from '../event/event.service';




@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class InscriptionPageComponent {
  inscriptionForm: FormGroup;
  formData: any[] =[];
  Evenement = Evenement;
  
constructor(
  private _localStorageService: LocalStorageServiceService,
  private readonly router: Router,
  private formBuilder: FormBuilder
) { 
   this.inscriptionForm = this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    birthday: ['',Validators.required],
    email: ['',Validators.required],
    adresse: ['',Validators.required],
    ville: ['',Validators.required],
    event: ['',Validators.required],
   
  })
}

OnSubmit() {
  
   if (this.inscriptionForm.valid) {
   const formData = this.inscriptionForm.value;
   const registerData = this._localStorageService.getItem('registerData') || [];
   registerData.push(formData);
   this._localStorageService.setItem('registerData', registerData);
   this.inscriptionForm.reset();
  }
}


}
