import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home' },
          { label: 'Evènement', routerLink:'/event' },
          { label: 'Insription', routerLink:'/inscription'},
          { label: 'S\'enregistrer', routerLink:'/registration' },
        ];

        this.activeItem = this.items[0];
  }

}
