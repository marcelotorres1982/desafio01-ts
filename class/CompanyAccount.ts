import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  
  getLoan(amount: number): void {
    if (!this.validateStatus()) {
      return
    }

    if (amount <= 0) {
      console.log('Informe um valor válido para empréstimo')
      return
    }

    this.deposit(amount)
    console.log('Você pegou um empréstimo de R$ ', amount)
  }
}
