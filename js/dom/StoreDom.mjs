import Building from '../classes/Building.mjs'



export default class StoreDom{
    constructor(){
        document.getElementById("buildings").innerHTML =`<div id="building-cursor" class="locked disabled">
        <div class="icon"></div>
        <div class="name">Cursor</div>
        <div class="cost">15</div>
        <div class="number"></div>
      </div>
       ` 
        
    }

   
}