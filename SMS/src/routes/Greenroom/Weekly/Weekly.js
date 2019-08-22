import React, {
    Component
} from 'react'
import {
    Form,
    Input,
    Button,
    Icon, message
} from 'antd';
import { Table } from 'antd';
import styles from './Weekly.css';
//全局消息的全局配置
message.config({
    top: 300,//提醒位置
    maxCount: 1//最多只能显示一条全局提醒
});

const { TextArea } = Input;
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        render: text => <a>{text}</a>, align: 'center'
    },
    {
        title: '周报标题',
        className: 'column-money',
        dataIndex: 'title',
        align: 'center'
    },
    {
        title: '周报内容',
        dataIndex: 'content',
        align: 'center'
    }, {
        title: '周报状态',
        dataIndex: 'states',
        align: 'center'
    }, {
        title: '创建时间',
        dataIndex: 'time',
        align: 'center'
    }
];



// console.log(new Date().toLocaleString());//获取到现在的时间戳
class Weekly extends Component {

    state = {
        data: [
            //     {
            //     key: '3',
            //     name: '酸菜鱼',
            //     title: '不还了？',
            //     content: '',
            //     states: '未查看',
            //     time: '2019-08-20 11:34:49'
            // }
        ],
        //周报标题
        title: '',
        //周报内容
        textarea: '', 
        name: '酸菜鱼'
    }

    // 确认按钮 发送插入数据
    handbtn() {
        // console.log(this.state.name);
        const hide = message.loading('正在提交中，请稍后', 0)
        // Dismiss manually and asynchronously
        setTimeout(hide, 2000);
        React.$axios('http://localhost:3000/insertweekly',
            {
                params: {
                    name: this.state.name,
                    title: this.state.title,
                    textarea: this.state.textarea,
                    states: '未查看',
                    time: new Date().toLocaleString()
                }
            }).then(async (resolve) => {

                await React.$axios('http://localhost:3000/weekly').then((resolve) => {

                    this.setState({
                        data: resolve.data.data,
                        //拿到学员名字，如果没有数据就给默认值
                        name: resolve.data.data[0].name ? resolve.data.data[0].name : "还没吃酸菜鱼"
                    })
                })
                message.success('提交成功！');
            })
    }

    //获取标题内容

    getcont = e => {
        // console.log(e.target.value);
        this.setState({
            title: e.target.value
        })
    }
    //获取周报内容
    getArea = e => {
        // console.log(e.target.value);
        this.setState({
            textarea: e.target.value,

        })


    }

    //初始化时发送请求数据
    async  componentWillMount() {

        await React.$axios('http://localhost:3000/weekly').then((resolve) => {

            this.setState({
                data: resolve.data.data,
                //拿到学员名字，如果没有数据就给默认值
                name: resolve.data.data[0].name ? resolve.data.data[0].name : "还没吃酸菜鱼"
            })
        })

    }
    render() {
        return (
            <div>
                <div style={{
                    textAlign: "CENTER", borderBottom: "1px dotted #e2e2e2", marginBottom: '12px'
                }}>

                </div>
                <div style={{ padding: '16px 12px', border: '1px solid #c5d0dc' }}>
                    <Form>

                        <Form.Item label="学员姓名：" labelCol={{ span: 4 }} wrapperCol={{ span: 5 }}>
                            <Input placeholder={this.state.name} disabled style={{ cursor: "default" }} />
                        </Form.Item>
                        <Form.Item label="周报标题" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
                            <Input placeholder="请填写周报标题" style={{ cursor: "default" }} onChange={this.getcont} />


                        </Form.Item>
                        <Form.Item label="周报内容：" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
                            <TextArea rows={4} placeholder="请输入周报内容" onChange={this.getArea} />

                        </Form.Item>

                        <div style={{ width: '50%', margin: "30px auto 0", textAlign: "CENTER" }}>

                            <Button type="primary" size="large" style={{ backgroundColor: "#6fb3e0", borderColor: "#6fb3e0" }}
                                onClick={(event) => this.handbtn()}>
                                <Icon type="check" />
                                确定
                             </Button>
                            <Button style={{ backgroundColor: "#abbac3", borderColor: "#abbac3", color: "#fff", marginLeft: "100px" }} size="large">
                                <Icon type="undo" />
                                返回
                              </Button>


                        </div>
                    </Form>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <Table
                        rowKey="_id"
                        columns={columns}
                        dataSource={this.state.data}
                        bordered
                        size="middle"//尺寸小
                        // title={() => 'Header'}
                        footer={() => ''}
                        rowClassName={(record, index) => {//隔行变色
                            let className = styles.lightRow;
                            if (index % 2 === 1) className = styles.darkRow;
                            return className;
                        }}
                        pagination={false}//分页器
                        locale={
                            { emptyText: <div>暂无数据</div> }
                        }
                    />
                </div>
            </div>
        )
    }
}


export default Weekly = Form.create()(Weekly);