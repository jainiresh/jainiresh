import logo from './logo.svg';
import './App.css';
import React from 'react';
import shoutOutInput from './shoutOut/shoutOutInput';
import shoutOutOutput from './shoutOut/shoutOutOutput';
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      currentShoutOut:""
    }
  }
  updateShoutHandler = (event)=>{
    this.setState({currentShoutOut: event.target.value});
  };
  render()
  {
    return(
      <div class="App">
        <header class="App-header">
          <img src = {logo} class="App-logo" alt="logo"></img>
          <h1>Giant Shouter Machine</h1>
          <h3>Go on and shout below..v</h3>
        </header>
        <shoutOutInput />
        <shoutOutOutput shout={(this.state.currentShoutOut).toUpperCase} />
        hello
      </div>
    );
  }
}

export default App;
