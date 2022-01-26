import React from "react";
import "./detailspage.style.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";

import Button from "../../components/button/button.component";
import AssignedUsers from "../../components/assignedusers/assignedusers.component";

import MOCK_TASKS from "../../mockdata/mock.tasks";

const DetailsPage = () => {
  const tasks = MOCK_TASKS;
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState([]);
  const [users, setUsers] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = () => {
      const data = tasks.filter((task) => task.taskId === params.taskId);
      if (data === null) {
        navigate("/");
      }
      data.map((dat) => setUsers(dat.users));
      setTask(data);
      setLoading(false);
    };
    fetchTask();
  }, tasks);

  return (
    <div className="detailspage">
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {task.map((task) => (
            <div key={task.id}>
              <h3>Title: {task.title}</h3>
              <h3>Due date: {moment(task.targetDate).format("YYYY-MM-DD")}</h3>
              <h3
                className={`${task.isFinished ? "finished" : "not-finished"}`}
              >
                Finished: {task.isFinished ? <>&#10004;</> : <>&#10006;</>}
              </h3>

              <div>
                Assigned Users:
                {users.map((user) => (
                  <AssignedUsers key={user.id} {...user} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <Button
        color="DarkTurquoise"
        actionOnClick={() => {
          navigate(-1);
        }}
        buttonText="Go back"
      />
    </div>
  );
};

export default DetailsPage;
