import React from 'react';

class CalWeekHeader extends React.Component {

  render() {
    let daysOfWeek = this.props.language.days;//takes the value of the words for each of the days from props which is passed from state
    let weekHeader = [];//create an empty array to put each of the days of the week in

    for (let i = 0; i < 7; i++) {//loop through the names of the days to create each of the days in the header
      let dayNum = i;
      if (this.props.weekStart !== "sunday") {//figure out if the first day of the week is sunday or monday and if it's set to monday shift the days of the week to work with it. What's happening is that when the array of names is looped through, it's starting at item 0 (sunday) then goes to item 1 (monday), etc. But by creating a new variable (dayNum) we then look to see if the first day of the week is not sunday (!=="sunday") then it adds 1 to the number being used to pull the item from the array. So when the loop starts on item 0, this adds 1 so that it starts on 1. When the loop reaches 7 this checks to see if the new variable is over 6 (because the array starts at item 0 so 7 would be past the last day of the week) it changes the variable value to 0 for sunday.
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
