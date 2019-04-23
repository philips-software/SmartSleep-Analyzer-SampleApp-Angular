import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMassIndexComponent } from './body-mass-index.component';

describe('BodyMassIndexComponent', () => {
  let component: BodyMassIndexComponent;
  let fixture: ComponentFixture<BodyMassIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyMassIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMassIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
