import { Employee } from './employee';
import { Reimbursement } from './reimbursement';

describe('Reimbursement', () => {
  it('should create an instance', () => {
    expect(new Reimbursement(new Employee("user", "pass"), "fakeurl")).toBeTruthy();
  });
});
