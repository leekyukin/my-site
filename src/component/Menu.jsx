import React, {useContext} from 'react';
import {MenuContext} from '../context/MenuContext';
import {Link} from "react-router-dom";

const MyComponent = () => {

  const {menu, setMenu} = useContext(MenuContext);

  return (
    !menu &&
    <nav className="menu-bar">
      <div className="menu">
        <Link to="/introduction">소개</Link>
      </div>
      <div className="menu">
        <Link to="/books">Read Book</Link>
      </div>
      <div className="menu">
        <Link to="/project">Project</Link>
      </div>
      <div className="menu">
        <Link to="/sns">SNS</Link>
      </div>
      <div className="menu">
        <Link to="/blog">BLOG</Link>
      </div>
    </nav>
  );
};

export default MyComponent;
