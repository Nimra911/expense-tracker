import React, { useState } from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
  const[isEditing,setIsEditing] = useState(false);
  console.log('editing'+isEditing);
const formDataHandler = (data)=>
{
    const expenseData = {
...data,
id:Math.random().toString()

    };
    console.log(expenseData)
   props.onSave(expenseData);
   setIsEditing(true);  

}

const startEditingHandler = () => {
  console.log('checkhere');
  console.log(isEditing);
  setIsEditing(true);
};

const stopEditingHandler = () => {
  setIsEditing(false);
};


  return (
    <div className='new-expense'>
    {!isEditing && (
      <button onClick={startEditingHandler}>Add New Expense</button>
    )}
    {isEditing && (
      <ExpenseForm
        onSaveExpenseData={formDataHandler}
        onCancel={stopEditingHandler}
      />
    )}
  </div>
  )
}

export default NewExpense
