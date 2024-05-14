import React, { useContext, useState } from "react";
import { UserContext } from "../../context/context";
import AdminDashboard from "./AdminDashboard";

const Dashboard = () => {
  const [state, setState] = useContext(UserContext);

  const redirect = () => {
    window.location.href = "/";
  };

  return (
    <div>
      {state.user.team ? (
        <>
          <AdminDashboard />
        </>
      ) : (
        redirect()
      )}
    </div>
  );
};

export default Dashboard;
