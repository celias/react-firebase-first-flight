import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      newData: ''
    };
    
    this.dataRef = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.dataRef = database.ref('/WOWOWOWOWOW/LOLOLOLOLOLOL/hehehehehe');

    // Where you read from
    this.dataRef.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }
  
  handleChange(event){
    const newData = event.target.value;
    this.setState({
      newData: newData
    });
  }

  handleSubmit(event){
    event.preventDefault();
      this.dataRef.push(this.state.newData);
    
  }


  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          One day, some data from Firebase will go here.
          { JSON.stringify(this.state.data, null, 2) }
        </pre>
        <form className= "app--form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData} onChange={this.handleChange}/>
          <input type="submit" />
          </form>
          <h1>{this.state.newData}</h1>
      </div>
    );
  }
}

export default App;
