import DeleteData from "../helpers/deleteData.js";
import getData from "../helpers/getData.js";
import PostData from "../helpers/postData.js";
import PutData from "../helpers/putData.js";
import { usuarios } from "../helpers/url.js";

let btnGuardar = document.getElementById('btnGuardar');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

let formulario = document.getElementById('formulario');

//------------Guardar----------------/
formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value
    let objeto = {
        nombre: name,
        apellido: lastName,
        correo: email
    }

    let resp = await PostData(usuarios,objeto);
    console.log(resp)


})

//------------Buscar----------------/
btnCorreo.addEventListener("click", async () => {

    let email = document.getElementById('email').value

    console.log(email)
    let resp = await getData(usuarios)

    let buscarCorreo = resp.find(user => user.correo === email)

    console.log(resp)

    const { nombre, apellido, correo, id } = buscarCorreo
    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('email').value = correo
    // document.getElementById('id').style.display='block'
    //  document.getElementById('label-edit').style.display='block'
    document.getElementById('id').value = id


})


//-------------Editar---------------/
btnEditar.addEventListener('click', async () => {
    let nameM = document.getElementById('name').value;
    let lastNameM = document.getElementById('lastName').value;
    let emailM = document.getElementById('email').value
    let idM = document.getElementById('id').value
    let object = {
        nombre: nameM,
        apellido: lastNameM,
        correo: emailM,
        id: idM

    }

    console.log(usuarios + idM)
    let resp = await PutData(usuarios+"/"+idM,object)
    console.log(resp)

})


//------------Eliminar----------------/

btnEliminar.addEventListener('click', async () => {
    let idEliminar = document.getElementById('id').value
    let resp = await DeleteData(usuarios+'/'+idEliminar)
    console.log(resp)

})