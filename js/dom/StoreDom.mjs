import Building from '../classes/Building.mjs'



export default class StoreDom{
    constructor(){
        this._Building = new Building({name : "My", cost : 60})
        document.getElementById("buildings").innerHTML =`<div id="building-cursor" class="locked disabled">
        <div class="icon"></div>
        <div class="container">
        <div class="name">Cursor</div>
        <div class="cost">15</div>
        </div>
        <div class="number"></div>
      </div>
       ` 
        
    }

   
}