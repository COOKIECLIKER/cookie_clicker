export default class Building{
    constructor({name, description, cookiesPerSecond,cost}, number = 0){
        this._name = name
        this._description = description
        this._number = number
        this._cookiesPerSecond = cookiesPerSecond
        this._cost = cost
    }
    get name(){
        return this._name
    }
    set name(name){
        this._name = name
    }

    get description(){
        return this._description
    }
    set description(description){
        this._description = description
    }

    get number(){
        return this._number
    }
    set number(number){
        this._number = number
    }

    get cookiesPerSecond(){
        return this._cookiesPerSecond
    }
    set cookiesPerSecond(cookiesPerSecond){
        this._cookiesPerSecond = cookiesPerSecond
    }

    get cost(){
        return this._cost
    }
    set cost(cost){
        this._cost = cost
    }
}
