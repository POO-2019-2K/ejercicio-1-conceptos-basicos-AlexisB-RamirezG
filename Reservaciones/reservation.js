export default class Reservation {
    constructor(name, roomType, arrDate, depDate, currentDate) {
        this._name = name.toUpperCase();
        this._roomType = roomType.toUpperCase(); 
        this._arrDate = arrDate; 
        this._depDate = depDate; 
        this._currentDate = currentDate;
    }

    printf() {
        console.log(`${this._name}, ${this._roomType}, ${this._arrDate}, ${this._depDate}`);
    }

    getNights() {
        let aDay = 1000*60*60*24;
        this._arrDate = this._arrDate.getTime();
        this._depDate = this._depDate.getTime();
        let difference = ((this._depDate) - (this._arrDate));
        let nights = (difference)/(aDay);
        console.log(`The number of nights the guest is going to stay is ${nights}`);
    }

    getDaysToArrival() {
        let aDay = 1000*60*60*24;
        this._currentDate = currentDate.getTime();
        this._arrDate = this._arrDate.getTime();
        let difference = ((this._depDate) - (this._arrDate));
        let nights = (difference)/(aDay);
        console.log(`The number of nights the guest is going to stay is ${nights}`);
    }
}