import React from 'react';
import extraordinary from '../../imgs/extraordinary.jpeg';
import './style.less';

import mj1 from '../../imgs/mj1.jpg';
import mj2 from '../../imgs/mj2.jpg';
import mj3 from '../../imgs/mj3.jpg';

import './style.less'
import { Carousel } from 'antd-mobile';



const RotaryMj = (props) => {
  const data = [mj1, mj2, mj3];

  return (
    <div className="rotary-mj">
      <div className="mj-img">
        <img src={extraordinary} alt="" />
      </div>
      <Carousel
        autoplay={true}
        dots={false}
        infinite
      >
        {data.map((val, i) => (
          <div key={i}>
            <img src={val} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}


export default RotaryMj;