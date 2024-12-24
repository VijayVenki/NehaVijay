import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTreeDisplayComponent } from './family-tree-display.component';

describe('FamilyTreeDisplayComponent', () => {
  let component: FamilyTreeDisplayComponent;
  let fixture: ComponentFixture<FamilyTreeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyTreeDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyTreeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
