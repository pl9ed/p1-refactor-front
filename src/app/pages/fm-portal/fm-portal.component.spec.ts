import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Employee } from 'src/app/models/employee';
import { Reimbursement } from 'src/app/models/reimbursement';
import { ReimbfilterPipe } from 'src/app/pipes/reimbfilter.pipe';
import { ReimbursementService } from 'src/app/services/reimbursement.service';
import { HomeComponent } from '../home/home.component';

import { FmPortalComponent } from './fm-portal.component';

describe('FmPortalComponent', () => {
  let component: FmPortalComponent;
  let fixture: ComponentFixture<FmPortalComponent>;
  let reimbService: ReimbursementService;

  const testUser = new Employee("user","pass")

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmPortalComponent, ReimbfilterPipe ],
      imports: [ HttpClientModule, 
        FormsModule,
        RouterTestingModule.withRoutes([
        {path:'home', component:HomeComponent}
      ])],
    })
    .compileComponents();
    reimbService = TestBed.inject(ReimbursementService)
  }));

  beforeEach(() => {
    testUser.type = "FINANCE_MANAGER"
    sessionStorage.setItem('user', JSON.stringify(testUser))
    fixture = TestBed.createComponent(FmPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear sessionstorage when logging out', () => {
    component.logout()
    expect(sessionStorage.getItem('user')).toBeNull();
  })

  it('should approve', () => {
    let testReimb = new Reimbursement(0, testUser, "fakeurl")
    let spy = spyOn(reimbService, 'updateReimbursement')

    component.approve(testReimb)

    expect(component.reimbModalData.status).toBe(1)
    expect(component.reimbModalData.resolver).toBeTruthy()
    expect(component.reimbModalData.resolveDate).toBeTruthy()
    expect(spy).toHaveBeenCalled()
  })

  it('should deny', () => {
    let testReimb = new Reimbursement(0, testUser, "fakeurl")
    let spy = spyOn(reimbService, 'updateReimbursement')

    component.deny(testReimb)

    expect(component.reimbModalData.status).toBe(-1)
    expect(component.reimbModalData.resolver).toBeTruthy()
    expect(component.reimbModalData.resolveDate).toBeTruthy()
    expect(spy).toHaveBeenCalled()
  })
});
