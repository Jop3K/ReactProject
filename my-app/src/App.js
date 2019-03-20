import React, { Component } from 'react'
import Todos from './components/Todos'
import './App.css'

class App extends Component {


  state = {
  picArray: []
}

componentDidMount() {
  fetch(process.env.PUBLIC_URL + '/test.json')
  .then( (response) => {
    return response.json();
  })
  .then( (result) => {
    this.setState({picArray: result}  );
  });
}

  render () {


    return (

      <div className='App'>
        <Todos todos={this.state.picArray}/>
      </div>

    )
  }
}

export default App
