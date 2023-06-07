import { Injectable } from '@angular/core';
import { Event } from '../event-page/event-page.component';
import { Evenement } from '../event-page/event-list';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

getEventList() : Event[]
{
  return Evenement;
}

getEventById(eventId: number): Event|undefined
{
  return Evenement.find(event => event.id == eventId);
}

getEventByType(): string[] 
{
  return ['Treck', 'Marathon', 'Rando'];
}

}
