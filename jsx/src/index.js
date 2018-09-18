import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const datos = {
 name: null,
 email: null,
 password: null
}

const handlerSubmit = (e) => {
  e.preventDefault();
  e.target.innerHTML = `
  <h1>Bienvenido ${datos.name}</h1>
  ${datos.email}
  `
  // alert('Bienvenido')

}

const handlerChange =(e) =>{
 datos[e.target.name] = e.target.value
}

const handlreClick = () => {
 console.log(datos)
}

const saludo = (
  <div>
    {/* <h1>Hola mundo</h1> */}
    <form onSubmit={handlerSubmit}>
      <input name="name" type="text" placeholder="nombre" onChange={handlerChange} />
      <input name="email" type="email" placeholder="email" onChange={handlerChange} />
      <input name="password" type="password" placeholder="contrasena" onChange={handlerChange} />
      <button onClick={handlreClick}>Ingresar</button>
    </form>
  </div>

);

ReactDOM.render(saludo, document.getElementById('root'));
registerServiceWorker();
