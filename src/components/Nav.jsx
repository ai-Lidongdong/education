import React, { Component } from 'react'
import style from './styles/nav.module.css'

export default class Nav extends Component {
    render() {
        const data = this.props.data
        return (
            <div className={style.wrap} style={{color:data.color, background:data.setting}}>
                <span className={`iconfont iconjiantou ${style['nav_icon']}`}></span>
                {data.title}
            </div>
        )
    }
}
