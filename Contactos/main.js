import Contacto from "./contacto.js";

let c1 = new Contacto("Juan Perez","312-456-2345","Operador","juan.perez@gmail.com");

c1.printf();

console.log(c1.nombre);
console.log(c1.correo);

c1.puesto = "Jefe de departamento";

console.log(c1.puesto); 

c1.telefono = "313-345-6789";

console.log(c1.telefono); 

c1.correo = "jperez@gmail.com";

console.log(c1.correo);