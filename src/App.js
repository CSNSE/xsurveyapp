import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { EditForm, NavBar, SurveyCardCollection, SurveyCreateForm } from "./ui-components";
import { Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
        <Route path = '/' element={<div class="center"><NavBar/><SurveyCardCollection/></div>}/>
        <Route path = '/create' element={<div class="center"><NavBar/><SurveyCreateForm/></div>} />
        <Route path = '/edit/:surveyId' element={<div class="center"><EditForm/></div>} />
      </Routes>
      </header></div>
    );
}
}

export default withAuthenticator(App);