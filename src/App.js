import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { NavBar, SurveyCardCollection, SurveyCreateForm } from "./ui-components";
import { Routes, Route } from 'react-router-dom';
import EditSurvey from './EditSurvey';

class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
        <Route path = '/' element={<div className="center"><NavBar/><SurveyCardCollection/></div>}/>
        <Route path = '/create' element={<div className="center"><NavBar/><SurveyCreateForm/></div>} />
        <Route path = '/edit/:surveyId' element={<div className="center"><EditSurvey/></div>} />
      </Routes>
      </header></div>
    );
}
}

export default withAuthenticator(App);