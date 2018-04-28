import React from 'react';
import TextDigit from './TextDigit';
import TextDigitSpacer from './TextDigitSpacer';

class TextDigitSequence extends React.Component {

  render() {

    const type = this.props.type;
    const firstDigit = this.props.firstDigit;
    const secondDigit = this.props.secondDigit;
    const thirdDigit = this.props.thirdDigit;
    const firstWord = this.props.text[firstDigit];
    const secondWord = this.props.text[secondDigit];
    const thirdWord = (this.props.type === "date") ? this.props.thirdDigitText[thirdDigit - 2016] : this.props.text[thirdDigit];

// console.log(thirdDigit);

    return (
      <div className="clockdate__string__container">
        <TextDigit num={firstDigit} word={firstWord}/>
        <TextDigitSpacer type={type}/>
        <TextDigit num={secondDigit} word={secondWord}/>
        <TextDigitSpacer type={type}/>
        <TextDigit num={thirdDigit} word={thirdWord}/>
      </div>
    )
  }
}
export default TextDigitSequence;
