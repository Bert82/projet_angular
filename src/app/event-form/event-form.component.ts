import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event-page/event-page.component';
import { EventService } from '../event/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  @Input() event: Event;

type : string[];

constructor( 
  private eventService : EventService,
  private router: Router
  ){}


ngOnInit() {
  this.type = this.eventService.getEventByType();
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
  console.log('submit form!');
  this.router.navigate(['/detail', this.event.id]);

}

  
}
