import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component{
  constructor(){
    super();
    // initial state
    this.state ={
      data: [],
    }
  }

componentDidMount(){
  // fetching data from api
  axios.get('http://localhost:5000/api/players')
  .then(res =>{
    // setting state data with api data
    this.setState({
      data:res.data,
    })
    console.log(this.state.data)
  })
  .catch(err => console.log(err, 'api data not found'))
}


render(){
  return (
    <div className='App'>
      
    </div>
  );
};

}

export default App;
