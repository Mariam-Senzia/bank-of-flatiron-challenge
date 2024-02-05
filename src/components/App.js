import React,{useState} from "react";
import Transactions from "./Transactions";
import SearchBar from "./SearchBar";

function App () {
    const [search, setSearch] = useState("")
    return (
        <div>
            <SearchBar search={search} setSearch={setSearch}/>
            <Transactions search={search}/>
        </div>
    );
}

export default App;