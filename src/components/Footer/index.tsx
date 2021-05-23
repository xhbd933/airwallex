import { HeartFilled } from '@ant-design/icons';
import React from "react";
import "./index.scss";

const PREFIX = "footer";

const Footer:React.FC=React.memo(()=> {
  return (
    <div className={PREFIX}>
        <div>Made with <HeartFilled /> in Melbourne</div>
        <div>© 2016 Broccoli & Co. All rights reserved</div>
    </div>
  );
})

export default Footer;
