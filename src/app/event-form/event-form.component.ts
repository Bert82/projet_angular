import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event-page/event-page.component';
import { EventService } from '../event/event.service';
import { Router } from '@angular/router';
import { Evenement } from '../event-page/event-list';
import { ColorPipe } from '../color.pipe';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  @Input() event: Event;
  Evenement = Evenement;
  isCreatEvent: boolean;

type : string[];

constructor( 
  private eventService : EventService,
  private router: Router,
  ColorPipe : ColorPipe
  ){}


ngOnInit() {
  this.type = this.eventService.getEventByType();
  this.isCreatEvent = this.router.url.includes('creat');  //verifier si on est dans un ajout ou non
  }


Type( type: string): boolean
{
 return this.event.types.includes(type);
}

isTypesValid(type: string): boolean
{
  if(this.event.types.length == 0 && this.Type(type)) 
  {
    return false;
  }
  if(this.event.types.length > 1 && !this.Type(type))
  {
    return false;
  }

  return true;
}

OnSubmit()
{
  if(this.isCreatEvent)
  { // générer un ID unique
    const lastEventId = localStorage.getItem('lastEventId');
    const eventId = lastEventId ? parseInt(lastEventId) + 1 : 4;
    this.event.id = eventId

    this.eventService.create(this.event)
    this.router.navigate(['/event']);
  } else {
  console.log('submit form!');
  this.router.navigate(['/detail', this.event.id]);
}
}

  
}
