import React from 'react';
import PropTypes from "prop-types";

class TextDigit extends React.Component {
  static propTypes = {
    type:  PropTypes.string
  }


  render() {
    // console.log(this.props.type);
    const spacerType = (this.props.type === 'date') ? '/' : ':';

    return (
    <div className="clockdate__digit__container">
      <h1 className="clockdate__digit--num">{spacerType}</h1>
      <h3 className="clockdate__digit--word">{spacerType}</h3>
    </div>
    )

  }
}


export default TextDigit;
