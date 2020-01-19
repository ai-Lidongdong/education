import React, { Component } from 'react'
import Nav from '../components/Nav'
import style from '../styles/login.module.css'

export default class Cart extends Component {
    render() {
        const nav_data = {
            title: '短信登录',
            color: '#fff',
            setting: 'rgba(100, 177, 138, 1)'
        }
        return (
            <div className={style.wrap}>
                <Nav data={nav_data}/>
                <div className={style.header}>
                    <div className={style.write_info}>
                        <div className={style.phone}>
                            <input type="text" placeholder='请输入手机号'/>
                        </div>
                        <div className={style.check}>
                            <input type="text" placeholder="请输入验证码"/>
                            <img src='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2995143552,1363900887&fm=26&gp=0.jpg'/>
                        </div>
                        <div className={style.note} style={{border:'none'}}>
                            <input className={style.write_note} type="text" placeholder="请输入短信码"/>
                            <input className={style.get_note} type="button" value="获取验证码" />
                        </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.point}>手机首次登录会自动创建账号</div>
                        <input className={style.lgon_but} type="button" value='登录'/>
                    </div>
                </div>
            </div>
        )
    }
}
