import { Aiirport } from "./models/Airport.js";
import { RegularPassenger } from "./models/passengers/regular-passenger.js";
import { StudentPassenger } from "./models/passengers/studemt-passenger.js";

//create
const airport = new Aiirport('JKF')
const regularPassenger = new RegularPassenger('baruch',10000,'kodkod',true)
const studentPassenger = new StudentPassenger('baruch',10000,'kodkod')

// fill with tickets
airport.fillWithTickets()

// buy tickets
const flights = airport.flights
airport.buyRegularTicket(regularPassenger, flights[0])
airport.buyVipTicket(studentPassenger,flights[1])
