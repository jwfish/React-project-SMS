import React, { Component } from 'react'
import {
    Form,
    Input,
    Button,   
    Icon
} from 'antd';
const { TextArea } = Input;


export default class Stuvip extends Component {


    render() {
        return (

            <div >
                <div style={{
                    textAlign: "CENTER", borderBottom: "1px dotted #e2e2e2", marginBottom: '12px'
                }}>
                    <h3 style={{
                        fontSize: '14px',
                        marginBottom: '10px',
                        fontWeight: 'bold',
                        color: 'red'
                    }}>您还不是VIP学员，填写下面表单可以申请VIP学员！</h3>
                </div>
                <div style={{ padding: '16px 12px', border: '1px solid #c5d0dc' }}>
                    <Form>

                        <Form.Item label="学员姓名：" labelCol={{ span: 4 }} wrapperCol={{ span: 3 }}>
                            <Input placeholder="还没吃酸菜鱼" disabled style={{ cursor: "default" }} />
                        </Form.Item>
                        <Form.Item label="问题内容：" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
                            <TextArea rows={4} placeholder="请输入申请理由" />

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
            </div>
        )
    }
}