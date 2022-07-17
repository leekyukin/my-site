import React, {useState} from 'react';

import _1 from '../img/jesus/1수태고지.jpg';
import _2 from '../img/jesus/R1280x0-2.jpeg';
import _3 from '../img/jesus/R1280x0-3.jpeg'
import _4 from '../img/jesus/R1280x0-4.jpeg'
import _5 from '../img/jesus/R1280x0-5.jpeg'
import _6 from '../img/jesus/R1280x0-6.jpeg'
import _7 from '../img/jesus/R1280x0-7.jpeg'
import _8 from '../img/jesus/R1280x0-8.jpeg'
import _9 from '../img/jesus/R1280x0-9.jpeg'
import _10 from '../img/jesus/R1280x0-10.jpeg'
import _11 from '../img/jesus/R1280x0-11.jpeg'
import _12 from '../img/jesus/R1280x0-12.jpeg'
import _13 from '../img/jesus/R1280x0-13.jpeg'
import _14 from '../img/jesus/R1280x0-14.jpeg'
import _15 from '../img/jesus/R1280x0-15.jpeg'

const MyComponent = () => {


  const [img, setImage] = useState([_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15]);
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index+1)%img.length);
  }

  return (
    <div className="home main">
      <img
        className="background-image"
        src={img[index]}
        onClick={next}/>
      <h2> CLICK! </h2>
    </div>
  );
};

export default MyComponent;
