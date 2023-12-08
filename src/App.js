import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { NavBar, SurveyCardCollection, SurveyCreateForm } from "./ui-components";
import { Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
        <Route exact path = '/' element={<div><NavBar/><SurveyCardCollection/></div>} />
        <Route exact path = '/create' element={<div><SurveyCreateForm/></div>} />
      </Routes>
      </header></div>
    );
}
}

export default withAuthenticator(App);