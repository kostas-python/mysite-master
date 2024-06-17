import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';




export const routes: Routes = [
    { path: 'home' , component: HomeComponent },
    { path: 'contact' , component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'team' , component: TeamComponent },
];
