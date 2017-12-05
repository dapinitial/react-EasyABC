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

  componentDidMount() {
    let letterSound = document.querySelector(`audio[data-key="letter"]`);
    if (this.state.currentPosition === 0) {
      letterSound.play();
    }
  }

  componentDidUpdate() {
    this.playSound();
  }

  playSound() {
    console.log("playSound button clicked");
    let letterSound = document.querySelector(`audio[data-key="letter"]`);
    let wordSound = document.querySelector(`audio[data-key="word"]`);

    if (this.state.currentTick === 0) {
      letterSound.currentTime = 0;
      letterSound.play();
    } else {
      wordSound.currentTime = 0;
      wordSound.play();
    }
  }

  prev() {
    if (this.state.currentPosition > 0) {
      this.setState({ currentPosition: this.state.currentPosition - 1 });
    } else {
      this.setState({ currentPosition: this.state.alphabets.length - 1 });
    }
  }

  next() {
    if (this.state.currentPosition === this.state.alphabets.length - 1) {
      if (this.state.currentTick < 2) {
        this.setState({ currentTick: this.state.currentTick + 1 });
      } else {
        this.setState({ currentPosition: 0, currentTick: 0 });
      }
    } else {
      if (this.state.currentTick < 2) {
        this.setState({ currentTick: this.state.currentTick + 1 });
      } else {
        this.setState({
          currentPosition: this.state.currentPosition + 1,
          currentTick: 0
        });
      }
    }
    //this.playSound();
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
            <audio
              src={this.state.alphabets[this.state.currentPosition].letterSound}
              data-key="letter"
            />
          </div>
          currentPosition: {this.state.currentPosition}
          currentTick: {this.state.currentTick}
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
                <audio
                  src={
                    this.state.alphabets[this.state.currentPosition].wordSound
                  }
                  data-key="word"
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
