import React from 'react';

import './style.less'
import logo from '../../imgs/ico-home.png';


const Title = (props) => {

  return (
    <div className="title">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="txt">
        中易文化研究
        环境勘测
      </div>
    </div>
  )
}

export default Title;