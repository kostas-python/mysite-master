
import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Injectable({
  providedIn: 'root'
})


export class ContactService {
  constructor() {
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
  }


  sendEmail(data: { [key: string]: string }): Promise<EmailJSResponseStatus> {
    return emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      data,
      'YOUR_USER_ID'
    );
  }
}

