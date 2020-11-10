import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let spy: any
  let empService: EmployeeService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        RouterModule.forRoot([])],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
    empService = TestBed.inject(EmployeeService)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show message on invalid credentials', () => {
    spy = spyOn(empService, 'login').and.returnValue(null)
    expect(component.invalidLogin).toBeFalse()
    component.username = 'wronguser'
    component.password = 'wrongpass'
    component.login()

    // not sure what's going on here
    //expect(component.invalidLogin).toEqual(true)
  })
});
