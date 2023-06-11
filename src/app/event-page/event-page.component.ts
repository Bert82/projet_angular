import { Component, OnInit } from '@angular/core';
import { Evenement } from './event-list';
import { Router } from '@angular/router';
import { EventService } from '../event/event.service';
import { LocalStorageServiceService } from '../local-storage-service.service';


export class Event {

  id: number;
  distance: number;
  lieu: string;
  name: string;
  picture: string;
  types: string[];
  created: Date;

  constructor(
  distance: number = 0,
  lieu: string = 'lieu',
  name: string = 'Nom',
  picture: string = 'https://fr.freepik.com/photos/marche-sport',
  types: string[]= ['Treck'],
  created: Date = new Date,
  ){
  this.distance = distance;
  this.lieu = lieu;
  this.name = name;
  this.picture = picture;
  this.types = types;
  this.created = created;
}
}


@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit{
  EventList: Event[] = Evenement;
  events : any[] = [];

  constructor 
  (
    private router: Router,
    private eventService : EventService,
    private localStorageService : LocalStorageServiceService
    ){}

  ngOnInit() {
    this.EventList = this.eventService.getEventList();
    this.events = this.eventService.getEvents();
   
  
  }
  
  eventDetail(event: Event)
  {
    this.router.navigate(['/detail', event.id]);
  }
  
}
