import React from "react";

const CreateTask = () => {
  return (
    <div className="w-full  mt-5 p-3">
      <form className=" w-full flex flex-col gap-4 items-center justify-between lg:justify-evenly md:flex-row">
        <div className="w-1/2 lg:w-1/3  flex flex-col gap-5">
          <div className>
            <h3 className="mb-2">Task Title</h3>
            <input
              className="border w-full outline-none rounded p-2"
              type="text"
              placeholder="Make a Ui Desin"
            />
          </div>
          <div>
            <h3 className="mb-2">Date</h3>
            <input
              className="border w-full outline-none rounded p-2"
              type="date"
            />
          </div>
          <div>
            <h3 className="mb-2">Asign to</h3>
            <input
              className="border w-full outline-none rounded p-2"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="mb-2">Category</h3>
            <input
              className="border w-full outline-none rounded p-2"
              type="text"
              placeholder="Design,dev etc"
            />
          </div>
        </div>
        <div className="flex flex-col  text-black">
          <h3 className="mb-2">Description</h3>
          <textarea
            className="border rounded p-2"
            name=""
            id=""
            cols="50"
            rows="10"
            placeholder="Enter description"
          ></textarea>
          <button className="bg-emerald-300 mt-3 py-1 rounded font-semibold">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
