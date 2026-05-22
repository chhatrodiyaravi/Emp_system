import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashoard from "./components/Dashboard/EmployeeDashoard";
import TaskListNumber from "./components/other/TaskListNumber";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  return (
    <>
      {/* <Login /> */}
      {/* <EmployeeDashoard /> */}
      <AdminDashboard />
    </>
  );
};

export default App;
