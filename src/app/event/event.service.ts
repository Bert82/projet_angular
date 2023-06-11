import { Injectable } from '@angular/core';
import { Event } from '../event-page/event-page.component';
import { Evenement } from '../event-page/event-list';
@Injectable({
  providedIn: 'root'
})
export class EventService {
private storageKey = 'events';


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
  return ['Treck', 'Marathon', 'Rando', 'course'];
}

deleteEventById(eventId : number)
{
  const index = Evenement.findIndex(event => event.id === eventId);
  if (index !== -1) {
    Evenement.splice(index, 1);
  }
}

getEvents(): Event[] {
  const storedEvents = localStorage.getItem(this.storageKey);
  return storedEvents ? JSON.parse(storedEvents) : [];
}



create(event: Event){
  Evenement.push(event);
  const storedEvents = this.getEvents();
  storedEvents.push(event);
  localStorage.setItem(this.storageKey, JSON.stringify(storedEvents));
}

}
