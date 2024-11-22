import React from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

const TaskItem = ({ task, onComplete, onEdit, onDelete }) => (
  <div className={`task-item ${task.completed ? "completed" : ""}`}>
    <div>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
    </div>
    <div className="actions">
      <button onClick={() => onComplete(task.id)}>
        <FaCheck />
      </button>
      <button onClick={() => onEdit(task.id)}>
        <FaEdit />
      </button>
      <button onClick={() => onDelete(task.id)}>
        <FaTrash />
      </button>
    </div>
  </div>
);

export default TaskItem;
