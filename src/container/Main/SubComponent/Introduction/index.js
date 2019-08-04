import React from 'react';

import './style.less'
import person from '../../imgs/person.png';
import imgTxt from '../../imgs/img-title.jpg';


const Introduce = (props) => {

  return (
    <div className="introduce" onClick={() => { window.location.hash = '#detail' }}>
      <div className="img-person">
        <img src={person} alt="" />
      </div>
      <div className="introduce-txt">
        <div className="img-title">
          <img src={imgTxt} alt="" />
        </div>
        <div className="content">
          管朝明先生于1958出生安徽六安，管公第40代传人，是著名的民间风水路过阴阳大师，从业40年，对中国优秀传统文化《易经》进行了长期研究，在八字预测学，六爻预测学，测字预测学，奇门预测学都是顶端级大师，在易学风水，奇门遁甲、六爻、命理及手面相研究。被誉为当代的管公。
    </div>
      </div>
    </div>
  )
}

export default Introduce;