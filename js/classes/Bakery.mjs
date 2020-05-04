export default class Bakery{
    constructor(name = 'M.A.L', cookies = 0, buildings = [], cookiesPerClick = 1, cookiesPerSecond = 0){
        this._name = name
        this._cookies = cookies
        this._buildings = buildings
        this._cookiesPerClick = cookiesPerClick
        this._cookiesPerSecond = cookiesPerSecond
    }
    bakeCookies(howMany){
        return this.cookies += howMany
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }

    get cookies(){
        return this._cookies
    }
    set cookies(newCookies){
        this._cookies = newCookies
    }

    get buildings(){
        return this._buildings
    }
    set buildings(newBuildings){
        this._buildings = newBuildings
    }

    get cookiesPerClick(){
        return this._cookiesPerClick
    }
    set cookiesPerClick(newCookiesPerClick){
        this._cookiesPerClick = newCookiesPerClick
    }

    get cookiesPerSecond(){
        return this._cookiesPerSecond
    }
    set cookiesPerSecond(newCookiesPerSecond){
        this._cookiesPerSecond = newCookiesPerSecond
    }
}