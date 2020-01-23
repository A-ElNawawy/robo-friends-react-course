import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onTyping }) => {
  return(
    <div id="SearchBox">
      <input
        onChange={onTyping}
        type="search"
        placeholder="Search Robots"
      />
    </div>
  );
}

export default SearchBox;