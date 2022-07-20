import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

import Expenses from './Component/list/Expenses';
import NewExpense from './Component/NewList/NewExpense';
function App() {
  const[expense,setExpense]= useState( [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2019, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2019, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ])
  const newDataHandler = (data) =>
  {
    console.log(data);

setExpense(prevstate=>
  {
    return  [...prevstate,data]
  });


  }
 
  return (
    <>
    <h1 className='heading'>Expense Tracker</h1>
<NewExpense onSave={newDataHandler}/>

<Expenses  items={expense}  />
    </>
   
  );
}

export default App;
