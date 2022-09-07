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
    const personToUpdate = persons.find(person => person.name === newName)
    if (personToUpdate) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          

        const newPersonToUpdate = {...personToUpdate, number: newNumber}
          personService
            .put(newPersonToUpdate)
            .then(response => {
                setPersons(persons.map(person => {
                    if (person.name === response.data.name) {
                        return response.data;
                      }
                      return person;
                    })
                  )
                }
                )

      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
      }
      setNewName('')
      setNewNumber('')
  }  

  const deletePerson = (personToDelete) => {
    if (window.confirm(`Delete ${personToDelete.name}?`)) {

      personService
      .deletePerson(personToDelete.id)
      
      setPersons(persons.filter(person => person.id !== personToDelete.id))
    } 
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