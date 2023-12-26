import { Component } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployees',
  templateUrl: './addemployees.component.html',
  styleUrls: ['./addemployees.component.css']
})
export class AddemployeesComponent {
  employees: any[] = [];
  first_name = "";
  last_name = "";
  email = "";

  constructor(
    private employeeservice: EmployeeserviceService,
    private router: Router
  ) {}

  addemployee(): void {
      console.log('First Name:', this.first_name);
      console.log('Last Name:', this.last_name);
      console.log('Email:', this.email);
      
    if (this.first_name.trim() && this.last_name.trim() && this.email.trim()) {
      const newEmployee = {
        first_name: this.first_name.trim(),
        last_name: this.last_name.trim(),
        email: this.email.trim()
      };
  
      this.employeeservice.addemployee(newEmployee).subscribe(_ => {
        alert('Employee added successfully!');
        this.router.navigate(['/employees']); // Navigate to employees list after addition
      });
    } else {
      alert('Please fill in all the fields');
    }
  }
  
}
