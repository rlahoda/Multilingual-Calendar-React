import React from 'react';
import CalDays from './CalDays';

class CalMonthContainer extends React.Component {

  render() {
    let startDay = this.props.today.startDay;
    // console.log(startDay);
     if (this.props.weekStart !== 'sunday') {
        if (startDay === 0) {
          startDay = startDay + 6;
        } else {
        startDay = startDay - 1;
        }}

    // console.log(startDay);
    let spacers = [];
    for (let i = 0; i < startDay; i++) {
      spacers.push(<CalDays key={i} dayType="spacer"/>);
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    }
    const monthDays = this.props.today.monthDays;
    const dayCurrent = this.props.today.dayCurrent - 1;
    let days = [];
    for (let i = 0; i < monthDays; i++) {
      let dayType = "day";
      if (i === dayCurrent) {
        dayType = "today"
      } else if (this.props.weekStart !== 'sunday') {
        if ((i + startDay) % 7 === 5 || (i + startDay) % 7 === 6) {
          dayType = "weekend"
        }
      } else if ((i + startDay) % 7 === 0 || (i + startDay) % 7 === 6) {
        dayType = "weekend"
      }
      days.push(
        <CalDays key={i}
          dayType={dayType}
          num={i + 1}
          word={this.props.text[i+1]}
          ordinal={this.props.ordinals[i+1]}/>
      );
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    }
    let endDay = 42 - (monthDays + startDay);
    if (endDay > 7 ) {
      endDay = endDay - 7;
    }

    let spacerEnds = [];
    for (let i = 0; i < endDay; i++) {
      spacerEnds.push(<CalDays key={i} dayType="spacerEnd"/>);
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    }
    return (
      <div id="cal__days__grid" className="cal__days__grid">
        {spacers}
        {days}
        {spacerEnds}
      </div>
    )

  }
}


export default CalMonthContainer;
