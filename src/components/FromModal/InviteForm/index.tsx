import { Button, Form, FormInstance, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { IFromData } from "../interface";
import "./index.scss";

const PREFIX = "inviteForm";

interface IProps{
    onSuccessCallback:()=>void;
}
const InviteForm: React.FC<IProps>= React.memo(({onSuccessCallback})=> {
  const [form] = Form.useForm<IFromData>();
  const [showError,setShowError]=useState<boolean>(false);
  const [disabled,setDisabled]=useState<boolean>(false)

  const onMoadlFormFinish=(value:IFromData)=>{
    setDisabled(true)
     axios.post("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
     {
       name:value.name,
       email:value.email
     }).then(()=>{
      setShowError(false);
      onSuccessCallback()
     }).catch(()=>{
        setShowError(true);
     }).finally(()=>{
        setDisabled(false);
     })
  }

  const confirmEmailValidate = (form: FormInstance) =>{
    return  ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator(_: any, value: string) {
        if (form.getFieldValue('email') !== value) {
          
          return Promise.reject(new Error('the email address should be the same twice'));
        }
        return Promise.resolve();
      }
    });
  
  }
  return (
    
      <Form
        form={form}
        validateTrigger='onSubmit'
        onFinish={onMoadlFormFinish}
      >
         <Form.Item
           name='name'
           rules={[{ required: true, min: 3, message: 'Please input your username!' }]}
         >
           <Input placeholder="Full name" />
         </Form.Item>
   
         <Form.Item
           name="email"
           rules={[{ required: true,type:"email", min:3,message: 'Please input your password!' }]}
         >
           <Input placeholder="Email" />
         </Form.Item>
         <Form.Item
           name="confrimEmail"
           rules={[confirmEmailValidate]}
         >
           <Input placeholder="Confirm email" />
         </Form.Item>
         <Form.Item>
           <Button 
              disabled={disabled}
              type='primary'
              htmlType="submit" 
              className={`${PREFIX}-button`}
           >
             {
                disabled ? "Sending, please wait..." : "Send"
             }
           </Button>
         </Form.Item>
         {
             showError&&<div className={`${PREFIX}-errorMassage`}>Error message from server here</div>
         }
         
      </Form>
  );
})

export default InviteForm;
