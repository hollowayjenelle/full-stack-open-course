import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsServices from './services/persons'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [filteredPerson, setFilteredPerson] = useState([])
  const allPersons = persons.map(person => <div className='person-entry'><p key={person.id}>{person.name} {person.number} </p><button onClick={() => deleteEntry(person.id, person.name)}>delete</button></div>)
  const filteredPersons = filteredPerson.map(person => <p key={person.id}>{person.name} {person.number}</p>)


  useEffect(() => {
    personsServices.getAll()
    .then(initialData => setPersons(initialData))
  }, [])
  const addPerson = (event) =>{
    event.preventDefault()
    const found = persons.find(person => person.name === newName)
    if (found){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const changedPerson = {...found, number: newNumber}
        personsServices.update(found.id, changedPerson)
        .then(updatedData => {
          setPersons(persons.map(person => person.id !== found.id ? person : changedPerson))
        })
      }
    }else{
      const newPerson = {name : newName, number: newNumber}
      personsServices.create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const deleteEntry = (id, name) => {
    if(window.confirm(`Do you really want to delete ${name}`)){
      personsServices.deletePerson(id)
      .then(() => {
        alert(`${name} has been removed from the phonebook`) 
        setPersons(persons.filter(person => person.id !== id))
      })
      
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearchName(event.target.value)
  }

  const filterPhoneBook = () => {
    const personsCopy = [...persons]
    const filtered = personsCopy.filter((person) => person.name.toLowerCase().includes(searchName.toLowerCase()))
    setFilteredPerson(filtered)
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearch={handleSearch} filterPhoneBook={filterPhoneBook}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons searchName={searchName} allPersons={allPersons} filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App