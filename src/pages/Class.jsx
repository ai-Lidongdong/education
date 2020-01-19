import React, { Component } from 'react';
import style from '../styles/class.module.css'
import Search from '../components/Search'

export default class Class extends Component {
    constructor(props) {
        super()
        this.state = {
            choice_list: [
                {
                    title: '默认排序', icon: 'iconsanjiaoxing',
                    item_list: [
                        { name: '默认排序' },
                        { name: '开课时间从近到远' },
                        { name: '开课时间从远到近' },
                        { name: '价格从低到高' },
                        { name: '价格从高到低' },
                    ],
                },
                {
                    title: '小学辅导', icon: 'iconsanjiaoxing',
                    item_list: [
                        {
                            second_title: '小学辅导',
                            second_list: [
                                { name: '全部', id: '1' },
                                { name: 'IELTS(雅思)', id: '2' },
                                { name: 'A-LEVEl', id: '3' },
                                { name: 'TOEFL', id: '4' },
                            ]
                        },
                    ]
                },
                { title: '上课地点', icon: 'iconsanjiaoxing' },
                { title: '筛选', icon: 'iconshaixuan' },
            ],
            class_list: [
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
                { pic: 'http://img1.imgtn.bdimg.com/it/u=1141259048,554497535&fm=26&gp=0.jpg', name: '赵日天', title: '初二英语寒假好学生6人班', sub_title: '1V6WCRH022', few: true, place: '三墩新天地教学点', start_time: '2013/1.8', end_time: '2013/3.9', price: '2090', times: '7', class_time: '14' },
            ],
            choice_show: false
        }
    };
    showChoice = () => {
        this.setState({
            choice_show: !this.state.choice_show
        })
    };
    componentDidMount =() => {
        console.log('props', this.props)
        var options = this.props.location.search.substring(1)
        console.log('options', options)
        console.log(new URLSearchParams(options))
    }
    render() {
        return (
             <div className={style.wrap}>
                {
                    this.state.choice_show ? <div className='cover_one'></div> : null
                }
                <div className={style.header}>
                    <div className={style.search_box}>
                        <img src={require("../images/new_east_icon.png")} />
                        <Search className={style.search_but} data={{ holder: '搜索' }} />
                    </div>
                    <div className={`flex_wrap ${style['choice_list']}`}>
                        {
                            this.state.choice_list.map((item, key) => {
                                return (
                                    <div className={style.choice_box} onClick={this.showChoice} key={key}>
                                        {item.title}<span className={`iconfont ${item.icon}`}></span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        this.state.choice_show ? <div className={style.choice_down}></div> : null
                    }
                </div>
                <div className={style.content}>
                    {
                        this.state.class_list.map((item, key) => {
                            return (
                                <div className={`flex_wrap ${style['class_box']}`} key={key}>
                                    <div className={style.class_left}>
                                        <img src={item.pic} />
                                        <div>{item.name}</div>
                                    </div>
                                    <div className={style.class_right}>
                                        <div className={style.class_title}>{item.title}</div>
                                        <div className={style.class_sub_title}>{item.sub_title}</div>
                                        <div className={style.place}>
                                            <span className='iconfont icondingwei'></span>{item.place}
                                        </div>
                                        <div className={style.time}>
                                            <span className='iconfont iconshijian'></span>{item.start_time}至{item.end_time}
                                        </div>
                                        <div className={`flex_wrap ${style['price']}`}>
                                            <p>￥{item.price}</p>
                                            <p>{item.times}课次/{item.class_time}课时</p>
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
