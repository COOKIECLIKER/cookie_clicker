export default class Building{
    constructor({name, description, cookiesPerSecond,cost}, number = 0){
        this._name = name
        this._description = description
        this._number = number
        this._cookiesPerSecond = cookiesPerSecond
        this._cost = cost
    }
    generateBuilding(elm){
        elm.innerHTML += `
        <div id="building-${this.name.toLowerCase()}" class="locked disabled">
            <div class="icon"></div>
            <div class="container">
                <div class="name">${this.name.charAt(0).toUpperCase()}${this.name.substring(1).toLowerCase()}</div>
                <div class="cost">${this.cost}</div>
            </div>
            <div class="number">${this.number}</div>
        </div>
        `
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
