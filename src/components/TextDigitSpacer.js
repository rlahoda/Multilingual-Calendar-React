import React from 'react';
import PropTypes from "prop-types";

class TextDigit extends React.Component {
  static propTypes = {
    type:  PropTypes.string
  }


  render() {
    // console.log(this.props.type);
    const spacerType = (this.props.type === 'date') ? '/' : ':'; //to make this spacer reusable, we pass the type of the set this is a part of, date or time, and if it's a date it'll add the / between the values, if it's time it'll add the : between the values

    return (
    <div className="clockdate__digit__container">
      <h1 className="clockdate__digit--num">{spacerType}</h1>
      <h3 className="clockdate__digit--word">{spacerType}</h3>
    </div>
    )

  }
}


export default TextDigit;
