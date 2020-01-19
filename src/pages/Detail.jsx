import React, { Component } from 'react'
import style from '../styles/detail.module.css'

export default class Detail extends Component {
    render() {
        return (
            <div className={style.wrap}>
                <div className={style.header}>
                    <span className={`iconfont iconjiantou ${style['return_icon']}`}></span>
                    <div className={`flex_wrap ${style['head_body']}`}>
                        <div>班级</div>
                        <div className={style.head_info}>详情</div>
                        <div>同类班级</div>
                    </div>
                    <div className={style.head_menu}>
                        <span className={`iconfont iconcaidan ${style['menu_icon']}`}></span>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.cource_info}>
                        <div className={style.cource_title}></div>
                        <div className={style.info_box}>
                            <div className={style.info_number}>
                                TFT154
                            </div>
                            <div className={style.info_place}>
                                <span className="iconfont icondingwei"></span>
                                福雷德C座教学点<span className="iconfont iconditu"></span>
                            </div>
                            <div className={style.info_time}>
                                <span className="iconfont iconshijian"></span>
                                2020/3/3 至 2020/5/5 2020/3/3 至 2020/5/5 2020/3/3 至 2020/5/5
                                2020/3/3 至 2020/5/5 2020/3/3 至 2020/5/5 2020/3/3 至 2020/5/5 2020/3
                                /3 至 2020/5/5 2020/3/3 至 2020/5/5 2020/3/3 至 2020/5/5 2020/3/3 至 2020/5/5
                            </div>
                            <div className={`flex_wrap ${style['info_down']}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
