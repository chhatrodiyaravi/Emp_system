import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTasl from "../other/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask />
      <AllTasl />
    </div>
  );
};

export default AdminDashboard;
