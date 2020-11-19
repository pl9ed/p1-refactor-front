import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Reimbursement } from 'src/app/models/reimbursement';
import { ReimbursementService } from '../../services/reimbursement.service'

@Component({
  selector: 'app-fm-portal',
  templateUrl: './fm-portal.component.html',
  styleUrls: ['./fm-portal.component.css']
})
export class FmPortalComponent implements OnInit {

  reimbModalData: Reimbursement = null
  showPending:Boolean = true
  showApproved:Boolean = false
  showDenied:Boolean = false
  searchCategory:string = "default"
  searchTerm:string = ""

  reimbList:Reimbursement[] = []

  constructor(private reimbService: ReimbursementService, private router: Router) {
    let user = <Employee>JSON.parse(sessionStorage.getItem('user'))
    if (user && user.type == "FINANCE_MANAGER") {
      this.loadReimbursements();
    } else {
      this.router.navigate(['/home'])
    }
  }

  ngOnInit(): void {
  }

  async loadReimbursements() {
    this.reimbList = await this.reimbService.getAll().toPromise()
    this.reimbList.sort((a,b) => a.id - b.id)
  }

  loadModal(r: Reimbursement) {
    this.reimbModalData = r;
  }

  // approve/deny need puts
  approve(r: Reimbursement) {
    this.update(r, 1)
  }

  deny(r: Reimbursement) {
    this.update(r, -1)
  }

  update(r: Reimbursement, status:number) {
    r.status = status
    r.resolver = JSON.parse(sessionStorage.getItem('user'))
    r.resolveDate = new Date().getTime()
    this.reimbModalData = r
    let test = this.reimbService.updateReimbursement(r)
  }

  logout() {
    sessionStorage.removeItem('user')
    this.router.navigate(['/home'])
  }
}
