import React from 'react';

import TextDigitContainer from './TextDigitContainer';

class DateContainer extends React.Component {
//this just puts together the four sections for the current time and three dates, passing along the necessary information for each of them
  render() {
    return (
    <div className="today__container">
      <TextDigitContainer
         type="time"
         heading={this.props.language.currenttime}
         firstDigit={this.props.today.hour}
         secondDigit={this.props.today.minute}
         thirdDigit={this.props.today.second}
         text={this.props.language}
         />
      <TextDigitContainer
        type="date"
        heading={this.props.language.yesterday}
        firstDigit={this.props.today.monthPrevious}
        secondDigit={this.props.today.dayPrevious}
        thirdDigit={this.props.today.yearPrevious}
        dateOrder={this.props.dateOrder}
        text={this.props.language}
        />
      <TextDigitContainer
        type="date"
        heading={this.props.language.today}
        firstDigit={this.props.today.monthCurrent}
        secondDigit={this.props.today.dayCurrent}
        thirdDigit={this.props.today.yearCurrent}
        dateOrder={this.props.dateOrder}
        text={this.props.language}
        />
      <TextDigitContainer
        type="date"
        heading={this.props.language.tomorrow}
        firstDigit={this.props.today.monthNext}
        secondDigit={this.props.today.dayNext}
        thirdDigit={this.props.today.yearNext}
        dateOrder={this.props.dateOrder}
        text={this.props.language}
        />
    </div>
    )
  }
}


export default DateContainer;
