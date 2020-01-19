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
                </div>
            </div>
        )
    }
}
