import React, { Component } from 'react';

export default class Vehicles extends Component {
  constructor(props){
    super(props)
    this.state = {
      vehicles: []
    }
  }
  componentWillMount(){
    console.log("componentWillMount")
  }
  componentDidMount(){
    console.log("componentDidMount")
    fetch("http://swapi.co/api/vehicles/")
    .then( r => r.json() )
    .then( json => {
      this.setState({
        vehicles: json.results
      })
    })
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")

  }

  render(){
    return (

      <div>
        <h2>Vehicles</h2>
        {this.state.vehicles.map( (vehicle) => {
          return <div className="vehicle" key={vehicle.url}>
          <div className='card'>
            <h5 className='cardTitle'>
            Vehicle: {vehicle.name}</h5>
          <div className='cardAttributes'>
            Model: {vehicle.model}</div>
          <div className='cardAttributes'>
            Manufacturer: {vehicle.manufacturer}</div>
          <div className='cardAttributes'>
            Class: {vehicle.vehicle_class}</div>
          <div className='cardAttributes'>
            Passengers: { vehicle.passengers }
          </div>
          <div className='cardAttributes'>
            Crew: {vehicle.crew}
          </div>
          <div className='cardAttributes'>
            Length: {vehicle.length}
          </div>
          <div className='cardAttributes'>
            Max Speed: {vehicle.max_atmosphering_speed}
          </div>
          <div className='cardAttributes'>
            Cargo Capacity: {vehicle.cargo_capacity}
          </div>
        </div>
      </div>
    })}
      </div>
    )
  }
}
