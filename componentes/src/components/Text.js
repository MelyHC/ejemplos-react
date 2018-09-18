import React from 'react';
import PropTypes from 'prop-types'

const Text = (props) => {
  const arraysNumber = props.arraysOfNumber.map(number => <li>{number}</li>)
  return (
    <div>
      <header>{props.title}</header>
      <p>{props.text}</p>
      <p>{props.number}</p>
      <ul>{arraysNumber}</ul>
      {/* 
 //boolean = {true}
 boolean
 objectWithInfo = {{ key : 'first value', key2 : 'otro valor'}}
 multiply = {number => (number * 5)}
 } */}
    </div>
  )
}

Text.PropTypes = {
  title: PropTypes.string
}

export default Text;
