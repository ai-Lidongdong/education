import React, { Component } from 'react'
import style from './styles/travel.module.css'

export default class Travel extends Component {
    render() {
        const data = this.props.data
        return (
            <div className={style.travel_list}>
                <div className={style.travel_top}>
                    <img src={data.icon}/>{data.title}
                </div>
                <div className={style.travel_content}>
                    {
                        data.item_list.map((ject, key) => {
                            return(
                                <div className={style.travel_box} key={key}>
                                    <img className={style.travel_pic} src={ject.pic}/>
                                    <div className={style.travel_down}>
                                        <div className={style.travel_title}>{ject.sub_title}</div>
                                        <div className={style.travel_price}>
                                            <span className={style.now_price}>￥{ject.price}</span> |
                                            <span className={style.original_price}>￥{ject.original_price}</span>
                                        </div>
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
