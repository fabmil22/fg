import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniatComponent } from './iniat.component';

describe('IniatComponent', () => {
  let component: IniatComponent;
  let fixture: ComponentFixture<IniatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
