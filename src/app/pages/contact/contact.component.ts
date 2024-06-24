import { Component,} from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TopBarComponent } from 'src/app/layout/header/top-bar/top-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';





@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RouterOutlet,RouterModule,
    TopBarComponent, FormsModule,ReactiveFormsModule,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})



export class ContactFormComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  };



  constructor(private http: HttpClient) { }



  onSubmit() {
    const url = 'http://localhost:3000/send-email';
    this.http.post(url, this.formData).subscribe(
      response => {
        console.log('Email sent successfully!', response);
      },
      error => {
        console.error('Error sending email', error);
      }
    );
  }
}
