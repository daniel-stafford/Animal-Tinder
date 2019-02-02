import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import unsplash from './api/unsplash';
import Play from './pages/Play';
import Matches from './pages/Matches';
import Loading from './components/Loading';

class App extends Component {
  state = {
    //this text is just for testing that props work.
    text: 'I am text from state!',
    //ideas for default state
    animals: [],
    matches: [],
    dataLoaded: false,
    loadingText: 'Loading..'
  };

  //call API
  async componentDidMount() {
    const response = await unsplash.get('/search/photos', {
      params: { query: 'funny animals' }
    });
    this.setState({ animals: response.data.results, dataLoaded: true });
    console.log(this.state.animalList);
  }

  render() {
    const { text, animals, matches, dataLoaded, loadingText } = this.state;
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
          d
          //Passing props to routed components is a bit odd. Found this code from  ere: https://tylermcginnis.com/react-router-pass-props-to-components/
          render={props =>
            dataLoaded ? (
              <Play
                {...props}
                text={text}
                animals={animals}
                matches={matches}
              />
            ) : (
              <Loading {...props} loadingText={loadingText} />
            )
          }
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
