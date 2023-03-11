import React, { useState } from 'react';
/* it imports the React library and the useState hook from it. 
useState is a hook that allows us to use state variables in a functional component.*/
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);//declares a state variable called tasks with initial value to an empty array.=//setTasks function is used to update the tasks state variable.
  const [count, setCount] = useState(0);//setCount function is used to update the count state variable.
  const [name, setName] = useState('Amit');//setName function is used to update the name state variable.

  const handleAddTask = (e) => { //whenever the user adds a new task, the handleAddTask function is called
    e.preventDefault();
    const input = e.target.elements.task;
    const task = input.value.trim(); //which adds the task to the tasks array using the setTasks function
    if (task !== '') {
      setTasks([...tasks, task]);
      input.value = '';
    }
  };

  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <form onSubmit={handleAddTask}>
          <input type="text" name="task" placeholder="Enter task" />
          <button type="submit">Add</button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}{/* map is used to loop through the tasks array and create a new array of list items to display on the screen. Each list item is created using the <li> element,*/}
        </ul>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button> 
        <p>Name: {name}</p>
        <button onClick={() => setName(name === 'Amit' ? 'Rajan' : 'Amit')}>{/* function with a new value = Rajan' if the current name state variable is 'Amit', or 'Amit' if the current name state variable is 'Rajan' */}
          Change Name
        </button>
      </header>
    </div>
  );
}
export default App;//the App component as the default export of the module, so it can be used in other parts of the application.