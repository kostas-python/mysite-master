import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './layout/header/top-bar/top-bar.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent, } from "./pages/contact/contact.component";
import { TeamComponent } from './pages/team/team.component';
import 'animate.css';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';





@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, TopBarComponent,
        FooterComponent, HomeComponent, ContactComponent, RouterLink,
      RouterLinkActive,TeamComponent,RouterModule,RouterModule,FormsModule,HttpClientModule]
})



export class AppComponent {}
