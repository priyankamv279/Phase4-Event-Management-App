import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employee: any;
  isEditing = false;
  originalEmployee: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeserviceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const employeeId = params['id'];
      this.employeeService.getEmployeeById(employeeId).subscribe(data => {
        this.employee = data;
        this.originalEmployee = { ...data }; // Create a copy for editing
      });
    });
  }

  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }

  cancelEditMode(): void {
    this.employee = { ...this.originalEmployee }; // Reset to original values
    this.isEditing = false;
  }

  updateEmployee(): void {
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(updatedEmployee => {
        this.employee = updatedEmployee;
        this.originalEmployee = { ...updatedEmployee }; // Update original values
        this.isEditing = false;
      });
    }
  }

  deleteEmployee(): void {
    if (this.employee) {
      this.employeeService.deletEmployee(this.employee.id).subscribe(() => {
        // Redirect to the employee list or another page after deletion
        this.router.navigate(['/employees']); 
      });
    }
  }
}
