import React, { Component } from 'react';
import PersonName from './PersonName'

export default class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: this.props.initialName
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({name: this.state.value})
    this.setState({value: ''})
    //throw values of form into event
  }

  render(){
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Your Name"/>
          <input type="submit" value='Submit'/>
        </form>
        <PersonName name={this.state.name} />
      </div>
    )
  }
}
