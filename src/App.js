
// App.js
import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { DisplayTutoringEvent, NavBar, CreateTutoringEvent} from "./ui-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App"><header className='App-header'>
        <Router>
          <Routes>
          <Route exact path = '/' element={<div><NavBar/><DisplayTutoringEvent/></div>} />
          <Route exact path='/new' element= {<CreateTutoringEvent/>} />
          </Routes>
        </Router>
      </header>

      </div>
    );
  }
}

export default withAuthenticator(App);


// import {Routes, Route} from 'react-router-dom'

// //import NewNote from './NewNote'

// class App extends Component {

//   render() {
//   return (
//     <div className="App"><header className="App-header">
// <Routes>
// <Route exact path ='/' element={<div><NavBar/><CreateTutoringEvent/></div>} />
// {/* <Route exact path='/' element={<div>< NoteNavbar/><NoteCardCollection/></div>} /> */}
// <Route exact path='/new' element= {<CreateTutoringEvent/>} />

// </Routes>
// </header></div>


//     );
  
// }

// }

// export default withAuthenticator(App);

