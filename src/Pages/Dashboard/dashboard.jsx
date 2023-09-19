import React from "react";

const Dashboard = ({ logout }) => {
  return (
    <div>
      <h1>Hello Welcome to the user Dashboard </h1>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
