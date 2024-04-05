import { Component } from '@angular/core';
import {  RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TopBarComponent } from 'src/app/layout/header/top-bar/top-bar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RouterOutlet,RouterModule,TopBarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
