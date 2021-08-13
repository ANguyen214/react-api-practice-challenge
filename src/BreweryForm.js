import React, {useState, useEffect} from "react";

function BreweryForm() {
    const [breweryList, setBreweryList] = useState(null);
    const [state, setState] = useState("");

    useEffect(() => {
        setBreweryList([]);
        const abortController = new AbortController();

        async function loadBreweries() {
            try {
                const response = await fetch(
                    `https://www.openbrewerydb.org/breweries?by_state=${breweryList.state}`,
                    {signal: abortController.signal}
                );
                setBreweryList(response);
                console.log(breweryList);
            } catch (error) {
                console.log(error);
            }
        }
        loadBreweries();
        return () => abortController.abort();
    },[state])

    const handleChange = (event) => {
        event.preventDefault();
        setState(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
    if(breweryList)
    {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Search by State</label>
                    <br />
                    <input
                        type="text"
                        value={state}
                        onChange={handleChange}
                        placeholder="Please enter a state"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

    return(
        <p>Loading...</p>
    );
}

export default BreweryForm;