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

            var span = document.createElement('span')
            span.innerText = `+${this._Bakery.cookiesPerClick}`
            span.classList.add('plusPlus')
            span.style.top = `${event.clientY - 340}px`
            span.style.left = `${event.clientX - 80}px`
            document.getElementById('bigCookie').append(span)
            span.addEventListener('animationend', ()=>{
                span.remove()
            })
            
            /* Activation des tuiles et affichage des suivantes */
            if(this._Bakery.cookies >= st.cursor.cost){
                var cursorBuilding = document.getElementById("building-cursor");
                cursorBuilding.classList.remove("locked");
                cursorBuilding.classList.add("unlocked");
                cursorBuilding.classList.remove("disabled");
                cursorBuilding.classList.add("enabled");
                cursorBuilding.addEventListener('click', () => {
                    cursorBuilding.style["box-shadow"] = "0px 0px 15px 3px #000000 inset"
                })
                
            } 

            if(this._Bakery.cookies >= st.grandma.cost){
                var grandmaBuilding = document.getElementById("building-grandma");
                grandmaBuilding.classList.remove("locked");
                grandmaBuilding.classList.add("unlocked");
                grandmaBuilding.classList.remove("disabled");
                grandmaBuilding.classList.add("enabled");
                if (st.farm.display == false){
                    st.farm.generateBuilding(document.getElementById('buildings'));
                }
                grandmaBuilding.addEventListener('click', () => {
                    grandmaBuilding.style["box-shadow"] = "0px 0px 15px 3px #000000 inset"
                })
            }

            if(this._Bakery.cookies >= st.farm.cost){
                var farmBuilding = document.getElementById("building-farm");
                farmBuilding.classList.remove("locked");
                farmBuilding.classList.add("unlocked");
                farmBuilding.classList.remove("disabled");
                farmBuilding.classList.add("enabled");
                if (st.mine.display == false){
                    st.mine.generateBuilding(document.getElementById('buildings'));
                }
                farmBuilding.addEventListener('click', () => {
                    farmBuilding.style["box-shadow"] = "0px 0px 15px 3px #000000 inset"
                })
            }

            if(this._Bakery.cookies >= st.mine.cost){
                var mineBuilding = document.getElementById("building-mine");
                mineBuilding.classList.remove("locked");
                mineBuilding.classList.add("unlocked");
                mineBuilding.classList.remove("disabled");
                mineBuilding.classList.add("enabled");
                if (st.factory.display == false){
                    st.factory.generateBuilding(document.getElementById('buildings'));
                }
                mineBuilding.addEventListener('click', () => {
                    mineBuilding.style["box-shadow"] = "0px 0px 15px 3px #000000 inset"
                })
            }

            if(this._Bakery.cookies >= st.factory.cost){
                var factoryBuilding = document.getElementById("building-factory");
                factoryBuilding.classList.remove("locked");
                factoryBuilding.classList.add("unlocked");
                factoryBuilding.classList.remove("disabled");
                factoryBuilding.classList.add("enabled");
                factoryBuilding.addEventListener('click', () => {
                    factoryBuilding.style["box-shadow"] = "0px 0px 15px 3px #000000 inset"
                })
            }
            
        })
    }
}
 