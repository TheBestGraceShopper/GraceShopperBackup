import React from 'react'

const SearchBar = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchOnChange(e.target.searchVal.value);
  }
  return (
  <form className="search"onSubmit={handleSubmit} >
            <div>
              <input onChange={e => props.searchOnChange(e.target.value)} name="searchVal" type="text" placeholder="Search for.."/>
            </div>

  </form>
  );
}

export default SearchBar;
