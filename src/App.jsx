import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "./StudentForm";
import "./index.css";

const App = () => (
  <div className="container">
    <h3>The student1 application test</h3>
    <StudentForm/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
