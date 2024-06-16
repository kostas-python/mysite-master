import { Component, } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import 'src/styles.css'




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LazyLoadImageModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}