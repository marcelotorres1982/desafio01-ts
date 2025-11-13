import { DioAccount } from "./DioAccount"

export class SavingsAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log('Informe um valor válido para depósito')
      return
    }

    const valueWithBonus = amount + 10
    super.deposit(valueWithBonus)
    console.log('Bônus de R$ 10 aplicado ao depósito.')
  }
}
