import React,{useEffect, useState} from "react";
import TransactionsTable from "./TransactionsTable";
import NewTransactions from "./NewTransactions";

function Transactions ({search}) {
    const [trans, setTrans] = useState([])
    const [formData, setFormData] = useState({
        description:"",
        date:"",
        category:"",
        amount:"",
    })
    // const [filteredTrans, setFilteredTrans] = useState([])

     
    const filtered = trans.filter((product) => {
       if(product.description === search){
        return true
       }
    })

    ////fetch data from API
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then((res) => res.json())
        .then((data) => setTrans(data))
    },
    []);

    ///// handle adding a new transaction
    function handleAddTransaction (newFormData) {
        setTrans([...trans, newFormData]);
        setFormData({
            description:"",
            date:"",
            category:"",
            amount:"",
        });
    }
    return (
        ///// return table in new component
        <div>
            <TransactionsTable trans={search ? filtered : trans}/>
            <NewTransactions 
            addTransaction={handleAddTransaction}
            formData={formData}
            setFormData={setFormData}/>
        </div>
    );
}

export default Transactions;