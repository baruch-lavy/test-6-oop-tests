import { test, describe } from 'node:test'
import assert from 'node:assert'

import { Aiirport } from "../models/Airport.js";
import { RegularPassenger } from "../models/passengers/regular-passenger.js";
import { StudentPassenger } from "../models/passengers/studemt-passenger.js";

const airport = new Aiirport('JKF')
const regularPassenger = new RegularPassenger('baruch',1,'kodkod',true)
const studentPassenger = new StudentPassenger('baruch',10000,'kodkod')

// fill with tickets
airport.fillWithTickets()

// buy tickets
const flights = airport.flights

function buyTicketTest(){
    const regularPassengerTest = new RegularPassenger('baruch',100000,'kodkod',false)
    const idx = airport.buyRegularTicket(regularPassengerTest ,flights[0])
    if (idx !== false) {
        return flights[0].tickets[idx].owner.name
    }
}

function rduceMoneyTest(){
    const regularPassengerTest = new RegularPassenger('baruch',100000,'kodkod',false)
    const idx = airport.buyRegularTicket(regularPassengerTest ,flights[0])
    if (idx !== false) {
        return [
        regularPassengerTest.money,
        regularPassengerTest.money - Number(flights[0].tickets[idx].price), 
        Number(flights[0].tickets[idx].price)
    ]
    }
}

describe('buy-ticket', () => {
    test('return false when the user cannnot afford to buy a ticket', () => {
        assert.strictEqual(airport.buyRegularTicket(regularPassenger,flights[0]),false)
    })

    test('The ticket owner name matches the passenger name', () => {
        assert.strictEqual(buyTicketTest(), studentPassenger.name)
    })

    test("The passenge'r money is reduced by the correct ticket price", () => {
        assert.equal(rduceMoneyTest()[1], (rduceMoneyTest()[0] - rduceMoneyTest()[2]))
    })
})



