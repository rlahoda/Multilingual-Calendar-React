# Multilingual Clock/Calendar Built With React

*This is an updated version of my previous project which is essentially the same calendar built with plain Javascript. It can be found at [https://github.com/rlahoda/multilingual-calendar](https://github.com/rlahoda/multilingual-calendar)*

** If you are interested in adding languages to this project, see the link above for directions on how to submit a pull request for additional languages. **

To try to help make this make more sense to someone who isn't familiar with React, I included a lot of notes throughout the files to explain what I was doing and why.

- The "public" folder is where the basic index.html file lives that the React code is inserted into
- The "src" folder is where all of my working files are stored
  - The "components" folder is where the individual React components are stored. These are the reusable items that are built upon to build up the whole structure. They're similar to template files in other systems if you're used to those
  - The "scss" file is where my styles are written in SASS. The original version of this project was designed to go on Codepen so all of the styles are in a single file. I made some tweaks to the styling but didn't bother to reorganize them into individual files since my focus was on the React code
  - The "css" folder is where the compiled SASS is dumped
  - The "index.js" file is the base React file that is then used to build the app inside
- The "package.json" file is where all the information used to set up the build system, webpack, SASS compiling, etc, is contained. The file I'm using is a derivative of Wes Bos' file that he created for his [React for Beginners series](https://reactforbeginners.com/) (which I highly recommend)

## To see a working version of this project go to [http://reactcalendar.roblahoda.com/](http://reactcalendar.roblahoda.com/)

[![React Calendar Clock](http://reactcalendar.roblahoda.com/reactclockcalendar.png)](http://reactcalendar.roblahoda.com/)
