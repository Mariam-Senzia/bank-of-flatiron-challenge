import React,{useState} from "react";

function NewTransactions ({addTransaction ,setFormData}) {
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");

    /////handle form submission
    function handleSubmit (e) {
        e.preventDefault();

        const newFormData = {
            description,
            date,
            category,
            amount
        }
        // clear form fields after submission
        setDescription("");
        setDate("");
        setCategory("");
        setAmount("");
        ////call function
        addTransaction(newFormData);
        setFormData(newFormData)
    }

    return (
        /////return new form
        <form id="form1" onSubmit={handleSubmit}>
            <h2>Add New Transaction</h2>
            
            <input 
            type="text" 
            value={description}
            placeholder="description"
            ////set value to the input description on change
            onChange={(e) => setDescription(e.target.value)}/>

            <input 
            type="text"
            value={date} 
            placeholder="date"
            ////set value to the input description on change
            onChange={(e) => setDate(e.target.value)}/>

            <input 
            type="text" 
            value={category} 
            placeholder="category"
            ////set value to the input description on change
            onChange={(e) => setCategory(e.target.value)}/>

            <input 
            type="text" 
            value={amount} 
            placeholder="amount"
            ////set value to the input description on change
            onChange={(e) => setAmount(e.target.value)}/>

            <input type="submit" />
            
        </form>
    );
}

export default NewTransactions;