import React from "react";
import moment from "moment";
import "./task.style.scss";
import { Link } from "react-router-dom";

const Task = ({ taskId, title, targetDate, isFinished }) => {
  return (
    <div className="task">
    
    <div className="description">
      <div className="title">{title}</div>
      <div>
        {moment(targetDate).format("YYYY-MM-DD")} 
      </div>
      <div className={`${isFinished ? "finished" : "not-finished"}`}>
      {isFinished ? <>&#10004;</> : <>&#10006;</>}
      </div>
      <Link to={`/tasks/${taskId}`}>View details</Link>
      </div>
    </div>
  );
};

export default Task;
