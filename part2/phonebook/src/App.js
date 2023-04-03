import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [filteredPerson, setFilteredPerson] = useState([])
  const allPersons = persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)
  const filteredPersons = filteredPerson.map(person => <p key={person.id}>{person.name} {person.number}</p>)


  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
  }, [])
  const addPerson = (event) =>{
    event.preventDefault()
    const found = persons.find(person => person.name === newName)
    if (found){
      alert(`${newName} is already added to the phonebook`)
    }else{
      const newPerson = {name : newName, number: newNumber}
      axios.post('http://localhost:3001/persons', newPerson)
      .then(response => {
        setPersons(persons.concat(response.data))
      })
    }
    setNewName('')
    setNewNumber('')
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