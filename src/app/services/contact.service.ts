
import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Injectable({
  providedIn: 'root'
})


export class ContactService {
  constructor() {
    emailjs.init('MY_USER_ID'); // Replace with my EmailJS user ID (for future ste up)
  }


// for future set up

  sendEmail(data: { [key: string]: string }): Promise<EmailJSResponseStatus> {
    return emailjs.send(
      'MY_SERVICE_ID',
      'MY_TEMPLATE_ID',
      data,
      'MY_USER_ID'
    );
  }
}

