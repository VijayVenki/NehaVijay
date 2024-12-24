import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { UsSoFarComponent } from './us-so-far/us-so-far.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FutureMessagesComponent } from './future-messages/future-messages.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'family-tree', component: FamilyTreeComponent},
    {path: 'us-so-far', component: UsSoFarComponent},
    {path: 'your-third-tile', component: UsSoFarComponent },
    { path: 'profile/:id', component: ProfilePageComponent },
    {path: 'future-messages', component: FutureMessagesComponent}
];
