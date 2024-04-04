import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "./StudentForm";
import "./index.css";

const App = () => (
  <div className="container">
    <h2>The Student1 Application Form</h2>
    <StudentForm/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
