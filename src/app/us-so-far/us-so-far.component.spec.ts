import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsSoFarComponent } from './us-so-far.component';

describe('UsSoFarComponent', () => {
  let component: UsSoFarComponent;
  let fixture: ComponentFixture<UsSoFarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsSoFarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsSoFarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
