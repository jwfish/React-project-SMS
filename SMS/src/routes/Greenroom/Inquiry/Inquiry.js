import React, {Component} from 'react'
import { Table } from 'antd';
import styles from './Inquiry.css'
const columns = [
    {
        title: '开始时间',
        // dataIndex: 'name',
    },
    {
        title: '结束时间',
        // dataIndex: 'age',
    },
    {
        title: '测评名称',
        // dataIndex: 'address',
    }, {
        title: '讲师',
        // dataIndex: 'address',
    }, {
        title: '操作',
        // dataIndex: 'address',
    }
];
const data = [
    // {
    //     key: '1',
    //     name: 'John Brown',
    //     age: 32,
    //     address: 'New York No. 1 Lake Park',
    // }
];

export default class Inquiry extends Component{

    render() {
        return (
            <div>
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
            </div>
        )
    }
}