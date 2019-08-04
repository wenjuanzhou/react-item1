import React from 'react';

import './style.less'
import ico_tel from '../../container/Main/imgs/ico-tel2.png';
import ico_wx from '../../container/Main/imgs/ico-wx.png';



const SuctionBottom = (props) => {
  const { handdleModel } = props;
  const iconArr = [
    { icon: ico_tel, txt: '立即通话', action: 'tel:19856412360' },
    { icon: ico_wx, txt: '微信预约', action: 'javascript:void(0);' },
  ]


  return (
    <ul className="suction-wrap">
      {iconArr.map((ele, index) => {
        return (
          <li className="suction-item" key={index} onClick={() => { index === iconArr.length - 1 && handdleModel(true) }}  >
            <img src={ele.icon} alt="" />
            <div className="item-txt">{ele.txt}</div>
            <a className={index === iconArr.length - 1 ? 'action dn' : 'action'} href={ele.action}></a>
          </li>
        )
      })}
    </ul>
  )
}

export default SuctionBottom;