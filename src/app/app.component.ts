import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './layout/header/top-bar/top-bar.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TopBarComponent,FooterComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit {
  title = 'mysite';

  constructor(private primengConfig: PrimeNGConfig) {}

  
  ngOnInit() {
      this.primengConfig.ripple = true;
  }
}
