import React from 'react';
import _ from 'underscore';
import styles from './quiz.css';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isTheoCorrect = this.isTheoCorrect.bind(this);
    this.isImageCorrect = this.isImageCorrect.bind(this);
    this.isSwissCorrect = this.isSwissCorrect.bind(this);
    this.getAnswerStatement = this.getAnswerStatement.bind(this);
    
    this.theoInput = React.createRef();
    this.imageInput = React.createRef();
    this.swissInput = React.createRef();
  }

  handleSubmit(event) {
    console.log('Theo: ' + this.theoInput.current.value);
    console.log('Image: ' + this.imageInput.current.value);
    console.log('Swiss: ' + this.imageInput.current.value);
    const answer1 = this.getAnswerStatement('first', this.isTheoCorrect());
    const answer2 = this.getAnswerStatement('second', this.isImageCorrect());
    const answer3 = this.getAnswerStatement('third', this.isSwissCorrect());
    alert(answer1 + '\n' + answer2 + '\n' + answer3);
    event.preventDefault();
  }
    
  getAnswerStatement(questionOrdinalNumber, isCorrect) {
    const correctValue = isCorrect ? 'correct.' : 'incorrect.';
    return 'The ' + questionOrdinalNumber + ' question is ' + correctValue; 
  }
  
  isTheoCorrect() {
   return this.theoInput.current.value.toLowerCase() == 'pancakes'; 
  }
  
  isImageCorrect() {
     return _.contains(['barack obama', 'obama', 'president obama', 'president barack obama'], this.imageInput.current.value.toLowerCase());
  }
  
  isSwissCorrect() {
     return _.contains(['guinea pig', 'guinea pigs'], this.swissInput.current.value.toLowerCase());
  }
  
  render() {
    return <div>
      <form className={styles.quizForm}>
          <div>
            <label className={styles.quizLabel} htmlFor="theosFavoriteFood">1. What is Theo's favorite food?</label>
            <input id="theosFavoriteFood" name="theosFavoriteFood" type="text" ref={this.theoInput} />
          </div>
          <div>
            <label className={styles.quizLabel} htmlFor="imageQuestion">2. What famous person appears in the image on the Human Faves page?</label>
            <input id="imageQuestion" name="imageQuestion" type="text" ref={this.imageInput} />
          </div>
          <div>
            <label className={styles.quizLabel} htmlFor="swissQuestion">3. What is it illegal to only own one of in Switzerland?</label>
            <input id="swissQuestion" name="swissQuestion" type="text" ref={this.swissInput} />
          </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    </div>;
  }
}