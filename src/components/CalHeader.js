import React from 'react';

class CalHeader extends React.Component {

  langChange = (e) =>{
    let value = e.target.value;
    // console.log(value);
    this.props.changeLanguage(value);
  }
  orderChange = (e) =>{
    let value = e.target.value;
    this.props.dateOrderSwap(value);
  }
  weekChange = (e) =>{
    let value = e.target.value;
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
      <div className="cal__heading cal__heading--larger">
        <div className="cal__heading--box">
          <h3>Options:</h3>
        </div>
        <div id="languageSelectorContainer" className="cal__heading--box">
          <h4>Language:</h4>
          <select name="languageSelector" onChange={this.langChange}>
            {Object.keys(this.props.languageSelectorItems).map(key => (
                <option key={key} value={this.props.languageSelectorItems[key]}>
                  {this.props.languageSelectorItems[key]}
                </option>
            ))}
          </select>
        </div>
        <div className="cal__heading--box">
          <h4>First Day of the Week:</h4>
          <label><input type="radio" name="daySelector" id="sunday" value="sunday" onChange={this.weekChange} defaultChecked/>Sunday</label><br/>
          <label><input type="radio" name="daySelector" id="monday"value="monday" onChange={this.weekChange}/>Monday</label>
        </div>

        <div className="cal__heading--box">
          <h4>Date Order:</h4>
          <label><input type="radio" name="orderSelector" id="mdy" value="mdy" onChange={this.orderChange} defaultChecked/>Month/Day/Year</label><br/>
          <label><input type="radio" name="orderSelector" id="dmy"value="dmy" onChange={this.orderChange}/>Day/Month/Year</label>
        </div>

        <div className="github-mention">
          <p>
            <a href="https://github.com/rlahoda/multilingual-calendar" rel="noopener noreferrer" target="_blank">Check out the source files on Github and add more languages!</a>
          </p>
        </div>
      </div>
    </div>)

  }
}

export default CalHeader;
/*{this.addLanguageOptions()}*/
