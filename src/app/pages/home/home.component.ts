import { Component, } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import 'src/styles.css'
import { FooterComponent } from "../../layout/footer/footer/footer.component";




@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [LazyLoadImageModule, FooterComponent]
})
export class HomeComponent {

}