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
    const arr = [
      '宝宝起名',
      '八字起名',
      '八字预测',
      '八字看相',
      '公司改名',
      '风水布局',
      '运势化解',
      '注册风水',
      '财势预测',
      '凶位化解',
      '化解凶煞',
      '购房风水',
      '八字合婚',
      '店铺起名',
      '命理风水',
      '做法事改运',
      '公司风水策划',
      '易经风水改运']
    return (
      <div className="wrap">
        <Title />
        <ul className="more-demo">
          {arr.map((ele, i) => {
            return (
              <li className="item" key={i} onClick={() => {
                this.setState({
                  alertFlg: !this.state.alertFlg
                })
              }}>{ele}</li>
            )
          })}
        </ul>
        <SuctionBottom handdleModel={this.handdleModel} />
        {this.state.alertFlg && <Tips handdleModel={this.handdleModel} copyWxNum={this.copyWxNum} />}
      </div>

    )
  }
}

export default Main