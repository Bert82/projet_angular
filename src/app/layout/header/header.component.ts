import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;

  constructor(private authService: AuthService){}

  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink:'/home' },
          { label: 'Evènement', routerLink:'/event' },
          { label: 'Insription', 
          items: [
            {
                label: 'Treck',
                icon: 'pi pi-fw pi-align-left',
                routerLink:'/inscription'
            },
            {
                label: 'Marathon',
                icon: 'pi pi-fw pi-align-right',
                routerLink:'/inscription-marathon'
            },
            {
                label: 'Rando',
                icon: 'pi pi-fw pi-align-center',
                routerLink:'/inscription-rando'
            }
          ]
          },
          { label: 'S\'enregistrer', routerLink:'/registration' },
          { label: 'Participants', routerLink:'/participants'},
        ];

        this.activeItem = this.items[0];
  }

  logout() {
    this.authService.disconnect();
  }

}
