import React from 'react';

class CalHeader extends React.Component {

  //each of these three functions watch the different items below and fun the functions associated with them
  langChange = (event) => {
    let value = event.target.value;
    this.props.changeLanguage(value);
  }
  orderChange = (event) => {
    let value = event.target.value;
    this.props.dateOrderSwap(value);
  }
  weekChange = (event) => {
    let value = event.target.value;
    this.props.weekStartDay(value);
  }

  render() {
    const month = this.props.month - 1;
    return (<div className="cal__heading__container">
      <div className="cal__heading">
        <h2 id="cal__heading--month">{this.props.language.month}</h2>
        <h2>:</h2>
        <h2 id="cal__heading--monthName">{this.props.language.months[month]}</h2>
      </div>
      <div className="cal__heading__internal_container">
        <div className="cal__heading cal__heading--larger">
          <div className="cal__heading--box">
            <h2>Options:</h2>
          </div>
          <div id="languageSelectorContainer" className="cal__heading--box">
            <h4>Language:</h4>
            {
              Object.keys(this.props.languageSelectorItems).map(key => (
                <label
                  key={key}>
                  <div
                    key={key}
                    className="cal__heading--inline">
                    <input
                      key={key}
                      type="radio"
                      name="langSelector"
                      id="sunday"
                      value={this.props.languageSelectorItems[key]}
                      onChange={this.langChange}

                    />
                    {this.props.languageSelectorItemsLabels[key]}
                  </div>
                </label>
              ))
            }
          </div>
          <div className="cal__heading--box">
            <h4>First Day of the Week:</h4>
            <label>
              <input
                type="radio"
                name="daySelector"
                id="sunday"
                value="sunday"
                onChange={this.weekChange}
                defaultChecked="defaultChecked"
              />
              Sunday
            </label><br/>
            <label>
              <input
                type="radio"
                name="daySelector"
                id="monday"
                value="monday"
                onChange={this.weekChange}
               />
               Monday
             </label>
          </div>

          <div className="cal__heading--box">
            <h4>Date Order:</h4>
            <label>
              <input
                type="radio"
                name="orderSelector"
                id="mdy"
                value="mdy"
                onChange={this.orderChange}
                defaultChecked="defaultChecked"
              />
              Month/Day/Year
            </label><br/>
            <label>
              <input
                type="radio"
                name="orderSelector"
                id="dmy"
                value="dmy"
                onChange={this.orderChange}
              />
              Day/Month/Year
            </label>
          </div>
        </div>
        <div className="cal__heading cal__heading--larger">
          <p className="smallText">
            <a href="https://github.com/rlahoda/multilingual-calendar" rel="noopener noreferrer" target="_blank">Check out the source files on Github and add more languages!</a>
            <a href="https://github.com/rlahoda/Multilingual-Calendar-React" rel="noopener noreferrer" target="_blank">View React Version Source Files On Github</a>
          </p>
        </div>
      </div>
    </div>)
  }
}

export default CalHeader;
