class Gift {

    constructor(candies) {
        this.candies = candies;
        this.weight = this.calculateWeight();
    }

    sortByPrice() {
        let sortedCandies = this.candies;
        sortedCandies.sort((a, b) => {
            return a.price - b.price;
        });
        return sortedCandies;
    }

    calculateWeight() {
        const totalWeight = this.candies.reduce((accumulator, object) => {
            return accumulator + object.weight;
        }, 0);
        return totalWeight;
    }

    findSpecificCandy(price, weight) {
        return this.candies.find(object => object.price <= price && object.weight <= weight);
    }

}

export default Gift;