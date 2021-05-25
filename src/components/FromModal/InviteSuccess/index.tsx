import { Button } from 'antd';
import React from 'react';
import "./index.scss";

const PREFIX="inviteSuccess"

interface IProps {
  handleOk: () => void;
}

export const InviteSuccess: React.FC<IProps> = ({handleOk}) => {
  return <div className={PREFIX}>
    <div className={`${PREFIX}-text`}>
      <div >You will be one of the first to experience</div>
      <div>Broccoli & Co. when we launch</div>
    </div>
    <Button className={`${PREFIX}-button`} onClick={handleOk}>OK</Button>
  </div>;
};