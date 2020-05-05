import Bakery from '../classes/Bakery.mjs'
import st from '../main.mjs'
export default class BakeryDom{
    constructor(){
        this._Bakery = new Bakery("M.A.L")
        document.querySelector('#bakery h2').innerText = this._Bakery.name
        document.querySelector('#cookiesStock span').innerText = this._Bakery.cookies
        document.querySelector('#cookiesPerSecond span').innerText = this._Bakery.cookiesPerSecond

        document.getElementById('bigCookie').addEventListener('click',(event)=>{
            document.querySelector('#cookiesStock span').innerText = this._Bakery.bakeCookies(this._Bakery.cookiesPerClick)

            if(this._Bakery.cookies >= st.cursor.cost){
                console.log("ok")
            }

            var span = document.createElement('span')
            span.innerText = `+${this._Bakery.cookiesPerClick}`
            span.classList.add('plusPlus')
            span.style.top = `${event.clientY - 340}px`
            span.style.left = `${event.clientX - 80}px`
            document.getElementById('bigCookie').append(span)
            span.addEventListener('animationend', ()=>{
                span.remove()
            })
        })
    }
}
 