import React, {
    Component
} from 'react'

import {
    Form,
    DatePicker,
    Input,
    Button,
    Icon
} from 'antd';
import { Table } from 'antd';

import styles from './Leave.css'
import moment from "moment";//时间

const { RangePicker } = DatePicker;
const { TextArea } = Input;


const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        align: 'center'
    },
    {
        title: '类型',
        dataIndex: 'leixing', align: 'center'
    },
    {
        title: '扣除（分数）',
        dataIndex: 'scores', align: 'center'

    }, {
        title: '剩余分数',
        dataIndex: 'total', align: 'center'

    }, {
        title: '理由',
        dataIndex: 'reason', align: 'center'
    }, {
        title: '操作人',
        dataIndex: 'people', align: 'center'
    }, {
        title: '操作时间',
        dataIndex: 'time', align: 'center'
    }
];
const data = [
    {
        key: '1',
        name: '酸菜鱼',
        leixing: '事假',
        scores: 5,
        total: 95,
        reason: '喉咙发炎',
        people: '老胡',
        time: '2019-06-24 10:49:03'
    }
];
const defaultSelectDate = {
    // 设置默认显示时间，显示当天一天
    startDate: moment().startOf('day').subtract(0, 'days'),
    endDate: moment().endOf('day').subtract('days'),
}

class Leave extends Component {

    handleSubmit = e => {
        e.preventDefault();


        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }

            // Should format date value before submit.
            const rangeValue = fieldsValue['range-picker'];
            const rangeTimeValue = fieldsValue['range-time-picker'];
            const values = {
                ...fieldsValue,
                'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
                'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
                'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
                'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
                'range-time-picker': [
                    rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
                    rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
                ],
                'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
            };
            // console.log('Received values of form: ', values);
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        };
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

                        <Form.Item label="周报内容：" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
                            <TextArea rows={4} placeholder="请输入请假理由" />

                        </Form.Item>

                        <Form.Item label="请假时间：" labelCol={{ span: 4 }} className={styles.timefl}>
                            {getFieldDecorator('range-time-picker', {
                                initialValue: [defaultSelectDate.startDate, defaultSelectDate.endDate]
                            })(
                                <RangePicker placeholder={['开始时间', '结束时间']} showTime format="YYYY-MM-DD HH:mm:ss" />,
                            )}
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

                        pagination={false}//分页器
                        rowClassName={(record, index) => {//隔行变色
                            let className = styles.darkRow;
                            if (index % 2 === 1) className = styles.lightRow;
                            return className;
                        }}
                    />
                </div>

            </div>
        )
    }
};


export default Form.create()(Leave)