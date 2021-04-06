import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';

class App extends React.Component {
  state = {
    users: {}
  }
  
  componentDidMount() {
    axios.get('https://api.github.com/users/justinpeczenij')
    .then( res => {
      console.log(res.data)
      this.setState({
        users: res.data
      })
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() { 
    return (
      <div>
        <User userData={this.state.users}/>
      </div>
    );
  }  
}

export default App;
