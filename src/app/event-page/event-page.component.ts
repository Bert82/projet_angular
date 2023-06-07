import { Component, OnInit } from '@angular/core';
import { Evenement } from './event-list';
import { Router } from '@angular/router';
import { EventService } from '../event/event.service';


export class Event {
  id: number;
  distance: number;
  lieu: string;
  name: string;
  picture: string;
  types: Array<string>;
  created: Date;
}


@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  EventList: Event[] = Evenement;
 
  constructor 
  (
    private router: Router,
    private eventService : EventService
    ){}

  ngOnInit() {
    this.EventList = this.eventService.getEventList();
   
  }
  
  eventDetail(event: Event)
  {
    this.router.navigate(['/detail', event.id]);
  }
    
  
  
}
