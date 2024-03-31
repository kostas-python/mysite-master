import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  menuCollapsed: any;

  toggleMenu() {
    this.menuCollapsed = !this.menuCollapsed;
  }

}
