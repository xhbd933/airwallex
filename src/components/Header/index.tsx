import React from "react";
import "./index.scss";

const PREFIX = "header";

interface IProps{
  title?:React.ReactNode;
}
const Header: React.FC<IProps>= React.memo(({title})=> {

  return (
    <div className={PREFIX}>
        {title?title:
        <div className={`${PREFIX}-defaultTitle`}>Broccoli & Co.</div>
        }
    </div>
  );
})

export default Header;
