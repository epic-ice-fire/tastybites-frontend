import React from "react";
import ReactDOM from "react-dom/client";
import CustomerList from "./components/CustomerList";

const App = () => (
  <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
    <h1 style={{ color: "orange" }}>TastyBites Customer Records</h1>
    <CustomerList />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);