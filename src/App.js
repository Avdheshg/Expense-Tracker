
import {useState} from "react";

// import logo from "./logo.svg";
import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Books",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("New Expense: ", expense);

    // Pushing the new item into the array
    setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];      // using spread operator
    });
  }

  return (
 
    <div className="expense-app">
        <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
        <Expenses items={expenses} />
    </div>
  );
}

export default App;



/*
  Algo for passing data from child to parent
    In parent
      1. define a new custom prop on parent, "fun"
      2. attatch the custom prop, "fun" with a hanlder function defined in the parent
    In Child
      1. build an object from the data given by the user(like when an event occurs) 
      2. call the function passed by the parent and which is present in props of child and pass the new object(build above) as an angument
*/