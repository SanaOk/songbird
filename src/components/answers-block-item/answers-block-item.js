import React, {Component} from 'react';
import './answers-block-item.css';

export default class AnswersBlockItem extends Component {
  claas = 'list-item';

  onItemClick = (e) => {
    const {id, guessed, prizeItemId, onClick} = this.props;
    if (!guessed) {
      if (prizeItemId === id) {
        this.claas += ' green';
        onClick(id, true);
      } else if (!e.target.classList.contains("red")) {
          this.claas += ' red';
          onClick(id, false);
      }
    } else {
      onClick(id, true);
    }
  };

  render() {
    if (this.props.newSet) {
      this.claas = 'list-item';
    }

    return (<li onClick={this.onItemClick} className={this.claas}>{this.props.name}</li>);
  }
};