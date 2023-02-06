import React, { Component } from 'react';
import Candidates from './components/CandidatesArea/Candidates/Candidates';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Candidates />
    );
  }
}
