import { Component } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';

  constructor(private EmployeeserviceService: EmployeeserviceService) {}

  changePassword(): void {
    const savedPassword = this.EmployeeserviceService.getPassword();

    if (this.oldPassword === savedPassword) {
      this.EmployeeserviceService.setPassword(this.newPassword);
      alert('Password changed successfully!');
    } else {
      alert('Failed to change password. Please try again.');
    }
  }
}
