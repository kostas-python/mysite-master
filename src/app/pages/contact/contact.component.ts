import { Component,} from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TopBarComponent } from 'src/app/layout/header/top-bar/top-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';





@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RouterOutlet,RouterModule,
    TopBarComponent, FormsModule,ReactiveFormsModule,],
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
      .then(() => {
        // Email sent successfully
        console.log('Email sent successfully');
      })
      .catch((error) => {
        // Error sending email
        console.error('Error sending email:', error);
      });
  }
}