"use strict";

const EmptyCartException = require("../Cart/EmptyCartException");
const UpdateCartException = require("../Cart/UpdateCartException");
const InvalidNameException = require("../CartItem/InvalidNameException");

module.exports = class Cart {

    //region private attributes
    #items = [];
    //endregion private attributes

    //region public methods
    constructor(items = null) {

        this.#items = items;
    }

    get items() {
        if(this.#items == null){
            throw new EmptyCartException();
        }
        return this.#items;
    }

    get total(){
        var totalPrice = 0;
        for(var i=0;i<this.items.length;i++){
            totalPrice += this.#items[i].total;
        }
        return totalPrice;
    }

    count(distinct = false){
        if(!distinct){
            var countItems = 0;
            this.items.forEach((item) =>{
                countItems += item.quantity;
            });
            return countItems;
        }
        return this.items.length;
    }

    add(items){
        throw new Error();
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}