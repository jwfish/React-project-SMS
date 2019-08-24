import React, {
    Component
} from 'react'
import { Button } from 'antd';

import styles from './index.css'
import { connect } from 'dva';
class Index extends Component {
    state = {
        data: [
            { title: '身份证号码', value: '******************' },
            { title: '手机号码', value: '******************' },
            { title: 'qq', value: '******************' },
            { title: '学号', value: 'GZ190513015' },
            { title: '毕业院校', value: '广东机电职业技术学院    电子信息工程' },
            { title: '在校状态', value: '非应届' },
            { title: '学历', value: '专科' },
            { title: '千锋班级', value: '广州HTML5就业班1905期' },
            { title: '招生老师', value: '赵欣' },
            { title: '报名日期', value: ' 2019-04-16' }
        ]
    }

    // async  componentDidMount() {
    //     await React.$axios('http://localhost:3000/material').then((resolve) => {
    //         console.log(resolve.data);
    //         // this.setState({
    //         //     data: resolve.data
    //         // })
    //         // console.log(this.state.data[0]);
    //     })
    // }

    handbtn() {
        // console.log(1);
        console.log(this);
        console.log(this.props.products.islogin);

        this.props.dispatch({
            type: 'products/login',//login作用域
            payload: true,
        });
    }
    render() {
        return (
            <div>
                <div style={{
                    textAlign: "CENTER", borderBottom: "1px dotted #e2e2e2", overflow: 'hidden', marginBottom: '10px'
                }}>
                    <Button type="primary" style={{
                        background: '#428bca', borderColor: '#428bca', float: 'right',
                        marginRight: '23px',
                        width: '100px',
                        height: '30px', marginBottom: '5px'
                    }} onClick={(event) => this.handbtn()}>修改</Button>
                </div>
                <div className="contBox" style={{ overflow: 'hidden' }}>
                    <div className="pic" style={{ width: '25%', height: '200px', padding: '0 12px', float: 'left' }}>
                        <span>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566542424902&di=e12781e7b0154b8857a2e8f042b608d1&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fsoft%2Fimages%2F2013%2F0611%2F20130611121327514.jpg" alt="" style={{ width: '180px', height: '200px', border: '1px dotted #BBB' }} />
                        </span>
                    </div>

                    <div style={{ float: 'left', width: '65%', minWidth: '610PX', border: '1px solid #dcebf7' }}>
                        {this.state.data.map((item, index) => {
                            return <div key={index}>
                                <div className={styles.info}>
                                    {item.title}
                                </div>
                                <div className={styles.infovalue}>
                                    <span>{item.value}</span>
                                </div>
                            </div>
                        })}

                    </div>



                </div>
                <div style={{ marginTop: '15px' }}>
                    <div>
                        <p style={{ fontSize: '16px', fontWeight: '600' }}>[ 我的消息 ]</p>
                        <table className="table table-bordered" style={{ width: '100%' }}>
                            <tbody>
                                <tr style={{ backgroundColor: "#edf3f4", width: '100%' }}>
                                    <th className={styles.trheader} style={{ width: "80%", textAlign: 'left', border: '1px solid #ccc' }}>消息内容</th>
                                    <th style={{ width: "20%", textAlign: 'left', border: '1px solid #ccc', borderLeft: 'none' }}>时间</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div style={{ marginTop: '15px' }}>
                        <p style={{ fontSize: '16px', fontWeight: '600' }}> [ 班主任寄语 ]</p>
                        <table className="table table-bordered" style={{ width: '100%' }}>
                            <tbody>
                                <tr style={{ backgroundColor: "#edf3f4", width: '100%' }}>
                                    <th className={styles.trheader} style={{ width: "20%", textAlign: 'left', border: '1px solid #ccc' }}>消息内容</th>
                                    <th style={{ width: "60%", textAlign: 'left', border: '1px solid #ccc', borderLeft: 'none' }}>寄语内容</th>
                                    <th style={{ width: "20%", textAlign: 'left', border: '1px solid #ccc', borderLeft: 'none' }}>时间</th>
                                </tr>
                            </tbody></table>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <p style={{ fontSize: '16px', fontWeight: '600' }}>[ 千锋其他会员开通 ]</p>
                        <table className="table table-bordered" style={{ width: '100%' }}>
                            <tbody>
                                <tr style={{ backgroundColor: "#edf3f4", width: '100%' }}>
                                    <th className={styles.trheader} style={{ width: "20%", textAlign: 'left', border: '1px solid #ccc' }}>产品名称</th>
                                    <th style={{ width: "60%", textAlign: 'left', border: '1px solid #ccc', borderLeft: 'none' }}>产品描述</th>
                                    <th style={{ width: "20%", textAlign: 'left', border: '1px solid #ccc', borderLeft: 'none' }}>开通信息</th>
                                </tr>
                                <tr>
                                    <td style={{ width: "20%", textAlign: 'left', border: '1px solid #ccc' }}>扣丁学堂</td>
                                    <td style={{ width: "60%", textAlign: 'left', border: '1px solid #ccc', borderLeft: 'none' }}>扣丁学堂大量免费线上视频，不定期更新，为您规划职业路线。<br />官方网站:
                                    <a href="http://www.codingke.com">http://www.codingke.com</a>
                                    </td>
                                    <td style={{ width: "60%", textAlign: 'left', border: '1px solid #ccc', borderLeft: 'none' }}><font color="red">您还未开通扣丁学堂 </font> <button data-id="1" >立即开通</button></td>
                                </tr>
                            </tbody></table>
                    </div>

                </div>

            </div >
        )
    }

};


export default connect(({ products }) => ({
    products,
}))(Index)