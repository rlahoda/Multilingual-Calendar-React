import React from 'react';

class CalDays extends React.Component {
//when the props item "dayType" is passed, this checks to see what kind of day it is. A regular spacer, a spacer for the end, a normal day, a weekend, or today. Then it adds the appropriate class on the div
  render() {
    let dayTypes = 'cal__days__day';
    if (this.props.dayType === "spacer") {
      dayTypes = "cal__days__spacer"
    } else if (this.props.dayType === "spacerEnd") {
      dayTypes = "cal__days__spacer--end"
    } else if (this.props.dayType === "today") {
      dayTypes += " cal__days__day--today"
    } else if (this.props.dayType === "weekend") {
      dayTypes += " cal__days__day--weekend"
    }
    // console.log(dayTypes);
    return (<div className={dayTypes}>
      <h3 className="cal__days__day--num">{this.props.num}</h3>
      <h4 className="cal__days__day--text">{this.props.word}</h4>
      <h5 className="cal__days__day--ordinal">{this.props.ordinal}</h5>
    </div>)

  }
}

export default CalDays;
