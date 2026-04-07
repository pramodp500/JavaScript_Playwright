class hdfc {
    #balance;
    constructor(name, amount) {
        this.name = name;
        this.#balance = amount;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }
    getbalance() {
        return this.#balance;
    }
}
let b = new hdfc("mike", 1000);
console.log(b.getbalance());
b.deposit(500);
console.log(b.getbalance());
b.withdraw(200);
console.log(b.getbalance());
