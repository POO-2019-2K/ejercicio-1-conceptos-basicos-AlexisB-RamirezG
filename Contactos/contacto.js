export default class Contacto {
    constructor (nombre, telefono, puesto, correo) {
        this._nombre = nombre.toUpperCase();
        this._telefono = telefono.toUpperCase();
        this._puesto = puesto.toUpperCase();
        this._correo = correo;
    }

    printf() {
        console.log(`${this._nombre}, ${this._telefono}, ${this._puesto}, ${this._correo}`);
    }

    get nombre() {
        return this._nombre;
    }

    get telefono() {
        return this._telefono;
    }

    get puesto() {
        return this._puesto;
    }

    get correo() {
        return this._correo;
    }

    set puesto(puesto) {
        this._puesto = puesto.toUpperCase();
    }

    set telefono(telefono) {
        this._telefono = telefono;
    }

    set correo(correo) {
        this._correo = correo;
    }
}