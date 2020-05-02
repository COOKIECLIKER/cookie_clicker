//const Bakery = require('../classes/Bakery.mjs');
//const myBakery = new Bakery('M.A.L');
//
//var nameBakery = document.querySelector('#bakery h2')
//console.log(nameBakery)

import * as Bakery from '../js/classes/Bakery.mjs'

const myBakery = new Bakery('M.A.L')

module.exports = myBakery

console.log(myBakery)
