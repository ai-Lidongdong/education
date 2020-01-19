import React, { Component } from 'react'
import style from './styles/recommend.module.css'

export default class Recommend extends Component {
    constructor(prope) {
        super()
        this.state = {

        }
    }
    render() {
        const data = this.props.data
        return (
            <div>
                <div className={style.recommend_box}>
                    <div className={`two_out ${style['recommend_title']}`}>{data.title}</div>
                    <div className={style.recommend_info}>
                        <p className='two_out'><span className="iconfont iconshijian"></span>{data.time}</p>
                        <p className='two_out'><span className="iconfont icondingwei"></span>{data.place}</p>
                        <div className={`flex_wrap ${style['recommend_info_down']}`}>
                            <div className={style.book_price}>￥{data.price}</div>
                            <div hidden={!style.book_day} className={style.book_day}>
                                <span className={style.day_num}>还剩{data.day}天</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

