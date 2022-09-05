import { useState, useEffect } from 'react'
import axios from 'axios'
import Countrylist from './components/Countrylist'
import Filter from './components/Filter'


const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const countriesToShow = filter === ''
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <Filter filter={filter} handleFilterChange={handleFilterChange}/>
            <Countrylist countriesToShow={countriesToShow} filter={filter} setFilter={setFilter} />
        </div>
    )
}

export default App