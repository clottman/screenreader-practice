import React from 'react';

export default class Humans extends React.Component {
  constructor(props) {
   super(props); 
  }
  
  componentDidMount(){
    this.headerInput.focus();
  }

  render() {
    return (<div>
      <h1 tabIndex='-1' ref={(input) => { this.headerInput = input; }} >My Favorite Humans</h1>
      <img src="https://cdn.glitch.com/86731d87-d724-4704-8576-7394f62a2c2d%2Fobama_playing_basketball.jpg?1541108673374" alt="President Obama playing basketball" />
    </div>);  
  }
}