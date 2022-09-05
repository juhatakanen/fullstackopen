import Person from './Person'

const Personlist = ({personsToShow, deletePerson}) => {
    return (
        <>        
            {personsToShow.map(person => 
                <Person key={person.name} person={person} deletePerson={deletePerson} />
                )
            }
        </>
    )
}

export default Personlist