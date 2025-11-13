export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName(): string {
    return this.name
  }

  getAccountNumber(): number {
    return this.accountNumber
  }

  deposit(amount: number): void {
    if (!this.validateStatus()) {
      return
    }

    if (amount <= 0) {
      console.log('Informe um valor de depósito válido')
      return
    }

    this.balance += amount
    console.log('Depósito realizado: R$', amount)
  }

  withdraw(amount: number): void {
    if (!this.validateStatus()) {
      return
    }

    if (amount <= 0) {
      console.log('Informe um valor de saque válido')
      return
    }

    if (amount > this.balance) {
      console.log('Saldo insuficiente! Tente um valor menor.')
      return
    }

    this.balance -= amount
    console.log('Saque realizado: R$', amount)
  }

  getBalance(): number {
    console.log('Saldo atual: R$', this.balance)
    return this.balance
  }

  protected validateStatus(): boolean {
    if (this.status) {
      return true
    }

    throw new Error('Conta inválida')
  }
}
