import React, { Component, Fragment } from 'react'
import style from '../styles/index.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router-dom';


import Header from '../components/Header'
import Recommend from '../components/Recommend'
import Support from '../components/Support'
import Travel from '../components/Travel'


//修改了div的样式
export default class Index extends Component {
    constructor(props) {
        super()
        this.state = {
            banner_list: [
                { pic: 'http://img4.imgtn.bdimg.com/it/u=2853553659,1775735885&fm=26&gp=0.jpg' },
                { pic: 'http://img3.imgtn.bdimg.com/it/u=1542609117,2286902976&fm=26&gp=0.jpg' },
                { pic: 'http://img4.imgtn.bdimg.com/it/u=2853553659,1775735885&fm=26&gp=0.jpg' },
                { pic: 'http://img3.imgtn.bdimg.com/it/u=1542609117,2286902976&fm=26&gp=0.jpg' },
            ],
            class_list: [
                { img: 'http://img3.imgtn.bdimg.com/it/u=2814453002,2863530653&fm=26&gp=0.jpg', title: '幼儿课程' },
                { img: 'http://img4.imgtn.bdimg.com/it/u=1906469856,4113625838&fm=26&gp=0.jpg', title: '小学课程' },
                { img: 'http://img1.imgtn.bdimg.com/it/u=1689423260,1416811673&fm=26&gp=0.jpg', title: '初中课程' },
                { img: 'http://img3.imgtn.bdimg.com/it/u=3978684706,446661477&fm=26&gp=0.jpg', title: '高中课程' },
                { img: 'http://img0.imgtn.bdimg.com/it/u=1109689441,1685743679&fm=26&gp=0.jpg', title: '大学考试' },
                { img: 'http://img4.imgtn.bdimg.com/it/u=1906469856,4113625838&fm=26&gp=0.jpg', title: '出国留学' },
                { img: 'http://img1.imgtn.bdimg.com/it/u=1689423260,1416811673&fm=26&gp=0.jpg', title: '英语学习' },
                { img: 'http://img3.imgtn.bdimg.com/it/u=2814453002,2863530653&fm=26&gp=0.jpg', title: '小语种' },
                { img: 'http://img4.imgtn.bdimg.com/it/u=1906469856,4113625838&fm=26&gp=0.jpg', title: '夏冬令营' },
                { img: 'http://img1.imgtn.bdimg.com/it/u=1689423260,1416811673&fm=26&gp=0.jpg', title: '教育头条' },
            ],
            book_list: [
                { pic: 'http://img2.imgtn.bdimg.com/it/u=1091579268,2185400060&fm=26&gp=0.jpg', title: '预约课程', sub_title: '简约快捷' },
                { pic: 'http://img2.imgtn.bdimg.com/it/u=1091579268,2185400060&fm=26&gp=0.jpg', title: '预约课程', sub_title: '简约快捷' },
                { pic: 'http://img2.imgtn.bdimg.com/it/u=1091579268,2185400060&fm=26&gp=0.jpg', title: '预约课程', sub_title: '简约快捷' },
            ],
            recommend_list: [
                { title: '初一寒假新概念6人班(大班Dx)', time: '2020-1-15 至 2020-02-03', place: '庆春路金龙大夏教学点', price: '2090' },
                { title: '初一寒假新概念6人班(大班Dx)', time: '2020-1-15 至 2020-02-03', place: '庆春路金龙大夏教学点', price: '2090' },
                { title: '初一寒假新概念6人班(大班Dx)', time: '2020-1-15 至 2020-02-03', place: '庆春路金龙大夏教学点', price: '2090' },
                { title: '初一寒假新概念6人班(大班Dx)', time: '2020-1-15 至 2020-02-03', place: '庆春路金龙大夏教学点', price: '2090' },
            ],
            enroll_list: [
                { title: '初一寒假新概念6人班(大班Dx)', time: '2020-1-15 至 2020-02-03', place: '庆春路金龙大夏教学点', price: '2090', day: 1 },
                { title: '初一寒假新概念6人班(大班Dx)', time: '2020-1-15 至 2020-02-03', place: '庆春路金龙大夏教学点', price: '2090', day: 1 },
                { title: '初一寒假新概念6人班(大班Dx)', time: '2020-1-15 至 2020-02-03', place: '庆春路金龙大夏教学点', price: '2090', day: 1 },
                { title: '初一寒假新概念6人班(大班Dx)', time: '2020-1-15 至 2020-02-03', place: '庆春路金龙大夏教学点', price: '2090', day: 1 },
            ],
            support_list: [
                {
                    title: '学前辅导',
                    icon: 'http://img3.imgtn.bdimg.com/it/u=2814453002,2863530653&fm=26&gp=0.jpg',
                    item_list: [
                        { pic: 'http://img3.imgtn.bdimg.com/it/u=1542609117,2286902976&fm=26&gp=0.jpg', pic_name: '待定', item_title: '跑破幼儿英语五级班', introduce: '我是课程介绍', subject: '幼儿小孩', price: '4520' },
                        { pic: 'http://img3.imgtn.bdimg.com/it/u=1542609117,2286902976&fm=26&gp=0.jpg', pic_name: '待定', item_title: '跑破幼儿英语五级班', introduce: '我是课程介绍', subject: '幼儿小孩', price: '4520' },
                    ]
                },
                {
                    title: '初中生',
                    icon: 'http://img5.imgtn.bdimg.com/it/u=1933440720,2469399825&fm=26&gp=0.jpg',
                    item_list: [
                        { pic: 'http://img3.imgtn.bdimg.com/it/u=2814453002,2863530653&fm=26&gp=0.jpg', pic_name: '待定', item_title: '跑破幼儿英语五级班', introduce: '我是课程介绍', subject: '幼儿小孩', price: '4520' },
                        { pic: 'http://img3.imgtn.bdimg.com/it/u=2814453002,2863530653&fm=26&gp=0.jpg', pic_name: '待定', item_title: '跑破幼儿英语五级班', introduce: '我是课程介绍', subject: '幼儿小孩', price: '4520' },
                    ]
                }
            ],
            travel_list: [
                {
                    title: '前途出国',
                    icon: 'http://img3.imgtn.bdimg.com/it/u=2814453002,2863530653&fm=26&gp=0.jpg',
                    item_list: [
                        { pic: 'http://img1.imgtn.bdimg.com/it/u=4018557288,1217151095&fm=26&gp=0.jpg', sub_title: '美国本科常春藤计划', price: '9.9', original_price: '100' },
                        { pic: 'http://img1.imgtn.bdimg.com/it/u=4018557288,1217151095&fm=26&gp=0.jpg', sub_title: '美国本科常春藤计划', price: '9.9', original_price: '100' }
                    ]
                },
                {
                    title: '前途出国',
                    icon: 'http://img3.imgtn.bdimg.com/it/u=2814453002,2863530653&fm=26&gp=0.jpg',
                    item_list: [
                        { pic: 'http://img1.imgtn.bdimg.com/it/u=4018557288,1217151095&fm=26&gp=0.jpg', sub_title: '美国本科常春藤计划', price: '9.9', original_price: '100' },
                        { pic: 'http://img1.imgtn.bdimg.com/it/u=4018557288,1217151095&fm=26&gp=0.jpg', sub_title: '美国本科常春藤计划', price: '9.9', original_price: '100' }
                    ]
                }
            ],
            tabbar_list: [
                { icon: 'iconmn_sousuoleimu', title: '分类搜索', link: 'Class' },
                { icon: 'icondianhua', title: '来电', link: '' },
                { icon: 'iconzixun', title: '咨询', link: 'Seek' },
                { icon: 'icongouwuche', title: '购物车', link: 'Cart' },
                { icon: 'iconwode', title: '我的', link: 'Mine' },
            ]
        }
    }
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        var class_json = {
           title: '我是标题',
           content: '我是内容'
        }
        return (
            <div className={style.wrap}>
                <Header />
                <div className={`flex_wrap ${style['person']}`}>
                    <div className={style.person_left}>离您最近的校区1</div>
                    <div className={style.person_right}>
                        <img src="http://img4.imgtn.bdimg.com/it/u=2853553659,1775735885&fm=26&gp=0.jpg" />
                    </div>
                </div>
                {/* 轮播图 */}
                <div className={style.banner_box}>
                    <Slider {...settings}>
                        {
                            this.state.banner_list.map((item, key) => {
                                return (
                                    <div className={style.banner} key={key}>
                                        <img className="banner_img" key={key} src={item.pic} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                {/* //分类栏 */}
                <div className={`flex_wrap ${style['class_list']}`}>
                    {
                        this.state.class_list.map((item, key) => {
                            return (
                                <div className={style.class_box} key={key}>
                                    <Link to={`/Class?id=${1}&status=${2}`}>
                                        <img src={item.img} />
                                        <div>{item.title}</div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`flex_wrap ${style['book_list']}`}>
                    {
                        this.state.book_list.map((item, key) => {
                            return (
                                <div className={style.book_box} key={key}>
                                    <img src={item.pic} />
                                    <div className={style.book_text}>
                                        <p className={style.book_text_top}>{item.title}</p>
                                        <p className={style.book_text_down}>{item.sub_title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style.recommend_wrap}>
                    <div className={style.recommend_top}>
                        <span className='iconfont iconxin'></span>
                        为您推荐
                    </div>
                    <div className={style.recommend_list}>
                        {
                            this.state.recommend_list.map((item, key) => {
                                return (
                                    <Recommend data={item} key={key} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className={style.enroll_wrap}>
                    <div className={style.enroll_top} style={{ color: '#eec439' }}>
                        <span className='iconfont iconshijian'></span>
                        为您推荐
                    </div>
                    <div className={style.recommend_list}>
                        {
                            this.state.enroll_list.map((item, key) => {
                                return (
                                    <Recommend data={item} key={key} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className={style.support_wrap}>
                    {
                        this.state.support_list.map((item, key) => {
                            return (
                                <Support data={item} key={key} />
                            )
                        })
                    }
                </div>
                <div className={style.travel_wrap}>
                    {
                        this.state.travel_list.map((item, key) => {
                            return (
                                <Travel data={item} key={key} />
                            )
                        })
                    }
                </div>
                <div className={style.foot_pic}>
                    <img src={this.state.foot_pic} />
                </div>
                <div className={`flex_wrap ${style['footer']}`}>
                    {
                        this.state.tabbar_list.map((item, key) => {
                            return (
                                <div className={style.tab_box} key={key}>

                                    {key == 1 ?
                                        <a href="tel:18070959190">
                                            <p><span className={`iconfont ${item.icon}`}></span></p>
                                            <p>{item.title}</p>
                                        </a> : null
                                    }
                                    {key !== 1 ?
                                        <Link to={`/${item.link}`}>
                                            <div>
                                                <p><span className={`iconfont ${item.icon}`}></span></p>
                                                <p>{item.title}</p>
                                            </div>
                                        </Link> : null}

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}