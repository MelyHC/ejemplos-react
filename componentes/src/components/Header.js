import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    // props.text
  }
  render() {
    return (
      <header>
        Nombre: {this.props.text}
        <br />
        Email:
      </header>
    )
  }
}

export default Header;
