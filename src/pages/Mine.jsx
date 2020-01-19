import React, { Component } from 'react'
import style from '../styles/mine.module.css'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//     },
//   }));

export default class Mine extends Component {
    constructor(props) {
        super()
        this.state = {
            order_list: [
                { title: '待支付', icon: 'icondaizhifu-', id: 1 },
                { title: '待报名', icon: 'iconsign', id: 1 },
                { title: '报名成功', icon: 'iconchenggong', id: 1 },
                { title: '支付超时', icon: 'iconpaidui', id: 1 },
                { title: '已撤单', icon: 'iconlkchedan', id: 1 },
            ],
            tool_list: [
                { title: '绑定学员号', icon: 'iconzhanghaobangding', id: 1 },
                { title: '配送地址管理', icon: 'icondizhi', id: 1 },
                { title: '学员信息管理', icon: 'iconguanliyuan', id: 1 },
                { title: '转/退班', icon: 'iconzhuanhuan', id: 1 },
                { title: '补款', icon: 'iconbukuan', id: 1 },
                { title: '老生专享续班', icon: 'iconxueshengqingjia', id: 1 },
            ]
        }
    }
    render() {

        return (
            <div className={style.wrap}>
                <div className={style.header}>
                    <div className={style.title}>我的</div>
                    <div className={style.person_info}>
                        <img src="http://img4.imgtn.bdimg.com/it/u=1906469856,4113625838&fm=26&gp=0.jpg" />
                        <div>lidongdong</div>
                    </div>
                    <div className={style.binding}>
                        享受班级服务与会员积分须绑定学员号
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.order_wrap}>
                        <div className={style.order_top}></div>
                        <div className={`flex_wrap ${style['order_list']}`}>
                            {
                                this.state.order_list.map((item, key) => {
                                    return (
                                        <div className={style.order_box} key={key}>
                                            <p><span className={`iconfont ${item.icon}`}></span></p>
                                            <p>{item.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={style.tool_wrap}>
                        <GridList cellHeight='100' cols={3}>
                            {
                                this.state.tool_list.map(item => (
                                    <GridListTile className={style.tool_box} cols='1' key={item.id}>
                                        <p className={style.icon_box}><span className={`iconfont ${item.icon}`}></span></p>
                                        <p>{item.title}</p>
                                    </GridListTile>
                                ))
                            }
                        </GridList>
                    </div>
                </div>
                <div className={style.footer}>
                    <span className={style.footer_first}>隐私保护政策：</span>如您需对个人信息进行修改、删除或注销账户的，或有关于个人信息保护的任何建议或意见，您可以通过jt_user@xdf.cn与我们联系。如需了解更多个人隐私保护政策，
                    <a href='https://react.docschina.org/tutorial/tutorial.html#what-are-we-building' alt='ss'>请点击此处。</a>
                </div>
            </div>
        )
    }
}
