import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacletteComponent } from './raclette.component';

describe('RacletteComponent', () => {
  let component: RacletteComponent;
  let fixture: ComponentFixture<RacletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacletteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
