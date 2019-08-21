import React, { Component } from 'react'
import { Alert, Icon } from 'antd';

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
        dataIndex: 'address',
    }, {
        title: '讲师',
        dataIndex: 'address',
    }, {
        title: '班主任',
        dataIndex: 'address',
    }, {
        title: '就业老师',
        dataIndex: 'address',
    }, {
        title: '操作',
        dataIndex: 'address',
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
                    <Alert message="Success Tips" type="success" showIcon></Alert>
                </div>

                <div style={{ marginTop: '30px' }}>

                    <Table
                        bordered
                        columns={columns}
                        dataSource={data}
                        size="small"
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