import { Button } from "antd";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import FromModal from "../../components/FromModal";
import Header from "../../components/Header";
import "./index.scss";

const PREFIX = "dashboard";

interface IProps{
  title?:React.ReactNode;
}
const Dashbord: React.FC<IProps>= React.memo(()=> {
  const [modalVisiable,setModalVisiable]=useState<boolean>(false);

  // const onCancel=()=>{
  //   setModalVisiable(false)
  // }

  const onInviteButtonClick=()=>{
    setModalVisiable(true);
  }
  const handleOk=()=>{
    setModalVisiable(false)
  }

  return (
    <div className={PREFIX}>
        <Header/>
        <div className={`${PREFIX}-content`}>
          <div className={`${PREFIX}-contentMainTitle`}>A better way</div>
          <div className={`${PREFIX}-contentMainTitle`}>to enjoy every day .</div>
          <div className={`${PREFIX}-contentSecondaryTitle`}>Be the first to know when we launch</div>
          <Button onClick={onInviteButtonClick} className={`${PREFIX}-button`}>Request an invite</Button>
          <div className={`${PREFIX}-text`}>
               all that you see is good,all you do is not young
          </div>
        </div>
        <FromModal
          visible={modalVisiable}
          // onCancel={onCancel}
          handleOk={handleOk}
        />
        <Footer />
    </div>
  );
})

export default Dashbord;
