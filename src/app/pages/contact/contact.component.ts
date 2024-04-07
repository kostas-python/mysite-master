import { Component,} from '@angular/core';
import {  RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TopBarComponent } from 'src/app/layout/header/top-bar/top-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RouterOutlet,RouterModule,
    TopBarComponent, FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})



export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';


  constructor(private http: HttpClient) {}

  //  Form subsmission  //
  
  onSubmit(contactForm: NgForm) {
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message
    };


    this.http.post('http://bla/bla/bla', formData)
      .subscribe({
        next: (response) => {
          console.log('Form submission successful!', response);
          contactForm.resetForm();
        },

        error: (error) => {
          console.error('Error submitting form:', error);
        }
      });
  }
}
