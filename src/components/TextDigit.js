import React from 'react';

class TextDigit extends React.Component {

  render() {
//this renders out a pair of a numeral and the written word for that number and is used for the current time and all three dates on the side. For cleaner looking numbers, if a number is less than 10 this will add a leading 0 to it so there will always be 2 digits
    return (
    <div className="clockdate__digit__container">
      <h1 className="clockdate__digit--num">{this.props.num < 10 ? "0" + this.props.num : this.props.num}</h1>
      <h3 className="clockdate__digit--word">{this.props.word}</h3>
    </div>
    )

  }
}


export default TextDigit;
