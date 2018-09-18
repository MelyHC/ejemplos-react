import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import Header from './components/Header';
import Form from './components/Form';
import Text from './components/Text'

class App extends React.Component {
    render(){
      return (
        <div>
          <Form />
          {/* <Hello title = 'Hola Mundo'/>
          <Hello2 name = 'lulu' /> */}
          <Text 
            arraysOfNumber = {[2,3,4]}
            text = 'Bienvenidos'
            number = {2}
            //boolean = {true}
            boolean
            objectWithInfo = {{ key : 'first value', key2 : 'otro valor'}}
            multiply = {number => (number * 5)}
            title = {<h1>Hola mundo desde react</h1>}
          />
          {/* <Text2 name = 'Otroo valor por aqui' />
          <Contador contadorInicial = {100}/>
          <ConditionalSection />
          <Contact />
          <Hobbies />
          <ListaCars />
          <Contact2 /> */}
        </div>
      )
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
