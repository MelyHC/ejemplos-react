import React from 'react';
import Header from './Header'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    // e.preventDefault();
    this.setState({
      name: e.target.children[0].value,
      email: e.target.children[1].value,
      password: e.target.children[2].value
    })

    e.preventDefault();


  }

  render() {
    console.log(this.state)
    if (!this.state.password) {
      return (
        <form action="#" onSubmit={this.handleSubmit} >
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <input type="submit" value='click' />
        </form>
      )
    } else {
      return (
        <Header text={this.state.name} />
      )
    }
  }
}

export default Form;
