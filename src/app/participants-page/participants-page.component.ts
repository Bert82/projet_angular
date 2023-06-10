
import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from '../local-storage-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-participants-page',
  templateUrl: './participants-page.component.html',
  styleUrls: ['./participants-page.component.css']
})
export class ParticipantsPageComponent implements OnInit {

  registerData: any[] = [];

  constructor(
    private readonly localStorageService: LocalStorageServiceService,
    private readonly router: Router,
    private readonly _authService: AuthService,
    
  ) { }

  ngOnInit() {
    const localStorageData = this.localStorageService.getItem('registerData');
    console.log(localStorageData )
    if (localStorageData) {
      this.registerData = localStorageData;
    }
  }

}
