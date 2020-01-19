import React, { Component } from 'react'
import style from './styles/header.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './common.css'

export default class Header extends Component {
    constructor(props) {
        super();
        this.state = {
            banner_list:[
                {pic:'http://img4.imgtn.bdimg.com/it/u=2853553659,1775735885&fm=26&gp=0.jpg'},
                {pic:'http://img3.imgtn.bdimg.com/it/u=1542609117,2286902976&fm=26&gp=0.jpg'},
                {pic:'http://img4.imgtn.bdimg.com/it/u=2853553659,1775735885&fm=26&gp=0.jpg'},
                {pic:'http://img3.imgtn.bdimg.com/it/u=1542609117,2286902976&fm=26&gp=0.jpg'},
            ]
        }
    }
    start = () => {
        console.log('-----mouse_start')
    }
    stop = () => {
        console.log('-----mouse_stop')
    }
    render() {
        return (
            <div className={style.wrap}>
                <div className={`flex_wrap ${style['head_box']}`}>
                    <div className={style.head_left}>杭州1
                        <span className="iconfont iconjiantou1"></span>
                    </div>
                    <div className={style.input}>
                         <div className={style.search}>
                            <span className="iconfont iconsousuo"></span>
                            <input type="text" placeholder="班号，课程，校区搜索" />
                        </div>
                    </div>
                    <div className={style.head_right}>
                        <span className="iconfont iconlaoshi"></span>
                        <span className="iconfont iconditu"></span>
                    </div>
                </div>
            </div>
        );
    }
}
