import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string
  password:string
  invalidLogin = false

  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  async login() {
    let user = await this.employeeService.login(this.username, this.password)
    if (user) {
      if (user.type == 'EMPLOYEE') {
        this.router.navigate(['/employeeportal'])
      } else if (user.type == 'FINANCE_MANAGER') {
        this.router.navigate(['/fmportal'])
      }
    } else {
      this.invalidLogin = true
    }
  }

}
