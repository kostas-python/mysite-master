import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ContactComponent } from 'src/app/pages/contact/contact.component';



@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink, RouterModule, ContactComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  constructor(private router: Router) {}


}
