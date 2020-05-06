export default class Building{
    constructor({name, description, cookiesPerSecond,cost}, number = 0){
        this._name = name
        this._description = description
        this._number = number
        this._cookiesPerSecond = cookiesPerSecond
        this._cost = cost
        this._display = false;
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
        this._display = true;
        return this
    }
    get name(){
        return this._name
    }

    get display(){
        return this._display;
    }

    get number(){
        return this._number
    }
    
    get cost(){
        return this._cost
    }
}
