import React from 'react';

class TextDigit extends React.Component {

  render() {
    if (true) {

    }
    return (
    <div className="clockdate__digit__container">
      <h1 className="clockdate__digit--num">{this.props.num < 10 ? "0" + this.props.num : this.props.num}</h1>
      <h3 className="clockdate__digit--word">{this.props.word}</h3>
    </div>
    )

  }
}


export default TextDigit;
