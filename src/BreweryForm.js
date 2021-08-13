import React, {useState, useEffect} from "react";

function BreweryForm({breweryList, handleBreweryList }) {
    const [state, setState] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setState(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        async function loadBreweries() {
            try {
                const response = await fetch(
                    `https://api.openbrewerydb.org/breweries?by_state=${state}`
                );
                const data = await response.json();
                handleBreweryList(data);
            } catch (error) {
                console.log(error);
            }
        }
        loadBreweries();
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