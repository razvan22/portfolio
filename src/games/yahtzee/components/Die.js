import React, { Component } from "react";
import "../css/Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two","three", "four", "five","six"],
    val: 1
  }
  constructor (props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle () {
    this.props.handleClick(this.props.idx)
  }

  render() {
    const {numberWords, locked, val, disabled, rolling} = this.props;
    let classes = `Die fas fa-dice-${numberWords[val -1]} fa-5x `;
    if (locked) classes += "Die-locked"
    if (rolling) classes += " Die-rolling"
    return (
      <i
        className={classes}
        onClick={this.handleToggle}
        disabled={disabled}
      >
      </i>
    );
  }
}

export default Die;
