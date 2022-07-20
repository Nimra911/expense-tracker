import React,{useState} from 'react'
import './ExpensiveItem.css'
import ExpensiveItemDate from './ExpensiveItemDate';
import Card from '../UI/Card';
const ExpensiveItem = (props) => {
// const [title,setTitle] = useState(props.title);
//  const clickHandler = () =>
//  {
// setTitle('Updated!');
// console.log(title);

//  }


  return (
    <Card className="expense-item">
<ExpensiveItemDate date={props.date}/>
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
    {/* <button onClick={clickHandler}>button</button> */}
  </Card>
  );
}

export default ExpensiveItem
