import { Modal } from "antd";
import React, { useState } from "react";
import "./index.scss";
import InviteForm from "./InviteForm";
import { InviteSuccess } from "./InviteSuccess";

const PREFIX = "formModal";

interface IProps{
  // onCancel:()=>void;
  handleOk:()=>void;
  visible:boolean;
}
const FromModal: React.FC<IProps>= React.memo(({visible,handleOk})=> {

  const [success,setSuccess]=useState<boolean>(false)
  const handleSuccess=()=>{
    handleOk()
    setSuccess(false);
  }

  return (
    <Modal
     visible={visible}
     className={PREFIX}
     centered
    //  onCancel={onCancel}
     destroyOnClose={true}
     forceRender
     footer=""
     closable={false}
     bodyStyle={{
       backgroundColor:"rgb(248, 185, 101)",
       padding:16
     }}
     width={success?354:300}
    >
      <div className={`${PREFIX}-title`}>
        <div className={`${PREFIX}-titleText`}>{success?"All done":"Request an invite"}</div>
        <div className={`${PREFIX}-titleBar`}/>
      </div>
      {
        success?
        <InviteSuccess
        handleOk={handleSuccess}
        />:
        <InviteForm onSuccessCallback={()=>{
          setSuccess(true)
          }}
        />
      }
      
    </Modal>
  );
})

export default FromModal;
