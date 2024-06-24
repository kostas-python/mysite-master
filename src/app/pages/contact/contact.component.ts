import { Component,} from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TopBarComponent } from 'src/app/layout/header/top-bar/top-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { EmailJSResponseStatus } from 'emailjs-com';
import { GoogleMapComponent } from 'src/app/google-map/google-map.component';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';




@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RouterOutlet,RouterModule,
    TopBarComponent, FormsModule,ReactiveFormsModule,GoogleMapsModule,GoogleMap],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})



export class ContactComponent {
  formData: { firstName: string; lastName: string; email: string; phoneNumber: string; message: string } = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  };


  constructor(private contactService: ContactService) {}


  onSubmit() {
    this.contactService.sendEmail(this.formData)
      .then((result: EmailJSResponseStatus) => {
        console.log('Email sent successfully!', result.text);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  }
}