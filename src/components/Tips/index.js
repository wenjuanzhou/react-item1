import React from 'react';

import './style.less'
import cancel from '../../container/Main/imgs/cancel.png';


const Tips = (props) => {
  const { handdleModel, copyWxNum } = props;
  return (
    <div className="tips-wrap">
      <div className="alert">
        <div className="wx">
          微信号：19856412360
        </div>
        <div className="copy-action" onClick={() => { copyWxNum(19856412360) }}>复制微信号</div>
        <div className="copy">(打开微信，粘贴微信号,添加好友)</div>
        <div className="cancel" onClick={() => { handdleModel(false) }}>
          <img src={cancel} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Tips;