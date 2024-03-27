import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import React from "react";

const TasksPage = () => {
  return (
    <div>
      <h1 className="text-7xl">
        <TaskForm />
        <TaskList />
      </h1>
    </div>
  );
};

export default TasksPage;
