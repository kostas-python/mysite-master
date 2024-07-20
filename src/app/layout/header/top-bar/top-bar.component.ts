import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ContactComponent } from 'src/app/pages/contact/contact.component';


@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink, RouterModule, ContactComponent,CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
