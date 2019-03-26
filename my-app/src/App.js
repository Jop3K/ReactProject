import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { getAllMedia, getSingleMedia } from './utils/MediaAPI'
import Nav from './components/Nav';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';

class App extends Component {


  state = {
  picArray: []
}

componentDidMount() {

  getAllMedia().then(pics => {
    this.setState({picArray: pics});
  });


  getSingleMedia(1694).then(pic => {
    this.setState({picArray: pic});
  });

}



  render () {


    return (

      <Router>
        <div className="container">
          <Nav/>
          <Route exact path="/" render={(props) => (
            <Home {...props} picArray={this.state.picArray}/>
          )}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/single" component={Single}/>
        </div>
      </Router>
    )
  }
}

export default App
