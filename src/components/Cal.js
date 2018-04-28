import React from 'react';
import CalHeader from './CalHeader';
import CalWeekHeader from './CalWeekHeader';
import CalMonthContainer from './CalMonthContainer';

class Cal extends React.Component {

  render() {
    return (
    <div className="cal__container">
      <CalHeader
        dateOrderSwap={this.props.dateOrderSwap}
        language={this.props.language}
        languageSelectorItems={this.props.languageSelectorItems}
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
