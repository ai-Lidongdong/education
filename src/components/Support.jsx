import React, { Component } from 'react'
import style from './styles/support.module.css'

export default class Support extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }
    render() {
        const  data = this.props.data
        return (
            <div className={style.support_list}>
            <div className={style.support_top}>
                <img src={data.icon} />{data.title}
            </div>
            <div className={style.support_content}>
                {
                    data.item_list.map((ject, key) => {
                        return (
                            <div className={`flex_wrap ${style['support_box']}`} key={key}>
                                <div className={style.support_left}>
                                    <img src={ject.pic} />
                                    <div>{ject.pic_name}</div>
                                </div>
                                <div className={style.support_right}>
                                    <div className={style.support_title}>{ject.item_title}</div>
                                    <div className={style.support_introduce}>课程介绍：{ject.introduce}</div>
                                    <div className={style.support_subject}>适合人群：{ject.subject}</div>
                                    <div className={style.support_price}>￥ {ject.price}<span> 起</span></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        )
    }
}
