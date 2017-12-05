import React, { Component } from "react";
import alphabets from "./alphabets.json";
import classnames from "classnames";

class EasyABC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alphabets: alphabets,
      currentPosition: 0,
      currentTick: 0
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  prev() {
    console.log("prev button clicked");
    if (this.state.currentTick < 2) {
      this.setState({ currentTick: this.state.currentTick - 1 });
    } else {
      this.setState({ currentPosition: this.state.currentPosition - 1 });
    }
  }

  next() {
    console.log("next button clicked");
    if (this.state.currentTick < 2) {
      this.setState({ currentTick: this.state.currentTick + 1 });
    } else {
      this.setState({ currentPosition: this.state.currentPosition + 1 });
    }
  }

  playSound() {
    console.log("playSound button clicked");
  }

  render() {
    //console.log(alphabets);
    let showImage = this.state.currentTick !== 0 ? true : false;
    let showWord = this.state.currentTick === 2 ? true : false;
    console.log(this.state.currentTick, showImage);
    return (
      <div className="game">
        <div className="option">
          <div className="fields">
            <div className="field-block">
              {this.state.alphabets[this.state.currentPosition].letter}
            </div>
          </div>
          <div className="buttons">
            <button className="button previous" onClick={this.prev}>
              Previous
            </button>
            <button className="button sound" onClick={this.playSound}>
              Play Sound Again
            </button>
            <button className="button next" onClick={this.next}>
              Next
            </button>
          </div>
          <div className="fields">
            <div className="field-block">
              <div className="left-field">
                <div
                  className={classnames("placeholder-span", {
                    hide: showImage
                  })}
                >
                  Click Next to view image
                </div>
                <img
                  className={classnames("letter-image", { hide: !showImage })}
                  src={this.state.alphabets[this.state.currentPosition].image}
                  alt={this.state.alphabets[this.state.currentPosition].word}
                />
              </div>
              <div className="right-field">
                <div
                  className={classnames("placeholder-span", { hide: showWord })}
                >
                  Spelling
                </div>
                <div className={classnames("word", { hide: !showImage })}>
                  {this.state.alphabets[this.state.currentPosition].word}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EasyABC;
