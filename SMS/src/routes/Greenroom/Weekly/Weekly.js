import React, {
    Component
} from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Icon
} from 'antd';
import { Table } from 'antd';
const { TextArea } = Input;
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '周报标题',
        className: 'column-money',
        dataIndex: 'money',
    },
    {
        title: '周报内容',
        dataIndex: 'address',
    }, {
        title: '周报状态',
        dataIndex: 'state',
    }, {
        title: '创建时间',
        dataIndex: 'time',
    }
];

const data = [
    {
        key: '1',
        name: '老胡',
        money: '还钱',
        address: '我没欠你钱',
        state: '未查看',
        time: '2019-08-20 11:34:49'
    },
    {
        key: '2',
        name: '老姚',
        money: '还不还',
        address: 'London No. 1 Lake Park',
        state: '未查看',
        time: '2019-08-20 11:34:49'


    },
    {
        key: '3',
        name: '酸菜鱼',
        money: '不还了？',
        address: 'Sidney No. 1 Lake Park',
        state: '未查看',
        time: '2019-08-20 11:34:49'


    }
];

export default class Weekly extends Component {


    render() {
        return (
            <div>
                <div style={{
                    textAlign: "CENTER", borderBottom: "1px dotted #e2e2e2", marginBottom: '12px'
                }}>

                </div>
                <div style={{ padding: '16px 12px', border: '1px solid #c5d0dc' }}>
                    <Form>

                        <Form.Item label="学员姓名：" labelCol={{ span: 4 }} wrapperCol={{ span: 3 }}>
                            <Input placeholder="还没吃酸菜鱼" disabled style={{ cursor: "default" }} />
                        </Form.Item>
                        <Form.Item label="周报标题：" labelCol={{ span: 4 }} wrapperCol={{ span: 3 }}>
                            <Input placeholder="请填写周报标题" style={{ cursor: "default" }} />
                        </Form.Item>
                        <Form.Item label="周报内容：" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
                            <TextArea rows={4} placeholder="请输入周报内容" />

                        </Form.Item>

                        <div style={{ width: '50%', margin: "30px auto 0", textAlign: "CENTER" }}>

                            <Button type="primary" size="large" style={{ backgroundColor: "#6fb3e0", borderColor: "#6fb3e0" }}>
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
                        columns={columns}
                        dataSource={data}
                        bordered
                        // title={() => 'Header'}
                        footer={() => ''}
                    />
                </div>
            </div>
        )
    }
}
