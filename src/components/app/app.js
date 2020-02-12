<<<<<<< HEAD
import React, {Component} from 'react';

import './app.css';
import '../../fonts/Pacifico-Regular.ttf';
import AppHeader from '../app-header';
import RightAnswer from '../../audio/right_answer.mp3';
import WrongAnswer from '../../audio/wrong_answer.mp3';
import QuestionBlock from '../question-block';
import AnswersBlock from '../answers-block';
import DescriptionBlock from '../description-block';
import Button from '../button';
import FinishPage from '../finish-page';
import Birds from '../birds';

export default class App extends Component {
  state = {
    currentSet: 0,
    prizeBird: this.getRandomBird(6),
    currentBird: 7,
    attemptPoints: 5,
    score: 0,
    guessed: false,
    newSet: false,
    audio: ''
  };

  getRandomBird(max) {
    return Math.floor(1 + Math.random() * max);
  };

  onItemClick = (id, isRightAnswer) => {
    if (!this.state.guessed) {
      if (isRightAnswer) {
        this.setState({
          guessed: true,
          score: this.state.score + this.state.attemptPoints
        });
        document.getElementById('right_answer').play();
      } else {
        this.setState({
          attemptPoints: this.state.attemptPoints - 1
        });
        document.getElementById('wrong_answer').play();
      }
    }
    this.setState({
      currentBird: id,
      newSet: false
    });
  };

  onNextClick = () => {
    this.setState({
      currentSet: this.state.currentSet + 1,
      guessed: false,
      prizeBird: this.getRandomBird(6),
      currentBird: 7,
      attemptPoints: 5,
      newSet: true
    });
  };

  onStartClick = () => {
    this.setState({
      currentSet: 0,
      prizeBird: this.getRandomBird(6),
      currentBird: 7,
      attemptPoints: 5,
      score: 0,
      guessed: false,
      newSet: false,
      audio: ''
    });
  };

  render() {
    const {currentSet, prizeBird, currentBird, score, guessed, newSet} = this.state;

    if (currentSet < 6) {
      const prizeItem = Birds[currentSet][prizeBird - 1];
      return (<div className="container">
                <AppHeader guessed={guessed} score={score} currentSet={currentSet} />
                <QuestionBlock guessed={guessed} prizeItem={prizeItem} />
                <div className="row pt-3">
                  <AnswersBlock currentSet={currentSet}
                                onItemClick={this.onItemClick}
                                prizeItemId={prizeItem.id}
                                guessed={guessed}
                                newSet={newSet} />
                  <DescriptionBlock descriptionId={currentBird} currentSet={currentSet} />
                </div>
                <Button onNextClick={this.onNextClick} guessed={guessed} />
                <audio id="right_answer" src={RightAnswer} />
                <audio id="wrong_answer" src={WrongAnswer} />
              </div>);
    } else {
      return (<div className="container">
                <AppHeader guessed={guessed} score={score} currentSet={currentSet} />
                <FinishPage score={score} onStartClick={this.onStartClick} />
            </div>);
    }
  }
}

=======
import React, {Component} from 'react';

import './app.css';
import '../../fonts/Pacifico-Regular.ttf';
import AppHeader from '../app-header';
import RightAnswer from '../../audio/right_answer.mp3';
import WrongAnswer from '../../audio/wrong_answer.mp3';
import QuestionBlock from '../question-block';
import AnswersBlock from '../answers-block';
import DescriptionBlock from '../description-block';
import Button from '../button';
import FinishPage from '../finish-page';
import Birds from '../birds';

export default class App extends Component {
  state = {
    currentSet: 0,
    prizeBird: this.getRandomBird(6),
    currentBird: 7,
    attemptPoints: 5,
    score: 0,
    guessed: false,
    newSet: false,
    audio: ''
  };

  getRandomBird(max) {
    return Math.floor(1 + Math.random() * max);
  };

  onItemClick = (id, isRightAnswer) => {
    if (!this.state.guessed) {
      if (isRightAnswer) {
        this.setState({
          guessed: true,
          score: this.state.score + this.state.attemptPoints
        });
        document.getElementById('right_answer').play();
      } else {
        this.setState({
          attemptPoints: this.state.attemptPoints - 1
        });
        document.getElementById('wrong_answer').play();
      }
    }
    this.setState({
      currentBird: id,
      newSet: false
    });
  };

  onNextClick = () => {
    this.setState({
      currentSet: this.state.currentSet + 1,
      guessed: false,
      prizeBird: this.getRandomBird(6),
      currentBird: 7,
      attemptPoints: 5,
      newSet: true
    });
  };

  onStartClick = () => {
    this.setState({
      currentSet: 0,
      prizeBird: this.getRandomBird(6),
      currentBird: 7,
      attemptPoints: 5,
      score: 0,
      guessed: false,
      newSet: false,
      audio: ''
    });
  };

  render() {
    const {currentSet, prizeBird, currentBird, score, guessed, newSet} = this.state;

    if (currentSet < 6) {
      const prizeItem = Birds[currentSet][prizeBird - 1];
      return (<div className="container">
                <AppHeader guessed={guessed} score={score} currentSet={currentSet} />
                <QuestionBlock guessed={guessed} prizeItem={prizeItem} />
                <div className="row pt-3">
                  <AnswersBlock currentSet={currentSet}
                                onItemClick={this.onItemClick}
                                prizeItemId={prizeItem.id}
                                guessed={guessed}
                                newSet={newSet} />
                  <DescriptionBlock descriptionId={currentBird} currentSet={currentSet} />
                </div>
                <Button onNextClick={this.onNextClick} guessed={guessed} />
                <audio id="right_answer" src={RightAnswer} />
                <audio id="wrong_answer" src={WrongAnswer} />
              </div>);
    } else {
      return (<div className="container">
                <AppHeader guessed={guessed} score={score} currentSet={currentSet} />
                <FinishPage score={score} onStartClick={this.onStartClick} />
            </div>);
    }
  }
}

>>>>>>> Additions
