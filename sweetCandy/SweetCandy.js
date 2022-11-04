import Candy from "../Candy.js";

class SweetCandy extends Candy {

    constructor(name, weight, price, amountOfSugar) {
        super(name, weight, price);
        this.amountOfSugar = amountOfSugar;
    }

}

export default SweetCandy;