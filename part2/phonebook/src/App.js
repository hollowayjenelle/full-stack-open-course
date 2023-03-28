import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [filteredPerson, setFilteredPerson] = useState([])
  const allPersons = persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)
  const filteredPersons = filteredPerson.map(person => <p key={person.id}>{person.name} {person.number}</p>)


  const addPerson = (event) =>{
    event.preventDefault()
    const found = persons.find(person => person.name === newName)
    if (found){
      alert(`${newName} is already added to the phonebook`)
    }else{
      const newId = persons[persons.length - 1].id + 1
      const newPerson = {name : newName, number: newNumber, id: newId}
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
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