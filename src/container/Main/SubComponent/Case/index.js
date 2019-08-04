import React from 'react';

import './style.less'
import caseTitle from '../../imgs/case-title.jpg';
import caseImg1 from '../../imgs/case1.jpg';
import caseImg2 from '../../imgs/case2.jpg';
import caseImg3 from '../../imgs/case3.jpg';
import caseImg4 from '../../imgs/case4.jpg';
import caseImg5 from '../../imgs/case5.jpg';
import caseImg6 from '../../imgs/case6.jpg';
import caseImg7 from '../../imgs/case7.jpg';
import caseImg8 from '../../imgs/case8.jpg';
import caseImg9 from '../../imgs/case9.jpg';
import caseImg10 from '../../imgs/case10.jpg';
import caseImg11 from '../../imgs/case11.jpg';
import caseImg12 from '../../imgs/case12.jpg';


const Case = (props) => {
  const imgArr = [
    caseImg1, caseImg2, caseImg3, caseImg4, caseImg5, caseImg6, caseImg7, caseImg8, caseImg9, caseImg10, caseImg11, caseImg12
  ]

  return (
    <div className="case-wrap">
      <div className="case-title">
        <img src={caseTitle} alt="" />
      </div>
      <div className="case-img">
        {imgArr.map((item, i) => {
          return (
            <li className="item" key={i}>
              <img src={item} alt="" />
            </li>
          )
        })}
      </div>
      <div className="case-btn" onClick={() => { window.location.hash = '#example' }}>
        更多环境文化策划师案例+
      </div>
    </div>
  )
}

export default Case;