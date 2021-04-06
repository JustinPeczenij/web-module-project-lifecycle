import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: []
  }
  
  componentDidMount() {
    axios.get('https://api.github.com/users/justinpeczenij')
    .then( res => {
      console.log(res.data)
    })
    .catch( err => {

    })
  }

  render() { 
    return (
      <div>
        test
      </div>
    );
  }  
}

export default App;
