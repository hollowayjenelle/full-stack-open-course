import React from 'react';

const Persons = (props) => {
    return (
        <>
            {props.searchName === '' ? props.allPersons : props.filteredPersons}
        </>
    );
};

export default Persons;