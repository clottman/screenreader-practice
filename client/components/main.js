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
      <h1 tabIndex='-1' ref={(input) => { this.headerInput = input; }} >Main Section</h1>
      <p>Can you see the quiz yet?</p>
      <button onClick={this.props.showQuiz}>Show quiz</button>
    </div>);  
  }
}