import Reservation from "./reservation.js"; 

let d1 = new Date("03/25/2019");
let d2 = new Date("03/27/2019");
let currentDate = new Date();
let r1 = new Reservation("Juan Perez", "Doble", d1, d2, currentDate);

r1.printf();

console.log(r1.name);

r1.roomType = "Individual";

console.log(r1.roomType);

r1.getNights();

r1.getDaysToArrival();