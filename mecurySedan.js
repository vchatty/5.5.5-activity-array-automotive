const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage) 
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberofWheels= 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false; 
    }

    loadPassenger(num){
        if(this.passenger < this.maximumPassengers){
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger += num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }

    start(){
        super.start(); 
    }
    
    scheduleService(mileage){
        if(mileage > 30000){
            this.scheduleService === true;
        }   

    }


}
  






//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

