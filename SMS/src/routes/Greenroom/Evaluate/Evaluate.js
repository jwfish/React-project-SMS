import React, { Component } from 'react'
import { Alert } from 'antd';

import { Table } from 'antd';

import styles from './Evaluate.css'
const columns = [
    {
        title: '测评开始时间',
        dataIndex: 'name',
    },
    {
        title: '测评结束时间',
        dataIndex: 'age',
    },
    {
        title: '评价对象',
        dataIndex: '',
    }, {
        title: '讲师',
        dataIndex: '',
    }, {
        title: '班主任',
        dataIndex: '',
    }, {
        title: '就业老师',
        dataIndex: '',
    }, {
        title: '操作',
        dataIndex: '',
    },
];
const data = [
    // {
    //     key: '1',
    //     name: 'John Brown',
    //     age: 32,
    //     address: 'New York No. 1 Lake Park',
    // }
];
export default class Evaluate extends Component {

    render() {
        return (
            <div>
                <div style={{ paddingBottom: '30px', borderBottom: '1px dotted #e2e2e2' }}>
                    <Alert message="您的满意是对我们最好的评价，您的批评是给我们最大的改进动力，欢迎同学对千锋提出宝贵的批评和建议。" type="success" showIcon></Alert>
                </div>

                <div style={{ marginTop: '10px' }}>

                    <Table
                        rowKey="_id"
                        bordered
                        columns={columns}
                        dataSource={data}
                        size="middle"
                        pagination={false}
                        onHeaderRow={(column, index) => {
                            // console.log(column, index);
                            // return { background: 'blue' }
                            styles.headerstyle
                        }}
                        locale={
                            { emptyText: <div>暂无数据</div> }
                        }
                        rowClassName={(record, index) => {//隔行变色
                            let className = styles.lightRow;
                            if (index % 2 === 1) className = styles.darkRow;
                            return className;
                        }}


                    />
                </div>
            </div >
        )
    }
}