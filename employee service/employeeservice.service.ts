import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
private url='http://localhost:3000/employees';
  constructor(private http:HttpClient) { }

  private savedPassword: string = 'admin';

  getPassword(): string {
    return this.savedPassword;
  }

  setPassword(newPassword: string): void {
    this.savedPassword = newPassword;
  }

addemployee(employee:any){
  return this.http.post(this.url,employee);
}


getEmployeeById(id: number): Observable<any> {
  const url = `${this.url}/${id}`;
  return this.http.get(url);
}

getemployee():Observable<any>{
  return this.http.get(this.url);
}

deletEmployee(id: number): Observable<any> {
  const url = `${this.url}/${id}`;
  return this.http.delete(url);
}

updateEmployee(id: number, updatedemployee: any): Observable<any> {
  const url = `${this.url}/${id}`;
  return this.http.put(url, updatedemployee);
}
}
