import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NluComponent } from './nlu.component';

describe('NluComponent', () => {
  let component: NluComponent;
  let fixture: ComponentFixture<NluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
