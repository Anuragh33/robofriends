import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return (
      <div>
        <input class = 'pa3 ba b--green bg-lightest-blue' type='Search' placeholder='search robots' onChange = {searchChange}/>
      </div>
  );
}

export default SearchBox;
