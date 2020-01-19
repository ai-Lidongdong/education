import React, { Component } from 'react'
import style from './styles/search.module.css'

export default class Search extends Component {
    render() {
        const data = this.props.data
        return (
            <div className={style.wrap} style={{width:data.width}}>
                <span className='iconfont iconsousuo'></span>
                <input type="text" placeholder={data.holder} />
            </div>
        )
    }
}
