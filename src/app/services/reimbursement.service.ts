import { Injectable } from '@angular/core';
import { Reimbursement } from '../models/reimbursement';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  constructor(private http: HttpClient) {}

  async getSingle(id:Number):Promise<Reimbursement> {
    return this.http.get<Reimbursement>(`${environment.API_URL}/reimbursement/${id}`).toPromise()
  }

}
