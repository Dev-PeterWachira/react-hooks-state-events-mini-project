import React from "react";

function TaskList({ tasks = [] }) {
  return (
    <div className="tasks">
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task">
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
