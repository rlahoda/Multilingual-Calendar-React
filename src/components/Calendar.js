import React from 'react';

import DateContainer from './DateContainer';
import Cal from './Cal';
import CalFooter from './CalFooter';

class Calendar extends React.Component {
  state = {
    today: {
      "dayCurrent": "30",
      "monthCurrent": "4",
      "yearCurrent": "2018",
      "dayNext": "1",
      "monthNext": "5",
      "yearNext": "2018",
      "dayPrevious": "29",
      "monthPrevious": "4",
      "yearPrevious": "2018",
      "hour": "14",
      "minute": "26",
      "second": "15",
      "monthDays": 30,
      "startDay": 0

    },
    language: {
      "English": {
        "month": "month",
        "currenttime": "current time",
        "today": "today",
        "yesterday": "yesterday",
        "tomorrow": "tomorrow",
        "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "years": ["two thousand sixteen", "two thousand seventeen", "two thousand eighteen", "two thousand nineteen", "two thousand twenty"],
        "numbers": ["zero", "one", "two", "three", "four", "five", "six", "Seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty", "sixty-one", "sixty-two", "sixty-three", "sixty-four", "sixty-five", "sixty-six", "sixty-seven", "sixty-eight", "sixty-nine", "seventy", "seventy-one", "seventy-two", "seventy-three", "seventy-four", "seventy-five", "seventy-six", "seventy-seven", "seventy-eight", "seventy-nine", "eighty", "eighty-one", "eighty-two", "eighty-three", "eighty-four", "eighty-five", "eighty-six", "eighty-seven", "eighty-eight", "eighty-nine", "ninety", "ninety-one", "ninety-two", "ninety-three", "ninety-four", "ninety-five", "ninety-six", "ninety-seven", "ninety-eight", "ninety-nine", "hundred"],
        "ordinals": ["zero", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentyeth", "twenty-first", "twenty-second", "twenty-third", "twenty-fourth", "twenty-fifth", "twenty-sixth", "twenty-seventh", "twenty-eighth", "twenty-ninth", "thirtieth", "thirty-first"]
        }
      },
      currentLanguage: {
        "month": "month",
        "currenttime": "current time",
        "today": "today",
        "yesterday": "yesterday",
        "tomorrow": "tomorrow",
        "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "years": ["two thousand sixteen", "two thousand seventeen", "two thousand eighteen", "two thousand nineteen", "two thousand twenty"],
        "numbers": ["zero", "one", "two", "three", "four", "five", "six", "Seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty", "sixty-one", "sixty-two", "sixty-three", "sixty-four", "sixty-five", "sixty-six", "sixty-seven", "sixty-eight", "sixty-nine", "seventy", "seventy-one", "seventy-two", "seventy-three", "seventy-four", "seventy-five", "seventy-six", "seventy-seven", "seventy-eight", "seventy-nine", "eighty", "eighty-one", "eighty-two", "eighty-three", "eighty-four", "eighty-five", "eighty-six", "eighty-seven", "eighty-eight", "eighty-nine", "ninety", "ninety-one", "ninety-two", "ninety-three", "ninety-four", "ninety-five", "ninety-six", "ninety-seven", "ninety-eight", "ninety-nine", "hundred"],
        "ordinals": ["zero", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentyeth", "twenty-first", "twenty-second", "twenty-third", "twenty-fourth", "twenty-fifth", "twenty-sixth", "twenty-seventh", "twenty-eighth", "twenty-ninth", "thirtieth", "thirty-first"]
      },
      "languageSelectorItems": {
        0: "english"
      },
      "languageSelectorItemsLabels": {
        0: "english"
      },
      "selectedLanguage": "english",
      "dateOrder": "mdy",
      "weekStart": "sunday"
  };

  //Create current date
masterDate() {
  //take a copy of state
  let today = {
    ...this.state.today
  };
  //create the date for today, tomorrow, and yesterday
  const todayDate = new Date();
  let tomorrowDate = new Date();
  tomorrowDate.setDate(todayDate.getDate() + 1);
  let yesterdayDate = new Date();
  yesterdayDate.setDate(todayDate.getDate() - 1);
  //get values for the hours, minutes, seconds, for today and day, month, year for yesterday, today, and tomorrow
  let hourValue = todayDate.getHours();
  let minuteValue = todayDate.getMinutes();
  let secondValue = todayDate.getSeconds();
  let currentDayNumber = todayDate.getDate();
  let lastDayNumber = yesterdayDate.getDate();
  let nextDayNumber = tomorrowDate.getDate();

  let currentMonthNumber = todayDate.getMonth() + 1;//in js months are counted starting at 0 = January, so this + 1 compensates to bring it in alignment with what we write
  let lastMonthNumber = yesterdayDate.getMonth() + 1;
  let nextMonthNumber = tomorrowDate.getMonth() + 1;
  let thisYearNumber = todayDate.getFullYear();
  let lastYearNumber = yesterdayDate.getFullYear();
  let nextYearNumber = tomorrowDate.getFullYear();
  let monthdaysAmt = this.monthDaysCalc(currentMonthNumber - 1);//the - 1 compensates back to starting the count from 0 to align with the monthDaysCalc function
  let startDayDate = new Date(thisYearNumber, currentMonthNumber, 1);
  let startDay = 1;
  if ((startDayDate.getDay() - 2 )< 1) {
    startDay = 7 - startDayDate.getDay();
  } else {
    startDay = startDayDate.getDay() - 2;
  }
  // let startDay = startDayDate.getDay() - 2;
  //add all the values to the copy of state
  today.hour = hourValue;
  today.minute = minuteValue;
  today.second = secondValue;
  today.dayCurrent = currentDayNumber;
  today.monthCurrent = currentMonthNumber;
  today.yearCurrent = thisYearNumber;
  today.dayPrevious = lastDayNumber
  today.monthPrevious = lastMonthNumber;
  today.yearPrevious = lastYearNumber;
  today.dayNext = nextDayNumber;
  today.monthNext = nextMonthNumber;
  today.yearNext = nextYearNumber;
  today.monthDays = monthdaysAmt;
  today.startDay = startDay;
  //set state to the new values
  this.setState({today})
  // console.log(today);
}


//Figure out months in the year
monthDaysCalc = (month, year) => {
  var ar = new Array(12)
  ar[0] = 31 // January
  ar[1] = (year % 4 === 0)
    ? 29
    : 28 // February, if/then test for if it's a leap year or not and changes the number of days in Feb accordingly
  ar[2] = 31 // March
  ar[3] = 30 // April
  ar[4] = 31 // May
  ar[5] = 30 // June
  ar[6] = 31 // July
  ar[7] = 31 // August
  ar[8] = 30 // September
  ar[9] = 31 // October
  ar[10] = 30 // November
  ar[11] = 31 // December

  // return number of days in the specified month (parameter)
  return ar[month]
}

//Retrieve languages from Github
componentDidMount() {
  var that = this;
  var url = 'https://raw.githubusercontent.com/rlahoda/multilingual-calendar/master/languages.json'
  // var url = languages.json
  fetch(url).then(function(response) {
    if (response.status >= 400) {//if the ajax call fails, it'll send an error and add the language selector options for the basic English that's in state by default
      that.addLanguageOptions();
      that.addLanguageOptionsLabels();
      throw new Error("Bad response from server");
    }
    return response.json();
  }).then(function(data) {//if the ajax call is successful, it'll put the data from the json file into state under language then run the funtions to add the language selectors based on the languages available
    that.setState({language: data});
    that.addLanguageOptions();
    that.addLanguageOptionsLabels();
  });
  this.intervalID = setInterval(() => this.masterDate(), //this calls the masterDate function that starts the timer and continues to call is ever 1 second
      1000);
}

componentWillUnmount() {
  clearInterval(this.intervalID);
}

//create language options based on available languages
addLanguageOptions = () => {
  let languageSelectorItems = [];//create an empty array to put all the options in
  for (let i in this.state.language) {//loop through the availale languages in state and for each of them it'll pull in the name of the languages available
    languageSelectorItems.push(i) //add the language name to the empty array we created above
    this.setState({languageSelectorItems})//add the array to state
    // console.log(languageSelectorItems);
  }
}
addLanguageOptionsLabels = () => {//this is pretty much identical to the above function except it first pulls the first letter of the language and capitalizes it before putting it into the empty array
  let languageSelectorItemsLabels = [];
  for (let i in this.state.language) {
    let upperCaseText = i.charAt(0).toUpperCase() + i.substr(1);

    languageSelectorItemsLabels.push(upperCaseText)
    this.setState({languageSelectorItemsLabels})
    // console.log(languageSelectorItems);
  }
}

//Change language
changeLanguage = (language) => {
  //take a copy of state
  let currentLanguage = {
    ...this.state.currentLanguage
  };
  //based on the language passed into the function, find the information in state that matches the name of the language and load it into this new variable
  const updatedLanguage = {
    ...this.state.language[language]
  };
  //take the current language and set the value to the new language
  currentLanguage = updatedLanguage;
  //add the updated information to state
  this.setState({currentLanguage});
}

//Change first day of week
weekStartDay = (day) => {
  //get a copy of state
  let weekStart = {
    ...this.state.weekStart
  };
  //determine what day order it is and swap the value
  weekStart = day;
  //update state
  this.setState({weekStart});
}

//Change date order
dateOrderSwap = (order) => {
  //prevent page from reloading
  // event.preventDefault();
  //get a copy of state
  let dateOrder = {
    ...this.state.dateOrder
  };
  //determine what day order it is and swap the value
  dateOrder = order;
  //update state
  this.setState({dateOrder});
};

render() {
  let currentLanguage = this.state.currentLanguage;

  return (<div className="container">
    <DateContainer
      today={this.state.today}
      language={currentLanguage}
      dateOrder={this.state.dateOrder}
    />
    <Cal
      dateOrderSwap={this.dateOrderSwap}
      language={currentLanguage}
      today={this.state.today}
      languageSelectorItems={this.state.languageSelectorItems}
      languageSelectorItemsLabels={this.state.languageSelectorItemsLabels}
      changeLanguage={this.changeLanguage}
      weekStartDay={this.weekStartDay}
      weekStart={this.state.weekStart}
    />
  <CalFooter/>
  </div>)
  }
}

export default Calendar;
