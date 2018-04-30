import React from 'react';
import CalHeader from './CalHeader';
import CalWeekHeader from './CalWeekHeader';
import CalMonthContainer from './CalMonthContainer';


class Cal extends React.Component {

  render() {//This forms the general structure of the page. It splits the information from the props into where it all needs to go for the clock with the dates on the side and the calendar grid and the header with the selectors for the various options
    return (
    <div className="cal__container">
      <CalHeader
        dateOrderSwap={this.props.dateOrderSwap}
        language={this.props.language}
        languageSelectorItems={this.props.languageSelectorItems}
        languageSelectorItemsLabels={this.props.languageSelectorItemsLabels}
        changeLanguage={this.props.changeLanguage}
        month={this.props.today.monthCurrent}
        weekStartDay={this.props.weekStartDay}
      />
      <CalWeekHeader
        language={this.props.language}
        weekStart={this.props.weekStart}
      />
      <CalMonthContainer
        today={this.props.today}
        text={this.props.language.numbers}
        ordinals={this.props.language.ordinals}
        weekStart={this.props.weekStart}
      />
    </div>
    )
  }
}


export default Cal;
