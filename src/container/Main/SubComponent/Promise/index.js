import React from 'react';

import './style.less'
import promiseTitle from '../../imgs/weChat.jpg';
import phoneImg from '../../imgs/phone.jpeg';


const Promise = (props) => {

  return (
    <div className="promise">
      <img src={promiseTitle} alt="" />
      <img src={phoneImg} alt="" style={{marginTop:'-4px'}}/>
    </div>
  )
}

export default Promise;