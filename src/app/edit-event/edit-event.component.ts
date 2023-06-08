import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event/event.service';
import { Event } from '../event-page/event-page.component';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit{

  event: Event | undefined;           


  constructor(
    private route: ActivatedRoute,  
    private eventService: EventService 
  ){}

  ngOnInit()
  { 
    const eventId : string|null = this.route.snapshot.paramMap.get('id') // verif
    if(eventId) {
    this.event = this.eventService.getEventById(+eventId)
    }else{
    this.event = undefined
    }
  }

 

}
