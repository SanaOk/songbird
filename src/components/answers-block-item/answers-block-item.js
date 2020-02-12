import React, {Component} from 'react';
import './answers-block-item.css';

export default class AnswersBlockItem extends Component {
  claas = 'list-item ';

  onItemClick = (id) => {
    if (!this.props.guessed) {
      if (this.props.prizeItemId === id) {
        this.claas += 'green';
        this.props.onClick(id, true);
      } else {
        this.claas += 'red';
        this.props.onClick(id, false);
      }
    } else {
      this.props.onClick(id, true);
    }
  };

  render() {
    if (this.props.newSet) {
      this.claas = 'list-item ';
    }
    const {name, id} = this.props;
    return (<li onClick={() => this.onItemClick(id)} className={this.claas}>{name}</li>);
  }
};