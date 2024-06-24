

// contact.service.ts
import { Injectable } from '@angular/core';
import nodemailer, { Transporter } from 'nodemailer';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
      }
    });
  }

  sendEmail(formData: { firstName: string; lastName: string; email: string; phoneNumber: string; message: string }): Promise<any> {
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'recipient-email@example.com',
      subject: 'New Contact Form Submission',
      text: `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Phone Number: ${formData.phoneNumber}
        Message: ${formData.message}
      `
    };

    return this.transporter.sendMail(mailOptions);
  }
}

