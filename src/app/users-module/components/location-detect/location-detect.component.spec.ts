import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetectComponent } from './location-detect.component';

describe('LocationDetectComponent', () => {
  let component: LocationDetectComponent;
  let fixture: ComponentFixture<LocationDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
