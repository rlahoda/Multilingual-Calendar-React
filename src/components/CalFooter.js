import React from 'react';

class CalFooter extends React.Component {
//when the props item "dayType" is passed, this checks to see what kind of day it is. A regular spacer, a spacer for the end, a normal day, a weekend, or today. Then it adds the appropriate class on the div
  render() {

    // console.log(dayTypes);
    return (
      <footer>
        <div className="footer__container">
          <ul>
            <li className="footer__container--list"><a href="https://roblahoda.com" rel="noopener noreferrer" target="_blank"><h2>Built by Rob Lahoda - View my other work</h2></a></li>

          </ul>
        </div>
        <div className="footer__container">
        <ul>
          <li className="footer__container--list"><a href="https://github.com/rlahoda/multilingual-calendar" rel="noopener noreferrer" target="_blank">Check out the source files for the original vesion on Github and add more languages</a></li>
          <li className="footer__container--list"><a href="https://github.com/rlahoda/Multilingual-Calendar-React" rel="noopener noreferrer" target="_blank">View React Version Source Files On Github</a></li>
          <li className="footer__container--list"><a href="https://reactforbeginners.com/" rel="noopener noreferrer" target="_blank">Thanks to Wes Bos for his React For Beginners course that got me started with React</a></li>
        </ul>
        </div>
      </footer>
    )

  }
}

export default CalFooter;
