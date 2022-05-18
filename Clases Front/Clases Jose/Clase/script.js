let edad = prompt('Ingrese su edad ')
let peso = prompt('Ingrese su peso ')
const promesa = new Promise( (resolve, reject ) =>{
if ((Number(peso))>= 100){
    resolve ('La persona tiene sobrepeso')
}
else{
    reject('Tiene un peso normal')
}
})
promesa.then(res =>{
    alert(res)
})
.catch(no=>{
    alert(no)
})