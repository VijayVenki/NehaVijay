import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as family_data from '../../assets/family-data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  standalone: true,
  imports:[
    CommonModule
  ]
})
export class ProfilePageComponent implements OnInit {
  memberId: string | null = null;
  person: any;

  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    // Retrieve member ID from the URL
    this.memberId = this.route.snapshot.paramMap.get('id');

    this.person = this.findMemberById(family_data.herSide, this.memberId);
    if(this.person == null){
      this.person = this.findMemberById(family_data.mySide, this.memberId)
    }
    console.log(this.person)
  }

  // Recursive function to find member by ID
  findMemberById(data: any, id: string | null): any {
    if (!data || !id) return null;

    for (let person of data.grandparents || []) {
      if (person.id === id) return person;
      for (let child of person.children || []) {
        if (child.id === id) return child;
        for (let grandchild of child.children || []) {
          if (grandchild.id === id) return grandchild;
        }
      }
      for (let cousin of person.cousins || []) {
        if (cousin.id === id) return cousin;
      }
    }
    return null;
  }
  clickBackButton() {
    this.router.navigate(['/family-tree'], {
      queryParams: { selectedSide: 'mySide' }});
  }
}

