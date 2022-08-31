import Person from './Person'

const Personlist = ({personsToShow}) => {
    return (
        <>        
            {personsToShow.map(person => 
                <Person key={person.name} person={person} />
                )
            }
        </>
    )
}

export default Personlist