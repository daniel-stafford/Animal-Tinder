import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';

//Card swiping comes from the following npm package: https://www.npmjs.com/package/react-swipeable-cards

class Play extends Component {
  render() {
    const { animals } = this.props;
    console.log('animals', animals);
    const deck = animals.map(animal => {
      return (
        //todo: figure out a way to fill the card  with the image but still be swipeable.  Images that fill the card seems to screw up the swiping.
        <Card key={animal.id}>
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
