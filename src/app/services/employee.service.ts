import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  user: Employee;

  constructor(private http: HttpClient) {}

  async login(username: string, password: string) {
    let loginData = new FormData();
    loginData.append('username', username);
    loginData.append('password', password);

    let user = await this.http
      .post(
        `${environment.API_URL}/login`, loginData
      )
      .toPromise();
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}
