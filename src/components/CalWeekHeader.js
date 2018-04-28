import React from 'react';

class CalWeekHeader extends React.Component {

  render() {
    let daysOfWeek = this.props.language.days;
    let weekHeader = [];

    for (let i = 0; i < 7; i++) {
      let dayNum = i;
      if (this.props.weekStart !== "sunday") {
        dayNum = i + 1;
        if (dayNum > 6) {
          dayNum = 0;
          console.log(dayNum + "extra");
        }
      }
      weekHeader.push(
      <div key={dayNum} className="cal__week__day"><h3 key={dayNum} className="cal__week__day--text">{daysOfWeek[dayNum]}</h3></div>
      )
    }

    return (
    <div className="cal__week">
      {weekHeader}

    </div>
    )

  }
}
export default CalWeekHeader;
