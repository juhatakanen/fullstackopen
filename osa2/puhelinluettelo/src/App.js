import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import Form from './components/Form'
import Personlist from './components/Personlist'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`
      )
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
      })
    }
  }

  const deletePerson = (id) => {
    personService
      .deletePerson(id)
    
    setPersons(persons.filter(person => person.id !== id))
    
  }

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <Form newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Personlist personsToShow={personsToShow} deletePerson={deletePerson}/>
    </div>
  )

}

export default App