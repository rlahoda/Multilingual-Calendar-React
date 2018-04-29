import React from 'react';

import TextDigitSequence from './TextDigitSequence';

class TextDigitContainer extends React.Component {

  render() {//these first two if/then statements are to take into account the ability to switch the order of the dates from (month/day/year) to (day/month/year) by swapping the value of the props that is put into each digit
    const firstDigit = (this.props.type === 'date' && this.props.dateOrder === 'dmy') ? this.props.secondDigit : this.props.firstDigit;
    const secondDigit = (this.props.type === 'date' && this.props.dateOrder === 'dmy') ? this.props.firstDigit : this.props.secondDigit;
    const yearText = (this.props.type === 'date') ? this.props.text.years : this.props.text.numbers;//since this digit container is used for both time and dates, the third digit needs to handle two-digit time and four-digit years. Since the written out versions of the numbers don't go past sixty (to account for 60sec in a minute) we can't just pull number 2018 from that array. A different set of numbers is used that specifically covers the years. So if this is a date (determined by this.props.type) then use the array of year words, otherwise use the normal array of numbers.
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
