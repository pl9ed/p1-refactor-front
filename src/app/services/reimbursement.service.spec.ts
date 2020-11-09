import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ReimbursementService } from './reimbursement.service';
import { environment } from 'src/environments/environment';
import { Reimbursement } from '../models/reimbursement';
import { Employee } from '../models/employee';

describe('ReimbursementService', () => {
  let service: ReimbursementService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ReimbursementService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make get requests for single reimbursements', () => {
    let id = 1;
    let reimb = service.getSingle(id);
    http.expectOne(`${environment.API_URL}/reimbursement/${id}`);
  })
});
