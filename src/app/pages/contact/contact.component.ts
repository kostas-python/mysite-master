import { Component, OnInit } from '@angular/core';
import {  RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TopBarComponent } from 'src/app/layout/header/top-bar/top-bar.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RouterOutlet,RouterModule,TopBarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    
    const submitBtn = document.querySelector('.submit-btn') as HTMLInputElement;
    submitBtn.addEventListener('click', this.onSubmit);
  }

  onSubmit(event: Event) {
    event.preventDefault(); 
    
    console.log('Form submitted!');
    
    const nameInput = document.getElementById('name') as HTMLInputElement;
    console.log('Name:', nameInput.value);
    
  }
}
