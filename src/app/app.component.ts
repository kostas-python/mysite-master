import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './layout/header/top-bar/top-bar.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from "./pages/contact/contact.component";
import { TeamComponent } from './pages/team/team.component';





@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, TopBarComponent,
        FooterComponent, HomeComponent, ContactComponent,RouterModule, RouterLink,
      RouterLinkActive,TeamComponent]
})



export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'mysite';

}
