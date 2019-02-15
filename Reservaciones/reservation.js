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

    get name() {
        return this._name;
    }

    get roomType() {
        return this._roomType;
    }

    set roomType(roomType) {
        this._roomType = roomType.toUpperCase();
    }

    getNights() {
        let aDay = 1000*60*60*24;
        let arrDateTime = this._arrDate.getTime();
        let depDateTime = this._depDate.getTime();
        let difference = ((depDateTime) - (arrDateTime));
        let nights = Math.round((difference)/(aDay));
        console.log(`The number of nights the guest is going to stay is ${nights}`);
    }

    getDaysToArrival() {
        let aDay = 1000*60*60*24;
        let arrDateTime = this._arrDate.getTime();
        let currentDateTime = this._currentDate.getTime();
        let difference = ((arrDateTime) - (currentDateTime));
        let nights = Math.round((difference)/(aDay));
        console.log(`The number of nights for the arrival date is ${nights}`);
    }
}