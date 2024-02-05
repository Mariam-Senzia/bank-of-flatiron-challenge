import React from "react"

function TransactionsTable ({trans}) {
    return(
      ///// loop through array and return data in table
        <div >
          <h2>All Transactions</h2>
            <table id="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        
        <tbody>
          {trans.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.date}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
}

export default TransactionsTable;