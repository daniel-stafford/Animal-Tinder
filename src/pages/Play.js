import React, { Component } from 'react';
//Card swiping comes from the following npm package: https://www.npmjs.com/package/react-swipeable-cards.  Not sure why it is showing an error 'could not find a declaration file...'
import { Card, CardWrapper } from 'react-swipeable-cards';

class Play extends Component {
  onDoubleTap = () => {
    //todo: add description
    console.log('You double tapped. More info perhaps?');
  };
  render() {
    const { animals, handleSwipeLeft, handleSwipeRight } = this.props;
    console.log('animals', animals);
    const deck = animals.map(animal => {
      return (
        //todo: figure out a way to fill the card  with the image but still be swipeable.  Images that fill the card seems to screw up the swiping.
        <Card
          key={animal.id}
          onSwipeLeft={() => handleSwipeLeft(animal)}
          onSwipeRight={() => handleSwipeRight(animal)}
          onDoubleTap={this.onDoubleTap}
          style={{
            border: 'none',
            maxHeight: '900vh'
          }}
        >
          <img
            src={animal.urls.small}
            alt={animal.description}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'block',
              margin: '0 auto'
            }}
            draggable="false"
          />
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