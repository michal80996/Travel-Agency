

export class Flight{
  
    constructor(
        public selected?:boolean,

        public code?:number,
        public nameAir?:string,
        public destination?:Destinations,
        public date?:Date,
        public flightTime?:number,
        public updates?:string,
        public numSeats?:number,
         public kosher?:boolean,
        public sale?:number,
        public isArcived?:boolean,
        public img?:string

        

    ) {
 
    }
}

export enum Destinations{
    NewYork='New York',
    Israel='Israel',
    Paris='Paris',
    Kanada='Kanada',
    Japan='Japan',
    China='China',
    Roma='Roma',
    Panama='Panama',
    Dubayy='Dubayy',
    Russia='Russia',
    
}

export class Client{

constructor(
    public name:string,
    public pass:string,
    public email:string,
    public advertisements?:boolean,
    public creditCard?:Card

) {}    

}

export class Card{
    constructor(
        public id:number,
        public numCard:number,
        public date:number
    ){}
}

export class travelAgency{
    constructor(
        public agencyName:string,
        public menager:string,
        public pass:number,
        public flights:Flight[],
        public OpeningHours:number
    ){}
}