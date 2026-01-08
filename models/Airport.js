import { Flight } from "./Flight.js";
import { generate, random } from "../utils/utils.js";

export class Aiirport {
  constructor(name) {
    this.name = name;
    this.flights = [];
    this.createFlights(3);
  }

  createFlights(num) {
    for (let i = 0; i < num; i++) {
      const flight = new Flight(
        generate(),
        random(2),
        random(6),
        random(3),
        random(4),
        random(3)
      );
      this.flights.push(flight);
    }
  }

  fillWithTickets() {
    this.flights.forEach((flight) => {
      return (flight.tickets = flight.tickets.map((ticket, index, arr) => {
        const type = index < arr.length * 0.9 ? "regular" : "vip";
        return (ticket =
          type === "regular"
            ? flight.createRegularTicket()
            : flight.createVipTicket());
      }));
    });
  }

  buyRegularTicket(passenger, flight) {
    const ticketIdx = flight.tickets.findIndex((ticket) => {
      if (!ticket.owner && !ticket.benefits) return ticket;
    });
    if (ticketIdx < 0) return false;

    const ticket = flight.tickets[ticketIdx]

    if (!passenger.canBuy(ticket)) return false;
    const discount = passenger.discount()
    const price = discount ? ticket.price * 0.8 : ticket.price
    passenger.money -= price
    
    flight.tickets[ticketIdx].owner = passenger;
    console.log(`ticket created successfuly, the passenger in flight number ${flight.number} is  ${flight.tickets[ticketIdx].owner.name}`);
    return ticketIdx
}

buyVipTicket(passenger, flight) {
    const ticketIdx = flight.tickets.findIndex((ticket) => {
        if (!ticket.owner && ticket.benefits) return ticket;
    });
    if (ticketIdx < 0) return false;
    
    const ticket = flight.tickets[ticketIdx]
    if (!passenger.canBuy(ticket)) return false;
    const discount = passenger.discount()
    const price = discount ? ticket.price * 0.85 : ticket.price
    passenger.money -= price
    
    flight.tickets[ticketIdx].owner = passenger;
    console.log(`ticket created successfuly, the passenger in flight number ${flight.number} is  ${flight.tickets[ticketIdx].owner.name}`);
    return ticketIdx
  }
}
