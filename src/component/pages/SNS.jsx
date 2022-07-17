import React from 'react';
import instagram from "../../img/sns/instagram.png"
import tistory from '../../img/sns/tistory.png';
import kakao from '../../img/sns/kakao.png';
import velog from '../../img/sns/velog.jpg';
import github from '../../img/sns/githug.png';


const MyComponent = () => {

  return (
    <div className="SNS main">
      <a href="https://www.instagram.com/x_xxi_lkj/">
          <img className="sns-icon" src={instagram} />
      </a>
      <a href="https://phillnam.tistory.com">
        <img className="sns-icon" src={tistory}/>
      </a>
      <a href="https://github.com/leekyukin">
        <img className="sns-icon" src={github}/>
      </a>
      <a href="https://velog.io/@leekyukin">
        <img className="sns-icon" src={velog}/>
      </a>
      <a href="https://open.kakao.com/o/ssLIeuqe">
        <img className="sns-icon" src={kakao}/>
      </a>
    </div>
  );
};

export default MyComponent;
