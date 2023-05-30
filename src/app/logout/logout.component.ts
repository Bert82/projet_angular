import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.disconnect(); // Appeler la méthode de déconnexion de votre service d'authentification
  }

 }
