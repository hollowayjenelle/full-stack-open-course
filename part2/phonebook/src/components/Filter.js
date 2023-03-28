import React from 'react';

const Filter = (props) => {
    return (
        <div>
        filter shown with <input value={props.searchName} onChange={props.handleSearch}/>
        <button onClick={props.filterPhoneBook}>filter</button>
      </div>
    );
};

export default Filter;