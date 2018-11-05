import React from 'react';

export default class Facts extends React.Component {
  constructor(props) {
   super(props); 
  }
  
  componentDidMount(){
    this.headerInput.focus();
  }

  render() {
    return (<div>
      <h1 tabIndex='-1' ref={(input) => { this.headerInput = input; }} >Very Fun Facts</h1>
      <ul>
        <li>Urban legend says duck facts do not echo. This has proven to be false.</li>
        <li>In Switzerland it is illegal to own just one guinea pig!</li>
        <li>In Asia and England, black cats are considered lucky.</li>
      </ul>
        
    </div>);  
  }
}