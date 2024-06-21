import React, { useContext, useState } from "react";
import { UserContext } from "../../context/context";
import AdminDashboard from "./AdminDashboard";
import DelegateDashboard from "./DelegateDashboard";

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
        <>
        <DelegateDashboard user={state.user} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
