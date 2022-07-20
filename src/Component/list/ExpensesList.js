import React from 'react';
import ExpensiveItem from './ExpensiveItem';
import './ExpensesList.css';
const ExpensesList = (props) => {
    if(props.item.length===0)
    {
     return <h1 className="expenses-list__fallback"> No result</h1> ;
    }
  return (
    <ul className="expenses-list">
        { 
    props.item.map(Expense=>
        (
          <ExpensiveItem
          key={Expense.id}
          title={Expense.title}
          amount={Expense.amount}
          date={Expense.date}
        />
        ))
    }
  
        </ul>
  )
}

export default ExpensesList
