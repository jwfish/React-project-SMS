import React, {
    Component
} from 'react'
import { Table } from 'antd';
import styles from './Moneydetail.css'

const columns = [
    {
        title: '标题',
        dataIndex: 'title',
        align: 'center'
    },
    {
        title: '金额',
        dataIndex: 'sum',
        align: 'center'
    },
    {
        title: '收据号/订单号',
        dataIndex: 'orderID',
        align: 'center'
    }, {
        title: '收据编号',
        dataIndex: '',
        align: 'center'
    }, {
        title: '入账地点',
        dataIndex: 'site',
        align: 'center'
    }, {
        title: '类型',
        dataIndex: 'type',
        align: 'center'
    }, {
        title: '操作人',
        dataIndex: 'operator',
        align: 'center'
    }, {
        title: '状态',
        dataIndex: 'states',
        align: 'center'
    }, {
        title: '添加时间',
        dataIndex: 'time',
        align: 'center'
    }, {
        title: '操作',
        align: 'center'
    }
];

const columns2 = [
    {
        title: '标题',
        align: 'center'
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





const data2 = []
export default class Moneydetail extends Component {
    state = {
        data: [
            // {
            //     key: '1',
            //     title: 'huahua 学费',
            //     sum: 800,
            //     orderID: '0755316',
            //     site: '广州', type: '支付宝', operator: '老黄财务', states: '审核成功', time: '2019-04-16 19:55:13'
            // }
        ],
        data2: []
    }

    async componentWillMount() {
        await React.$axios('http://localhost:3000/moneydetail').then((resolve) => {
            // console.log(resolve.data);
            this.setState({
                data:resolve.data
            })
        })
    }
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
                    <Table bordered columns={columns} dataSource={this.state.data}  rowKey="_id" size="middle"
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

                        locale={
                            { emptyText: <div>暂无数据</div> }
                        }
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
                        dataSource={this.state.data2}
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
