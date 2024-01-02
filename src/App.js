import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { NavBar, SurveyCardCollection, SurveyCreateForm, SurveyUpdateForm } from "./ui-components";
import { Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
        <Route exact path = '/' element={<div><NavBar/><SurveyCardCollection/></div>} />
        <Route exact path = '/create' element={<div><NavBar/><SurveyCreateForm/></div>} />
        <Route exact path = '/edit/:surveyId' element={<div><NavBar/><SurveyUpdateForm/></div>} />
      </Routes>
      </header></div>
    );
}
}

export default withAuthenticator(App);