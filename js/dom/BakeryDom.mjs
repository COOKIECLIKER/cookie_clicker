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
            this.building(st.cursor.cost, "building-cursor", st.farm)
            this.building(st.grandma.cost, "building-grandma", st.farm)
            this.building(st.farm.cost, "building-farm", st.mine)
            this.building(st.mine.cost, "building-mine", st.factory)
            this.building(st.factory.cost, "building-factory", st.cursor)
        })
    }

    /* Fontion pour activer des tuiles et afficher des suivantes */
    building(costBuilding, idBuilding, buidPro){
        if(this._Bakery.cookies >= costBuilding){
            var building = document.getElementById(idBuilding);

            /* La tuile d’un bâtiment de production se débloque (unlocked) et s’active (enabled) */
            building.classList.remove("locked");
            building.classList.add("unlocked");
            building.classList.remove("disabled");
            building.classList.add("enabled");

            // La tuile du prochain bâtiment de la liste qui n’est pas affichée apparaît
            if (buidPro.display == false){
                buidPro.generateBuilding(document.getElementById('buildings'));
            }

            // Au clic sur une tuile débloquée et activée, l’ombre intérieure devient noire
            building.addEventListener('click', () => {
                building.style["box-shadow"] = "0px 0px 15px 3px #000000 inset";
                setTimeout(() => {
                    building.style["box-shadow"] = "none";
                }, 300)
                this._Bakery.cookies -= costBuilding;
                document.querySelector('#cookiesStock span').innerText = this._Bakery.cookies

                //  La tuile se désactive lorsque le stock de cookies est trop petit
                if(this._Bakery.cookies < costBuilding){
                    building.classList.remove("enabled");
                    building.classList.add("disabled");
                }
            })
        }
    }

}
 