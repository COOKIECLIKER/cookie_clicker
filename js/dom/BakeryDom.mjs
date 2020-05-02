import Bakery from '../classes/Bakery.mjs'

export default class BakeryDom{
    constructor(){
        this._Bakery = new Bakery("M.A.L")
        document.querySelector('#bakery h2').innerText = this._Bakery.name
        document.querySelector('#cookiesStock span').innerText = this._Bakery.cookies
        document.querySelector('#cookiesPerSecond span').innerText = this._Bakery.cookiesPerSecond
    }
}
 