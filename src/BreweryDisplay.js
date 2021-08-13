import React from "react";

function BreweryDisplay({breweryList}) {
    console.log(breweryList)
    return(
        <div>
            <ul>
                {breweryList.map((brewery) => (
                    <li key={brewery.id}>
                        {brewery.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BreweryDisplay;