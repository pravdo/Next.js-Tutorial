import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";
import React from "react";

const TasksPage = () => {
  return (
    <div>
      <h1 className="text-7xl">
        <TaskFormCustom />
        <TaskList />
      </h1>
    </div>
  );
};

export default TasksPage;
