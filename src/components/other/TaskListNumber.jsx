import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex  mt-10  justify-between gap-5">
      <div className="w-[45%] rounded-xl px-9 py-6 bg-red-200">
        <h2 className="text-3xl font-medium">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] rounded-xl px-9 py-6 bg-blue-200">
        <h2 className="text-3xl font-medium">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] rounded-xl px-9 py-6 bg-green-200">
        <h2 className="text-3xl font-medium">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] rounded-xl px-9 py-6 bg-yellow-200">
        <h2 className="text-3xl font-medium">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
