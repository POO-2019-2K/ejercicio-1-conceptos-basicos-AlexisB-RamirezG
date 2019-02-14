export default class Transaction {
    constructor(noTransaction, name, noAccount, quantity, date) {
        this._noTransaction = noTransaction;
        this._name = name.toUpperCase();
        this._noAccount = noAccount;
        this._quantity = quantity;
        this._date = date;
    }

    printf() {
        console.log(`${this._noTransaction}, ${this._name}, ${this._noAccount}, ${this._quantity}, ${this._date}`)
    }

    get noTransaction() {
        return this._noTransaction;
    }

    get name() {
        return this._name;
    }

    get noAccount() {
        return this._noAccount;
    }

    get quantity() {
        return this._quantity;
    }

    get date() {
        return this._date;
    }
}
