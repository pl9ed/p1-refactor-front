import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string
  password:string

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(`Username: ${this.username}`)
    console.log(`Pass: ${this.password}`)
    this.employeeService.login(this.username, this.password)
  }

}
