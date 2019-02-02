import React from 'react';

const Matches = ({ matches, text }) => (
      <div className="matches-page">
        <h1>Your puppies</h1>
        <p>{text}</p>
        <div className="matches-list">
          {matches.map((animal) => (
            //todo: add remove button
            <img key={animal.id} alt={animal.description} src={animal.urls.thumb} style={{
              maxWidth: '300px',
              maxHeight: '150px',
              margin: '10px',
            }}/>
          ))};
        </div>
      </div>
);

export default Matches;