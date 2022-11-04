import Gift from "./Gift.js";
import Lollipop from "./sweetCandy/Lollipop.js";
import Pretzel from "./saltedCandy/Pretzel.js";
import Cracker from "./saltedCandy/Cracker.js";
import WaffleCandy from "./sweetCandy/WaffleCandy.js";

const lollipop1 = new Lollipop("lollipop 1", 11, 150, 11);
const pretzel1 = new Pretzel("pretzel 1", 12, 200, 12);
const pretzel2 = new Pretzel("pretzel 2", 9, 250, 9);
const cracker1 = new Cracker("cracker 1", 5, 75, 2);
const waffle1 = new WaffleCandy("waffle 1", 7, 80, 5);

const gift = new Gift([lollipop1, pretzel1, pretzel2, cracker1, waffle1]);
console.log(gift);
console.log(gift.findSpecificCandy(199, 11));
console.log(gift.sortByPrice());
