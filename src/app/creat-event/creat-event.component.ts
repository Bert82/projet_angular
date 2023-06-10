import { Component, OnInit } from '@angular/core';
import { Event } from '../event-page/event-page.component';

@Component({
  selector: 'app-creat-event',
  templateUrl: './creat-event.component.html',
  styleUrls: ['./creat-event.component.css']
})
export class CreatEventComponent implements OnInit{

event: Event; 

ngOnInit() {
  this.event = new Event();
}

}
