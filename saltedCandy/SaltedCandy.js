import Candy from "../Candy.js";

class SaltedCandy extends Candy {

    constructor(name, weight, price, amountOfSalt) {
        super(name, weight, price);
        this.amountOfSalt = amountOfSalt;
    }

}

export default SaltedCandy;