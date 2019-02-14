import Reservation from "./reservation.js"; 

let d1 = new Date("02/14/2019");
let d2 = new Date("02/16/2019");
let currentDate = new Date("01/17/2019");
let r1 = new Reservation("Juan Perez", "Doble", d1, d2, currentDate);


r1.printf();

r1.getNights();

r1.getDaysToArrival();