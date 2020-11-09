import { Employee } from './employee'

export class Reimbursement {
  submitter:Employee
  imageUrl:String
  resolver:Employee
  amount:Number
  description:String
  category:String
  status:Number

  constructor(submitter:Employee, imageUrl:String);
  constructor(submitter:Employee,imageUrl:String,resolver?:Employee,amount?:Number,description?:String,category?:String,status?:Number) {
    this.submitter = submitter
    this.imageUrl = imageUrl
    this.resolver = resolver
    this.amount = amount
    this.description = description
    this.category = category
    this.status = status
  };
}
