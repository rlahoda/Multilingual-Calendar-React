import React from 'react';

import TextDigitSequence from './TextDigitSequence';

class TextDigitContainer extends React.Component {

  render() {
    const firstDigit = (this.props.type === 'date' && this.props.dateOrder === 'dmy') ? this.props.secondDigit : this.props.firstDigit;
    const secondDigit = (this.props.type === 'date' && this.props.dateOrder === 'dmy') ? this.props.firstDigit : this.props.secondDigit;
    const yearText = (this.props.type === 'date') ? this.props.text.years : this.props.text.numbers;
  // console.log(this.props.thirdDigit);
    return (
    <div className="clockdate__container">
      <div className="clockdate__title__container">
        <h2 className="text-bold">{this.props.heading}</h2>
      </div>
      <TextDigitSequence
        type={this.props.type}
        firstDigit={firstDigit}
        secondDigit={secondDigit}
        thirdDigit={this.props.thirdDigit}
        text={this.props.text.numbers}
        thirdDigitText={yearText}
        />
    </div>
    )

  }
}


export default TextDigitContainer;

// heading={this.props.language.currenttime}
// firstDigit={this.props.today.hour}
// secondDigit={this.props.today.minute}
// thirdDigit={this.props.today.second}
// text={this.props.language.numbers}
