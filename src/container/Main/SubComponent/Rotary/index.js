import React from 'react';

import './style.less'
import { Carousel } from 'antd-mobile';
import banner_1 from '../../imgs/banner1.jpg';
import banner_2 from '../../imgs/banner2.jpg';
import banner_3 from '../../imgs/banner3.jpg';



const Rotary = (props) => {
  const data = [banner_1, banner_2, banner_3];

  return (
    <div className="rotary">
      <Carousel
        autoplay={true}
        dots={false}
        infinite
      >
        {data.map((val,i) => (
          <img
            src={val}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            key={i}
          />
        ))}
      </Carousel>
    </div>
  )
}


export default Rotary;