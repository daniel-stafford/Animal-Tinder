import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const Matches = ({ matches, text, removeFromMatches }) => (
      <div className="matches-page">
        <h1>Your puppies</h1>
        <p>{text}</p>
        <div className="matches-list">
          {matches.map((animal) => (
            //todo: add remove button
            <div className="one-match">
              <img key={animal.id} alt={animal.description} src={animal.urls.thumb} style={{
                maxWidth: '300px',
                maxHeight: '150px',
                margin: '10px',
              }}/>
              <button className="remove-from-matches" onClick={() => removeFromMatches(animal)}>
                <FaRegTrashAlt className="trash-icon"/>
              </button>
            </div>
          ))};
        </div>
      </div>
);

export default Matches;