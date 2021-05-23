import React from "react";

const PREFIX = "footer";

interface IProps{
  title:React.ReactNode;
}
const Header: React.FC<IProps>= React.memo(({title})=> {

  return (
    <div className={PREFIX}>
        {title}
    </div>
  );
})

export default Header;
