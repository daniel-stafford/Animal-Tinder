import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import unsplash from './api/unsplash';
import Play from './pages/Play';
import Matches from './pages/Matches';
import Loading from './components/Loading';

class App extends Component {
  state = {
    //ideas for default state
    animals: [],
    dataLoaded: false,
    loadingText: 'Loading..',
    matches: [],
    numResults: 50,
    query: 'puppy',
    title: 'Animal Adoption Tinder'
  };

  //call API
  async componentDidMount() {
    const { query, numResults } = this.state;
    const response = await unsplash.get('/search/photos', {
      params: { query, per_page: numResults }
    });
    this.setState({ animals: response.data.results, dataLoaded: true });
  }

  //todo: componentDidUnmount???

  handleSwipeLeft = (animal) => {
    console.log('App got left on', animal.id);
    this.setState((state) => ({
      animals: state.animals.filter((item) => item.id !== animal.id)
    }))
  };

  handleSwipeRight = (animal) => {
    console.log('App got right on', animal.id);
    const matches = this.state.matches;
    matches.push(animal)
    this.setState((state) => ({ 
      matches, 
      animals: state.animals.filter((item) => item.id !== animal.id)}));
    console.log(this.state.matches);
    
  };

  render() {
    const {
      title,
      text,
      animals,
      matches,
      dataLoaded,
      loadingText
    } = this.state;
    return (
      <div className='App'>
        <h1>{title}</h1>
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
          exact path='/'
          //Passing props to routed components is a bit odd. Found this code from here: https://tylermcginnis.com/react-router-pass-props-to-components/
          render={props =>
            dataLoaded ? (
              <Play
                {...props}
                text={text}
                animals={animals}
                matches={matches}
                handleSwipeLeft={this.handleSwipeLeft}
                handleSwipeRight={this.handleSwipeRight}
              />
            ) : (
              <Loading {...props} loadingText={loadingText} />
            )
          }
        />
        <Route
          exact path='/matches'
          render={props => 
            <Matches 
              {...props} 
              matches={matches} 
              text={text} />}
        />
      </div>
    );
  }
}

export default App;
