export class Employee {
  username:string
  password:string
  type:string
  firstName:string
  lastName:string

  constructor(username:string, password:string);

  constructor(username:string, password:string, type?:string, firstName?:string, lastName?:string) {
    this.username = username
    this.password = password
    this.type = type
    this.firstName = firstName
    this.lastName = lastName
  };

}
