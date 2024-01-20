import React from "react";
import { Route, Routes } from "react-router-dom";
import TaskDashboard from "./Components/pages/Task/TaskDashboard";
import NavbarComponent from "../src/Common/NavbarComponent";
function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/task" element={<TaskDashboard />} />
      </Routes>
    </>
  );
}

export default App;