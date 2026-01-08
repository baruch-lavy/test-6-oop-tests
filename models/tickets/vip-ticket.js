import { Ticket } from "./regular-ticket.js";

export class VipTicket extends Ticket {
    constructor(price, owner = undefined) {
        super(price, owner)
        this.benefits = ['free-food', 'free-alcohol', 'hot-towels']
    }
}