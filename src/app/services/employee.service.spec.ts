import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Employee } from '../models/employee';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let http: HttpClient;
  let spy:any

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EmployeeService);
    http = TestBed.inject(HttpClient);
    sessionStorage.clear;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save user to session storage', async () => {
    spy = spyOn(http, 'post').and.returnValue(of(new Employee('user','pass')));

    let user = await service.login('user','pass');

    expect(user.username).toEqual('user');
    expect(sessionStorage.getItem('user')).toEqual(JSON.stringify(user));
  })

  it('should return null if invalid login', async () => {
    spy = spyOn(http, 'post').and.returnValue(null)

    let user = await service.login('wrong','login');

    expect(user).toBeNull(user);
  })
});
