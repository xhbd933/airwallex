import React from "react";
import Dashbord from "../pages/Dashboard";
import "./app.scss";

const PREFIX = "app";

const App:React.FC=React.memo(()=> {
  
  return (
    <div className={`${PREFIX}`}>
      <Dashbord />
    </div>
  );
})

export default App;
