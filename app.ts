import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingsAccount } from './class/SavingsAccount'

// PeopleAccount
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Marcelo', 10)
peopleAccount.getBalance()
peopleAccount.deposit(1000)
peopleAccount.getBalance()
peopleAccount.withdraw(200)
peopleAccount.getBalance()

// CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(1000)
companyAccount.getLoan(500)
companyAccount.withdraw(300)
companyAccount.getBalance()

// SavingsAccount
const savingsAccount: SavingsAccount = new SavingsAccount('Poupança', 42)
savingsAccount.deposit(100)
savingsAccount.getBalance()
