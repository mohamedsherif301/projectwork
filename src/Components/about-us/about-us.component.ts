import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUSComponent {
  formData = {
    email: '',
    message: ''
  };
  fullname !: string

  submitted = false;
  successMessage = false;
  errorMessage = '';

  // دالة الإرسال باستخدام EmailJS
  onSubmit() {
    if (this.formData.email && this.formData.message) {
      emailjs.send(
        'service_922ox9n',       // استبدل بـ Service ID الخاص بك من EmailJS
        'template_zr4we1o',      // استبدل بـ Template ID الخاص بك من EmailJS
        {
          from_email: this.formData.email,
          message: this.formData.message
        },
        '1BfroG3-NWn54x_5k'        // استبدل بـ Public Key الخاص بك من EmailJS
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        this.successMessage = true;
        this.errorMessage = '';
        this.submitted = true;

        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.formData = { email: '', message: '' };
      }, (error) => {
        console.error('Error sending message:', error);
        this.errorMessage = 'Failed to send your message. Please try again.';
      });
    }
  }
}
