import React, { useState, useEffect } from "react";

const TaskForm = ({ onSaveTask, currentTask, onCancel }) => {
  const [task, setTask] = useState({ name: "", description: "" });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim() || !task.description.trim()) {
      alert("Both fields are required!");
      return;
    }
    onSaveTask(task);
    setTask({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <div>
        <button type="submit">Save</button>
        {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
};

export default TaskForm;
