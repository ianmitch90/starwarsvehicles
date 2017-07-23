import React, { Component } from 'react';

export default class PersonName extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <h1 style={{fontSize: 20}}>Person name is {this.props.name} </h1>
      </div>
    )
  }
}
