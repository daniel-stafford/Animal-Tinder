import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Play from './pages/Play';
import Matches from './pages/Matches';

class App extends Component {
  state = {
    //this text is just for testing that props work.
    text: 'I am text from state!',
    //ideas for default state
    AnimalList: [],
    ChosenList: []
  };
  render() {
    const { text, animals, matches } = this.state;
    return (
      <div className='App'>
        <h1>Animal Tinder</h1>
        <ul className='header'>
          <li>
            <Link to='/'>Play</Link>
          </li>
          <li>
            <Link to='/matches'>Your Matches</Link>
          </li>
        </ul>
        <hr />
        <Route
          exact
          path='/'
          //Passing props to routed components is a bit odd. Found this code from  ere: https://tylermcginnis.com/react-router-pass-props-to-components/
          render={props => (
            <Play
              {...props}
              text={text}
              animals={animals}
              matches={matches}
              {...props}
            />
          )}
        />
        <Route
          exact
          path='/matches'
          render={props => <Matches {...props} text={text} {...props} />}
        />
      </div>
    );
  }
}

export default App;
