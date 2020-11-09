import { Employee } from './employee'

export class Reimbursement {
  submitter:Employee
  imageUrl:string
  resolver:Employee
  amount:Number
  description:string
  category:string
  status:Number

  constructor(submitter:Employee, imageUrl:string);
  constructor(submitter:Employee,imageUrl:string,resolver?:Employee,amount?:Number,description?:string,category?:string,status?:Number) {
    this.submitter = submitter
    this.imageUrl = imageUrl
    this.resolver = resolver
    this.amount = amount
    this.description = description
    this.category = category
    this.status = status
  };
}
