import React, { Component } from 'react';
//Card swiping comes from the following npm package: https://www.npmjs.com/package/react-swipeable-cards.  Not sure why it is showing an error 'could not find a declaration file...'
import { Card, CardWrapper } from 'react-swipeable-cards';

class Play extends Component {
  onSwipeRight = () => {
    console.log("You swiped right. I guess that's a pass.");
  };
  onSwipeLeft = () => {
    console.log('You swiped left. A possible pet!');
  };
  render() {
    const { animals } = this.props;
    console.log('animals', animals);
    const deck = animals.map(animal => {
      return (
        //todo: figure out a way to fill the card  with the image but still be swipeable.  Images that fill the card seems to screw up the swiping.
        <Card
          key={animal.id}
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
        >
          <img src={animal.urls.thumb} alt={animal.description} />
        </Card>
      );
    });
    return (
      <div>
        <CardWrapper>{deck}</CardWrapper>
      </div>
    );
  }
}

export default Play;
