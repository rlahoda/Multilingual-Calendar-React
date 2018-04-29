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

//now the information to build the individual time set or date set comes together to send down to the individual TextDigit templates. In the TextDigitContainer file we determined if the third digit would be a two-digit time or a four-digit year so then in the thirdWord variable it's checking to see if it's a "date" and if it is, it's passing along the text for the year with thirdDigitText, otherwise it's just using the normal numbers. The reason thirdDigitText has the - 2016 is because that array only has a few years in it, starting with 2016 so 0 in the array is 2016, 1 is 2017, etc. So to get that value, we subtract 2016 from the current year (since that was the year I started the original version of this project) and that leaves us with the number that corresponds to the array value.

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
