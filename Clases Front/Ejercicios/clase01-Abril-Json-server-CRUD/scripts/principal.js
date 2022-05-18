import getData from "../helpers/getData.js"
import { dc, marvel } from "../helpers/url.js"
import datosTarj from "../modules/cards.js"

let btnMarvel = document.getElementById("btnCategory1")
let btnDC = document.getElementById("btnCategory2")
let listarCard = document.getElementById("listarCard")


btnMarvel.addEventListener('click', async ()=>{
  let data1 = await getData(marvel)
    datosTarj(data1,listarCard)
})

btnDC.addEventListener('click', async ()=>{
  let data2 = await getData(dc)
    datosTarj(data2,listarCard)
})
