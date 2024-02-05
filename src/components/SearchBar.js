import React from "react";

function SearchBar ({search,setSearch}) {
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div>
            <div id="header">
            <h1>Bank of Flatiron</h1>
            </div>
            <form>
                <input 
                type="text"
                placeholder="Search..." 
                value={search}
                onChange={handleChange}/>
            </form>
        </div>
    );
};

export default SearchBar;