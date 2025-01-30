import React from "react";
// import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]); 
  }
  return (
    <div className="App">
       <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
       <TaskList tasks={tasks} />
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
