import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/layout/footer/footer/footer.component';
import { TopBarComponent } from 'src/app/layout/header/top-bar/top-bar.component';



@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    RouterLink, RouterOutlet,
    TopBarComponent, RouterModule,FooterComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
