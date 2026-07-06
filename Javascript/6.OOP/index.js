// ENCAPSULATION - Data Security 
class BankAccount {

    #balance; // this is private 

    constructor(balance) {

        this.#balance = balance;

    }


    setBalance(balance) {

        this.#balance = balance;

    }


    getBalance() {

        return this.#balance;

    }

}

const bankAccount = new BankAccount(1000);
console.log(bankAccount.balance);// not accesible 
console.log(`current balance = ${bankAccount.getBalance()}`);// 1000 
bankAccount.setBalance(2000);
console.log(`current balance = ${bankAccount.getBalance()}`);// 2000 

 
// INHERITANCE - REUSE THE CODE

 