import React, {
    Component
} from 'react'
import { Table } from 'antd';
import styles from './Moneydetail.css'

const columns = [
    {
        title: '标题',
        dataIndex: 'name', align: 'center'
    },
    {
        title: '金额',
        dataIndex: 'age', align: 'center'
    },
    {
        title: '收据号/订单号',
        dataIndex: 'address', align: 'center'
    }, {
        title: '收据编号', align: 'center'
    }, {
        title: '入账地点', align: 'center'
    }, {
        title: '类型', align: 'center'
    }, {
        title: '操作人', align: 'center'
    }, {
        title: '状态', align: 'center'
    }, {
        title: '添加时间', align: 'center'
    }, {
        title: '操作', align: 'center'
    }
];

const columns2 = [
    {
        title: '标题', align: 'center'
    },
    {
        title: '金额', align: 'center'
    },
    {
        title: '收据号', align: 'center'

    }, {
        title: '收据编号', align: 'center'
    }, {
        title: '退费地点', align: 'center'
    }, {
        title: '操作人', align: 'center'
    }, {
        title: '添加时间', align: 'center'
    }
];



const data = [
    {
        key: '1',
        name: 'John',
        age: 32,
        address: 'New York',
    },
    {
        key: '2',
        name: 'Jim ',
        age: 42,
        address: 'London ',
    },
    {
        key: '3',
        name: 'Joe ',
        age: 32,
        address: 'Sidney ',
    },
];

const data2 = []
export default class Moneydetail extends Component {

    render() {
        return (
            <div>
                <div style={{
                    textAlign: "CENTER", borderBottom: "1px dotted #e2e2e2"
                }}>
                    <h3 style={{
                        fontSize: '22px',
                        marginBottom: '10px',
                    }}>交费详情</h3>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <Table bordered columns={columns} dataSource={data} size="middle"
                         rowClassName={(record, index) => {//隔行变色
                            let className = styles.lightRow;
                            if (index % 2 === 1) className = styles.darkRow;
                            return className;
                        }}
                        pagination={false}//分页器
                        footer={() => {
                            return (<p style={{ marginBottom: '0' }}>学费总额：<span>200</span>
                                <li>(交费-退费)</li>
                            </p>)
                        }}


                    />
                </div>

                {/* 退费 */}
                <div style={{
                    textAlign: "CENTER", borderBottom: "1px dotted #e2e2e2"
                    , marginTop: '5px'
                }}>
                    <h3 style={{
                        fontSize: '22px',
                        marginBottom: '10px',
                    }}>退费详情</h3>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={data2}
                        size="middle"
                        rowClassName={(record, index) => {//隔行变色
                            let className = styles.lightRow;
                            if (index % 2 === 1) className = styles.darkRow;
                            return className;
                        }}
                        pagination={false}//分页器

                        footer={() => <p></p>
                        }
                        locale={
                            { emptyText: <div>暂无数据</div> }
                        }
                    />
                </div>
            </div>
        )
    }
}
