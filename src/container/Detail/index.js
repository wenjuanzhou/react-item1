import React, { Component } from 'react';
import copy from 'copy-to-clipboard';

import Title from '../../components/Title';
import SuctionBottom from '../../components/SuctionBottom';
import Tips from '../../components/Tips';

import './style.less';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alertFlg: false
    }
  }

  componentWillMount() {
    document.title = '大师详情';
  }

  copyWxNum = (mes) => {
    copy('Text', {
      message: `${mes}`,
    });
  }

  handdleModel = (flg) => {
    if (flg) {
      this.setState({
        alertFlg: true
      })
    } else {
      this.setState({
        alertFlg: false
      })
    }
  }

  render() {
    return (
      <div className="wrap">
        <Title />
        <div className="detail">
        管朝明先生对中国优秀传统文化《易经》进行了长期研究，在学习、应用、弘扬和普及易学上取得了巨大成果，是一位德才兼备的国内外知名的易学理论家、实战家。曾是两届“周易与未来科技国际研讨会”筹委，被国内众多的易学组织聘为顾问,1995、96年两届郑州国际易学研讨会“金星王”杯获奖者。2002年管朝明先生出席了在台湾召开的“第五回世界易经大会”，2003年、2004年、2005年、2010年他先后率“中国《易魂》学术代表团”出席在香港、新加坡、泰国、澳门召开的国际易学大会和世界易经大会，每年都任国内易学大会特邀佳宾，他每一次的大会发言，都引起热烈轰动。
        </div>
        <SuctionBottom handdleModel={this.handdleModel} />
        {this.state.alertFlg && <Tips handdleModel={this.handdleModel} copyWxNum={this.copyWxNum} />}
      </div>
    )
  }
}

export default Main