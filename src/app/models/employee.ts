export class Employee {
  username:String
  password:String
  type:String
  firstName:String
  lastName:String

  constructor(username:String, password:String);

  constructor(username:String, password:String, type?:String, firstName?:String, lastName?:String) {
    this.username = username
    this.password = password
    this.type = type
    this.firstName = firstName
    this.lastName = lastName
  };

}
