export class RegularPassenger {
    static id = 0
    constructor(name,money,workPlace='',relationship=false) {
        this.id = ++RegularPassenger.id
        this.name = name
        this.money = money
        this.workPlace = workPlace
        this.relationship = relationship
    }

    canBuy(ticket) {
        if ((this.money - ticket.price) < 0) return false
        return true
    }

    discount() {
        if (this.relationship) return true
        return false
    }
}