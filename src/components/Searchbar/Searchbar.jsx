import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
  event.preventDefault();
  onSubmit(searchQuery );
};

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };


  return (
    <header className="Searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;