import Building from '../classes/Building.mjs'

export default class StoreDom{
    constructor(){
        new Building({name: "cursor", description : "caca", cookiesPerSecond : 3,cost: 5}, 3).generateBuilding(document.getElementById('buildings'))
    }

   
}