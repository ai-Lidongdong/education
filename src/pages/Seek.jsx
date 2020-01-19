import React, { Component } from 'react';
import style from '../styles/seek.module.css'
import Button from '@material-ui/core/Button';
export default class Seek extends Component {
    constructor(props) {
        super()
        this.state = {
            location: '杭州'
        }
    }
    render() {
        return (
            <div className={style.wrap}>
                <div className={`flex_wrap ${style['header']}`}>
                    <div className={style.head_left}>
                        新东方{this.state.location}学校
                    </div>
                    <div className={style.head_right}>
                        <span className="iconfont iconzhiding"></span>
                        <span className="iconfont iconjian"></span>
                    </div>
                </div>
                <div className={style.content}></div>
                <div className={style.footer}>
                    <div className={style.expression}>
                        <span className="iconfont iconbiaoqing"></span>
                        <span className="iconfont icontupian"></span>
                        <span className="iconfont iconlianjie"></span>
                        <span className="iconfont iconwenjian"></span>
                    </div>
                    <div className={style.write}>
                        <input className={style.write_input} type="text" placeholder='点击输入内容' />
                        {/* <input className={style.write_but}  type="button" value='发送' /> */}
                        <Button className={style.write_but} variant="contained" color="primary">发送</Button>
                    </div>
                </div>
            </div>
        )
    }
}
