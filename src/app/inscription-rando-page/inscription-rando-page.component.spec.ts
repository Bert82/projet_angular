import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionRandoPageComponent } from './inscription-rando-page.component';

describe('InscriptionRandoPageComponent', () => {
  let component: InscriptionRandoPageComponent;
  let fixture: ComponentFixture<InscriptionRandoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionRandoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionRandoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
