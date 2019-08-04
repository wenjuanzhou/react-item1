import React, { Component } from 'react';
import copy from 'copy-to-clipboard';

import Title from './SubComponent/Title';
import Rotary from './SubComponent/Rotary';
import Introduction from './SubComponent/Introduction';
import RotaryMj from './SubComponent/RotaryMj';
import Case from './SubComponent/Case';
import PromiseD from './SubComponent/Promise';
import SuctionBottom from './SubComponent/SuctionBottom';
import Tips from './SubComponent/Tips';

import './style.less';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alertFlg: false
    }
  }

  componentWillMount() {
    document.title = '仙鹤网';
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
        <Rotary />
        <Introduction />
        <RotaryMj />
        <Case />
        <PromiseD />
        <SuctionBottom handdleModel={this.handdleModel} />
        {this.state.alertFlg && <Tips handdleModel={this.handdleModel} copyWxNum={this.copyWxNum} />}
      </div>
    )
  }
}

export default Main