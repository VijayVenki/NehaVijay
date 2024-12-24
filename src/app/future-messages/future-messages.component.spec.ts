import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureMessagesComponent } from './future-messages.component';

describe('FutureMessagesComponent', () => {
  let component: FutureMessagesComponent;
  let fixture: ComponentFixture<FutureMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureMessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
