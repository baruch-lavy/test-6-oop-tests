import { RegularPassenger } from "./regular-passenger.js";

export class StudentPassenger extends RegularPassenger {
    constructor(name, money, studyPlace) {
        super(name,money,null)
        this.studyPlace = studyPlace
    }

    discount() {
        return false
    }
    
}