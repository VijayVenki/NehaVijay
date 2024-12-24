import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-tree-display',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './family-tree-display.component.html',
  styleUrls: ['./family-tree-display.component.scss']
})
export class FamilyTreeDisplayComponent {
  @Input() treeData: any;

  constructor(private router: Router) {}

  navigateToProfile(id: string) {
    // Navigate to the profile page with the person ID
    this.router.navigate(['/profile', id]);
  }
}
