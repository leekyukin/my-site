import React, {useContext} from 'react';
import {MenuContext} from '../context/MenuContext';

const MyComponent = () => {

  const {menu, setMenu} = useContext(MenuContext);

  return (
    !menu &&
    <div className="menu-bar">
      <div className="menu">
        <a href="#">소개</a>
      </div>
      <div className="menu">
        <a href="#">목표</a>
      </div>
      <div className="menu">
        <a href="#">프로젝트</a>
      </div>
      <div className="menu">
        <a href="#">SNS</a>
      </div>
      <div className="menu">
        <a href="#">BLOG</a>
      </div>
    </div>
  );
};

export default MyComponent;
