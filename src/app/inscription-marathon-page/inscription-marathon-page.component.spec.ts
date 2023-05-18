import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionMarathonPageComponent } from './inscription-marathon-page.component';

describe('InscriptionMarathonPageComponent', () => {
  let component: InscriptionMarathonPageComponent;
  let fixture: ComponentFixture<InscriptionMarathonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionMarathonPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionMarathonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
