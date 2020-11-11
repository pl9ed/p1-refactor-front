import { Employee } from './employee'

export class Reimbursement {
  submitter:Employee
  imageUrl:string
  resolver:Employee
  amount:Number
  description:string
  category:string
  status:Number
  id:number
  submitDate:number
  resolveDate:number

  constructor(id:number, submitter:Employee, imageUrl:string);
  constructor(id:number, submitter:Employee,imageUrl:string,resolver?:Employee,amount?:Number,description?:string,category?:string,status?:Number,) {
    this.id = id
    this.submitter = submitter
    this.imageUrl = imageUrl
    this.resolver = resolver
    this.amount = amount
    this.description = description
    this.category = category
    this.status = status
  };
}
