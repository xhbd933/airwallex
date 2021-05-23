import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./app.scss";

const PREFIX = "app";

const App:React.FC=React.memo(()=> {
  const [count,setCount]=useState<number>(0);

  const onDivClick=()=>{
    setCount(0)
  }
  
  return (
    <div className={`${PREFIX}`} onClick={onDivClick}>
      <Header
      title={""}
      />
      <h2 className={`${PREFIX}-h2`}>{count}</h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <Footer />
    </div>
  );
})

export default App;
