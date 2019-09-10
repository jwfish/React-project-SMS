import React, {
    Component
} from 'react'

import {
    Form,
    DatePicker,
    Input,
    Button,
    Icon, message
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
        title: '请假理由',
        dataIndex: 'reason',
        align: 'center'
    },
    {
        title: '班主任审批',
        dataIndex: 'classteacher',
        align: 'center'

    }, {
        title: '讲师审批',
        dataIndex: 'lecturer',
        align: 'center'

    }, {
        title: '请假时间',
        dataIndex: 'timeframe',
        align: 'center'
    }, {
        title: '创建时间',
        dataIndex: 'time',
        align: 'center'
    }
];

const defaultSelectDate = {
    // 设置默认显示时间，显示当天一天
    startDate: moment().startOf('day').subtract(0, 'days'),
    endDate: moment().endOf('day').subtract('days'),
}

class Leave extends Component {
    state = {
        data: [
            // {
            //     key: '1',
            //     name: '酸菜鱼',
            //     reason: '喉咙发炎',
            //     classteacher: '通过',
            //     lecturer: '通过',
            //     timeframe: '2019-06-21 18:00:00~2019-06-22 18:00:00',
            //     time: '2019-06-24 10:49:03'
            // }
        ],
        textarea: '',
        //开始结束时间  如果没有选择就是默认当天24小时  .format('YYYY-MM-DD HH:mm:ss')转化为合适的日期格式
        starttime: moment().startOf('day').subtract(0, 'days').format('YYYY-MM-DD HH:mm:ss'),
        endtime: moment().endOf('day').subtract('days').format('YYYY-MM-DD HH:mm:ss'),
        name: '酸菜鱼'
    }

    onChange(value, dateString) {//
        console.log(dateString);

        console.log(this);
        this.setState({
            starttime: dateString[0],
            endtime: dateString[1]
        })

    }

    //点击确定ok的回调
    onOk() {
        // console.log(this);
        // console.log(111);
        // console.log(this.state.endtime);
        // console.log(this.state.starttime + '~' + this.state.endtime);
    }

    //获取请假理由
    getArea = e => {
        console.log(e.target.value);
        this.setState({
            textarea: e.target.value,
        })
    }

    async  componentDidMount() {

        await React.$axios('http://localhost:3000/leave').then((data) => {
            // console.log(data.data);
            this.setState({
                data: data.data,
                name: data.data[0].name ? data.data[0].name : '酸菜鱼'
            })
        })
    }

    //点击确定插入数据
    handbtn() {
        console.log(this.state.name);
        if (this.state.textarea) {
            const hide = message.loading('正在提交中，请稍后', 0)
            // Dismiss manually and asynchronously
            setTimeout(hide, 2000);
            React.$axios('http://localhost:3000/insertleave',
                {
                    params: {
                        name: this.state.name,
                        reason: this.state.textarea,
                        timeframe: this.state.starttime + '~' + this.state.endtime,
                        time: new Date().toLocaleString()
                    }
                }).then(async (resolve) => {

                    console.log(resolve);
                    await React.$axios('http://localhost:3000/leave').then((data) => {
                        // console.log(data.data);
                        this.setState({
                            data: data.data,
                            name: data.data[0].name ? data.data[0].name : '酸菜鱼'
                        })
                    })
                    message.success('提交成功！');
                })
        } else {
            message.warning('请输入需要请假理由再提交！')
        }
    }


    //点击返回，回到上个页面
    fanhui() {
        this.props.history.go(-1)
        console.log(1);
    }

    // 日期面板
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

                        <Form.Item label="学员姓名：" labelCol={{ span: 4 }} wrapperCol={{ span: 5 }}>
                            <Input placeholder={this.state.name} disabled style={{ cursor: "default" }} />
                        </Form.Item>

                        <Form.Item label="请假理由：" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
                            <TextArea rows={4} placeholder="请输入请假理由" onChange={this.getArea} />

                        </Form.Item>

                        <Form.Item label="请假时间：" labelCol={{ span: 4 }} className={styles.timefl}>
                            {getFieldDecorator('range-time-picker', {
                                initialValue: [defaultSelectDate.startDate, defaultSelectDate.endDate]
                            })(
                                <RangePicker placeholder={['开始时间', '结束时间']} showTime format="YYYY-MM-DD HH:mm:ss" onChange={this.onChange.bind(this)} onOk={this.onOk.bind(this)} />,
                            )}
                        </Form.Item>



                        <div style={{ width: '50%', margin: "30px auto 0", textAlign: "CENTER" }}>

                            <Button type="primary" size="large" style={{ backgroundColor: "#6fb3e0", borderColor: "#6fb3e0" }}
                                onClick={(event) => this.handbtn()}>
                                <Icon type="check" />
                                确定
                             </Button>
                            <Button style={{ backgroundColor: "#abbac3", borderColor: "#abbac3", color: "#fff", marginLeft: "100px" }} size="large" onClick={(event) => this.fanhui()}>
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
                        locale={
                            { emptyText: <p></p> }
                        }

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