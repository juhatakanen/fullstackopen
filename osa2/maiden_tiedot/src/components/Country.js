const Country = ({country, setFilter}) => {
    const handleClick = (country) => {
        setFilter(country)
    }
    
    return (
        <p>
            {country.name.common} <button onClick={() => handleClick(country.name.common)}>show</button>
        </p>
    )
}

export default Country