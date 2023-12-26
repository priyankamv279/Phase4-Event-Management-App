import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    // authentication logic
    const isValid = this.authenticate(); 

    if (isValid) {
      alert('Successfully Logged in'); 
      this.router.navigate(['/changepassword']); // Navigate to change password page on successful login
    } else {
      alert('Invalid credentials. Please try again.'); // Show error message for invalid credentials
    }
  }

  authenticate(): boolean {
    return this.username === 'admin' && this.password === 'admin';
  }
}
