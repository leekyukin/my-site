import React, {useContext, useState} from 'react';
import ham from '../img/header/ham.png';
import hamMon from '../img/header/hamMon.png';
import {MenuContext} from '../context/MenuContext';
import clickIcon from "../img/header/click.png"
import boomIcon from "../img/header/boom.png";
import {Link} from "react-router-dom";

const MyComponent = () => {

  const {menu, setMenu} = useContext(MenuContext);
  const {boom, setBoom} = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  }

  const toggleBoom = () => {
    setBoom(!boom)
  }

  return (
    <div className="header">
        {
          boom
          ? <img src={boomIcon} alt="boomer"
                 onMouseLeave={toggleBoom}/>
          : <h1 >
              <Link onMouseOver={toggleBoom} to="/">Lee Kyukin</Link>
            </h1>
        }
      <div>
        {
          menu &&
          <img className="clickIcon"
               src={clickIcon}
               alt="fuck"/>
        }
        <img className="hamIcon"
             onClick={toggleMenu}
             src={menu ? ham : hamMon}
             alt="fuck"/>
      </div>

    </div>
  );
};

export default MyComponent;
