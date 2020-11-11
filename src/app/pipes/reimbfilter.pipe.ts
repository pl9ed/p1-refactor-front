import { Pipe, PipeTransform } from '@angular/core';
import { Reimbursement } from '../models/reimbursement';

@Pipe({
  name: 'reimbfilter',
})
export class ReimbfilterPipe implements PipeTransform {
  transform(
    value: Reimbursement[],
    showApproved: Boolean,
    showPending: Boolean,
    showDenied: Boolean,
    searchCategory: string,
    searchTerm: string,
    ...args: any[]
  ): Reimbursement[] {
    let ret = value;    
    if (!showPending) {
      ret = ret.filter((reimb) => {
        return reimb.status != 0;
      })
    }
    if (!showApproved) {
      ret = ret.filter(reimb => {
        return reimb.status != 1
      })
    }
    if (!showDenied) {
      ret = ret.filter(reimb => {
        return reimb.status != -1
      })
    }
    if (searchCategory != "default" && searchTerm.length > 0) {
      let terms = searchCategory.split("_");
      console.log("terms: " + terms)
      if (terms.length > 1) {
        ret = ret.filter(reimb => {
          let employee = reimb[terms[0]];
          if (employee) {
            let comparison:string
            if (terms[1] == "name") {
              comparison = (employee.firstName + " " + employee.lastName).toLowerCase();
            } else {
              comparison = employee[terms[1]].toLowerCase();
            }
            return comparison.includes(searchTerm.toLowerCase())
          }
        })
      } else {
        ret = ret.filter( reimb => {
          return reimb[searchCategory].toString().includes(searchTerm.toLowerCase())
        })
      }
    }

    return ret;
  }

  filterBy(ret: Reimbursement[], searchCategory: string, searchTerm: string) {
    
  }
}
