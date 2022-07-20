 import Card from '../UI/Card';
 import React,{useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
function Expenses(props) {
  const[filteredYear,setFilteredYear] = useState('2021');
  const filterchangeHandler = selectedyear =>
  { 
    console.log(selectedyear)
    console.log('filtered');
    setFilteredYear(selectedyear);
  }
  const filteredExpenses = props.items.filter(expense =>
  
{
  console.log('check');
  console.log(filteredYear);
console.log(expense.date.getFullYear());

   return expense.date.getFullYear().toString()===filteredYear;
}
  )

 
  return (
  <li>

 
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear}
       onChangeFilter={filterchangeHandler}/>
             <ExpensesChart expenses={filteredExpenses}/>

      <ExpensesList item={filteredExpenses}/>

     {/* { filteredExpenses.length=== 0 ? <h1>result not found</h1>:(filteredExpenses.map(Expense=>
        (
          <ExpensiveItem
          key={Expense.id}
          title={Expense.title}
          amount={Expense.amount}
          date={Expense.date}
        />
        )))} */}
     {/* {
filteredExpenses.length=== 0 &&  <h1>result not found</h1>
     } */}

{/* {
filteredExpenses.length > 0 &&  filteredExpenses.map(Expense=>
  (
    <ExpensiveItem
    key={Expense.id}
    title={Expense.title}
    amount={Expense.amount}
    date={Expense.date}
  />
  ))
     } */}


    
      {/* <ExpensiveItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpensiveItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpensiveItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      /> */}
  
    </Card>
    </li>
  );
}

export default Expenses;