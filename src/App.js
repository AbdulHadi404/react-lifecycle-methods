import React from 'react'
import './App.css';
import Counter from './counter'

class App extends React.Component {
  
  state = { mount: true, ignoreProp: 0, seed: 69 }

  mountCounter = () => this.setState({mount:true})
  unmountCounter = () => this.setState({mount:false})
  ignoreProp = () => this.setState({ignoreProp: Math.random()})
  seedGenerator = () => this.setState({seed: Number.parseInt(Math.random()*100)})


  render() { 
    return (
      <div>
        <button disabled={this.state.mount} onClick={this.mountCounter}>Mount</button>
        <button disabled={!this.state.mount} onClick={this.unmountCounter}>Un Mount</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        <button onClick={this.seedGenerator}>Generate Seed</button>
        {this.state.mount && <Counter seed={this.state.seed} ignoreProp={this.state.ignoreProp} />}
      </div>
      );
  }
}
 
export default App;