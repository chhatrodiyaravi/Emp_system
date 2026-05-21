import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex justify-start items-center gap-5 flex-none py-5 w-full  mt-10 "
    >
      <div className="h-full w-75 shrink-0 bg-red-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-sm">Make a youtub video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          illo perferendis repudiandae vel, architecto soluta?
        </p>
      </div>
      <div className="h-full w-75 shrink-0 bg-green-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-sm">Make a youtub video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          illo perferendis repudiandae vel, architecto soluta?
        </p>
      </div>
      <div className="h-full w-75 shrink-0 bg-blue-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-sm">Make a youtub video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          illo perferendis repudiandae vel, architecto soluta?
        </p>
      </div>
      <div className="h-full w-75 shrink-0 bg-yellow-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-sm">Make a youtub video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          illo perferendis repudiandae vel, architecto soluta?
        </p>
      </div>
    </div>
  );
};

export default TaskList;
