import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from './components/pages/Courses';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <>
      <Router>
        < Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/courses' component={Courses} />
          <Route path='/signIn' component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
