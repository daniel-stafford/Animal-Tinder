import React from 'react';

const Matches = ({ matches, text }) => (
      <div>
        <h2>Your Matches!</h2>
        <p>{text}</p>
        <div className="matches-list">
          {matches.map((animal) => (
            <img key={animal.id} alt={animal.description} src={animal.urls.thumb} style={{
              maxWidth: '200px',
              maxHeight: '100px',
              margin: '10px',
            }}/>
          ))};
        </div>
      </div>
);

export default Matches;
