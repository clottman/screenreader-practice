import React from 'react';
import styles from './app.css';
import FoodTable from './foodTable.js';
import Quiz from './quiz.js';
import Humans from './humans.js';
import Facts from './facts.js';
import Main from './main.js';

export default class App extends React.Component {
  
  constructor(props) {
   super(props);
    
    this.state = {
      showQuiz: false,
      showing: 'main',
    }
    
    this.setNav = this.setNav.bind(this);
    this.showQuiz = this.showQuiz.bind(this);
  }
  
  showQuiz() {
   this.setState({
     showQuiz: true,
   });
  }
  
  setNav(place) {
   this.setState({
     showing: place,
   });
  }

  
  render() {
    return (
    <div>
    <nav className={styles.screenReaderOnly}>
      <ul>
        <li><a href="#" onClick={() => { this.setNav('main')}}>Home</a></li>
        <li><a href="#" onClick={() => { this.setNav('food')}}>Food Faves</a></li>
        <li><a href="#" onClick={() => { this.setNav('humans')}}>Human Faves</a></li>
        <li><a href="#" onClick={() => { this.setNav('facts')}}>Fun Facts</a></li>
      </ul>
    </nav>
     <h1>Screenreader Practice</h1>
     <p>The main content of this page is invisible to the eyes - spooky, huh!? But, you can learn it's secrets by turning on Voiceover and navigating the page like a visually impaired user might.</p>
     <ul>
       <li><a href="https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts">Voiceover keyboard controls</a></li>   
       <li><a href="http://www.victortsaran.net/quick-guide-to-using-voiceover-on-mac-os-x/">Voiceover Quick Start Guide</a></li>
       <li><a href="https://webaim.org/articles/screenreader_testing/">Testing With Screenreaders FAQ</a></li>
       <li><a href="http://www.karlgroves.com/2013/09/05/the-6-simplest-web-accessibility-tests-anyone-can-do/">The 6 Simplest Web Accessibility Tests Anyone Can Do</a></li>
     </ul>
        
     <h3>Here are some things to try:</h3>
     <ol>
       <li>Use the rotor menu (Voiceover key + U, then arrow keys to navigate) to find all the links you can click.</li>
       <li>When you open the form, you can use the rotor menu again to find the questions.</li>
     </ol>
     <h3>Don't cheat!</h3>
     <p>You'll get the most out of this exercise if you really use Voiceover or another screenreader to figure out what's on the page.</p>
     <p>Click the hidden button to display the quiz.</p>
    {this.state.showQuiz && <Quiz/>}
        
    <div className={styles.screenReaderOnly}>
        
      {this.state.showing === 'main' && <Main showQuiz={this.showQuiz} />}
      {this.state.showing === 'food' && <FoodTable />}
      {this.state.showing === 'facts' && <Facts />}
      {this.state.showing === 'humans' && <Humans /> }
       
    </div>
    </div>)
  }
}
