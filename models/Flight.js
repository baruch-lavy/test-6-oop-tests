import { Ticket } from "./tickets/regular-ticket.js";
import { VipTicket } from "./tickets/vip-ticket.js";

export class Flight {
  constructor(name, airLine, number, maxPass, regPrice, vipPrice) {
    this.name = name;
    this.airLine = airLine;
    this.number = number;
    this.maxPass = maxPass;
    this.regPrice = regPrice;
    this.vipPrice = vipPrice;
    this.tickets = Array.apply(null, Array(+maxPass)).map(function () {})
    this.baggages = []
    this.currentWeight = 0
    this.maxWeight = 1000
  }

  createRegularTicket() {
    const ticket = new Ticket(
        this.regPrice
    )
    return ticket
  }

  createVipTicket() {
    const ticket = new VipTicket(
        this.vipPrice
    )
    return ticket
  }

  addBaggage(passenger, baggage) {
    if (!passenger.ticket) return false
    if ((this.currentWeight + baggage.weight) > this.maxWeight) return false
    this.baggages.push(baggage)
  }
}
