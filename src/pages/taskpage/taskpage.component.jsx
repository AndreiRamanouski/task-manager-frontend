import React from "react";
import { useState } from "react";
import Button from "../../components/button/button.component";
import Task from "../../components/task/task.component";
import MOCK_TASKS from "../../mockdata/mock.tasks";

import "./taskpage.style.scss";

const Taskpage = () => {
  const tasks = MOCK_TASKS;
  const [tasksToShow, setTasks] = useState([]);

  const viewYourTasks = () => {
    const idToFind = ["qwedcvbg4ty5sqkrtughfnstyu01"];
    const taske = tasks.filter(
      (task) =>
        (task.users = task.users.filter((user) =>
          idToFind.includes(user.userId)
        ))
    );
    setTasks(taske.filter((task) => task.users.length > 0));
  };

  return (
    <div className="taskpage">
      <div className="buttons">
        <h2>Tasks</h2>

        <Button
          className="button"
          buttonText="View your tasks"
          color="DarkSeaGreen"
          actionOnClick={viewYourTasks}
        />
        <Button
          className="button"
          buttonText="View all tasks"
          color="DarkSeaGreen"
          actionOnClick={() => setTasks(tasks)}
        />
        <Button
          className="button"
          buttonText="Add task"
          color="DarkTurquoise"
        />
      </div>
      <div>
        {tasksToShow.length > 0 ? (
          <h4>The number of tasks is {tasksToShow.length}</h4>
        ) : (
          <h4>There are no tasks</h4>
        )}
        {tasksToShow.length > 0 &&
          tasksToShow.map((task) => <Task key={task.id} {...task} />)}
      </div>
    </div>
  );
};
export default Taskpage;
