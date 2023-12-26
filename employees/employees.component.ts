import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {
  employees: any[]=[];
  id=""
  first_name=""
  last_name=""
  email=""
  
  
    constructor(private employeeservice:EmployeeserviceService) { }
  
  
    ngOnInit(): void {
      this.getemployees();
    }
  
    getemployees():void{
    this.employeeservice.getemployee().subscribe(data=>{this.employees=data});
  }
  
  deletEmployee(id: number): void {
    this.employeeservice.deletEmployee(id).subscribe(() => {
      this.employees = this.employees.filter((employee) => employee.id !== id);
    });
  }
  
  cancelUpdate(employee: any): void {
    employee.editing = false;
  }
  
  updateEmployee(employee: any): void {
    this.employeeservice.updateEmployee(employee.id, {
      first_name: employee.first_name,
      last_name: employee.last_name,
      email: employee.email

    }).subscribe(() => {
      employee.editing = false;
    });
  }
  
  }
  