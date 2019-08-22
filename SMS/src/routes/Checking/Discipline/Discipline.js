import React, {
    Component
} from 'react'
import { Table } from 'antd';

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

export default class Discipline extends Component {
    render() {
        return (
            <div>
                <div style={{
                    borderBottom: "1px dotted #e2e2e2", marginBottom: '12px'
                }}>

                </div>
                <div style={{ marginTop: "10px" }}>
                    <Table bordered columns={columns} dataSource={data} align="center" size="middle"
                        rowClassName={
                            (record, index) => {//隔行变色，类名加了，没办法加样式
                                let className = 'light'
                                if (index % 2 === 0) {
                                    className = 'dark'

                                } else {
                                    className = 'light'
                                }
                                return className
                            }}

                        pagination={false}//分页器

                        footer={() => <p></p>
                        }


                    />
                </div>

            </div>
        )
    }
};
