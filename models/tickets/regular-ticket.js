
export class Ticket {
    constructor(price,owner = undefined) {
        this.number = (Math.random() * 1000000).toFixed(0)    
        this.price = price
        this.owner = owner
    }
}