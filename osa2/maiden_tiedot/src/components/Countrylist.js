import Country from './Country'
import CountryMoreInfo from './CountryMoreInfo'

const Countrylist = ({countriesToShow, filter, setFilter}) => {
    if (countriesToShow.length > 10 && filter.length >= 1) {
        return (
            <>
                <p>Too many matches, specify another filter</p>
            </>
        )
    }
    else if (countriesToShow.length >= 2 && countriesToShow.length <= 10) {
        return (
            <>
            {countriesToShow.map(country => 
                <Country key={country.name.common} country={country} setFilter={setFilter} />)}
            </>
        )
    } else if (countriesToShow.length === 1) {
        return (
            <>
                <div>
                    <CountryMoreInfo country={countriesToShow[0]}/>
                </div>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Countrylist