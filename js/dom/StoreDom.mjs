import Building from '../classes/Building.mjs'

export default class StoreDom{
    constructor(){
        let ele = document.getElementById('buildings');

        this._cursor = new Building({name: "cursor", description : "Autoclicks once every 10 seconds.", cookiesPerSecond : 0.1, cost: 15}).generateBuilding(ele)
        this._grandma = new Building({name: "Grandma", description : "A nice grandma to bake more cookies.", cookiesPerSecond : 1, cost: 100}).generateBuilding(ele)
        this._farm = new Building({name: "Farm", description : "Grows cookie plants from cookie seeds.", cookiesPerSecond : 8, cost: 1100}, 3)
        this._mine = new Building({name: "Mine", description : "Mines out cookie dough and chocolate chips.", cookiesPerSecond : 47, cost: 12000}, 3)
        this._factory = new Building({name: "Factory", description : "Produces large quantities of cookies.", cookiesPerSecond : 260, cost: 130000}, 3)
    }

    get cursor(){
        return this._cursor
    }
    get grandma(){
        return this._grandma
    }
    get farm(){
        return this._farm
    }
    get mine(){
        return this._mine
    }
    get factory(){
        return this._factory
    }
}