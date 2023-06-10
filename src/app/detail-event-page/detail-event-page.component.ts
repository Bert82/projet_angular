import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event-page/event-page.component';
import { EventService } from '../event/event.service';


@Component({
  selector: 'app-detail-event-page',
  templateUrl: './detail-event-page.component.html',
  styleUrls: ['./detail-event-page.component.css']
})
export class DetailEventPageComponent {
  EventList: Event[];
  event : Event|undefined;

  constructor(
    private readonly router: ActivatedRoute,
    private readonly _router: Router,
    private eventService: EventService 
  ){}

  ngOnInit(): void {
    const eventId: string |null = this.router.snapshot.paramMap.get('id');
    if (eventId){
    this.event = this.eventService.getEventById(+eventId);
    }
  }

  Delete(event: Event)
  {
    this.eventService.deleteEventById(event.id)  
    this._router.navigate(['/event']);
  }

  Retour()
  {
    this._router.navigate(['/event']);
  }

  Edit(event: Event)
  {
    this._router.navigate(['/edit-event',event.id]);
  }


}
