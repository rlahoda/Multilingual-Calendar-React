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
        //add a key prop here to allow react to uniquely identify each element in this array
    }
    const monthDays = this.props.today.monthDays;
    const dayCurrent = this.props.today.dayCurrent - 1;//the actual day needs to be lowered by 1 so that it matches with the contents of the array since they start from 0 instead of 1
    let days = [];
    for (let i = 0; i < monthDays; i++) {
      let dayType = "day"; //by default the type is just a standard "day" but then we do logic to see if it's supposed to be any special other kind of day so that as the day is rendered later in the process it'll add the appropriate css class to it for the styling
      if (i === dayCurrent) { //if the day of the month (i) is the same as the current day, then it's "today"
        dayType = "today"
      } else if (this.props.weekStart !== 'sunday') {//if the calendar is set to start the week on monday (or technically "not sunday") then do the following
        if ((i + startDay) % 7 === 5 || (i + startDay) % 7 === 6) { //if the day of the month (i) plus the first day of the week that the month starts on (startDay) when divided by 7 leave a remainder of 5 OR 6, it's a weekend day
          dayType = "weekend"
        }
      } else if ((i + startDay) % 7 === 0 || (i + startDay) % 7 === 6) { //if the start of the week is sunday divide the day of the month (i) + the first day of the week that the month starts on (startDay) by 7 and if the remainder is 0 OR 6, it's a weekend day
        dayType = "weekend"
      }
      days.push(//add into the array of days for the calendar the day information. dayType is determined above, num is the actual number of the day (add 1 to i because we count our days on 1 but the array counts from 0), word is the written version of the word (this also gets + 1 because the array of numbers has a zero so it actually lines up with our normal calendar. These same written words are used to render the words under the clock and the dates on the side and since time does include zero seconds, a zero is needed), ordinal is the written ordinal number and like the others, needs the + 1 compensation
        <CalDays key={i}
          dayType={dayType}
          num={i + 1}
          word={this.props.text[i+1]}
          ordinal={this.props.ordinals[i+1]}/>
      );
    }
    let endDay = 42 - (monthDays + startDay);//42 is the maximum number of boxes that could be filled in this calendar because a single month could possibly stretch across 6 weeks. So some of those would be spacers so that the month starts on the correct day. This is basically taking the number of days in the month, add the number of the day of the week that the month starts on and subtracts those from 42 to figure out how many spacers are needed for the end of the month
    if (endDay > 7 ) {//if the month doesn't cover all 6 weeks, there would be an extra week left over, so this just removes those 7 extra spacers so there isn't extra random space at the end of the month
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
