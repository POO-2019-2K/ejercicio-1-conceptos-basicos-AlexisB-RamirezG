import Transaction from "./transaction.js";

let date = new Date();
let t1 = new Transaction("15679","Juan Perez", "20123345", "314000", date);

t1.printf();

console.log(t1.noTransaction);