import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FamilyTreeDisplayComponent } from '../family-tree-display/family-tree-display.component';
import { CommonModule } from '@angular/common';
import * as family_data from '../../assets/family-data.json';

@Component({
  selector: 'app-family-tree',
  standalone: true,
  imports: [
    FamilyTreeDisplayComponent,
    CommonModule
  ], 
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent implements OnInit {
  familyData: any;
  @Input()
  selectedSide: 'herSide' | 'mySide' | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Load the family data from JSON file
   this.familyData = family_data
   console.log("The selected Side is ", this.selectedSide)
  }

  selectSide(side: 'herSide' | 'mySide' | null) {
    // Set the selected side to display the family tree
    this.selectedSide = side;
  }
}
