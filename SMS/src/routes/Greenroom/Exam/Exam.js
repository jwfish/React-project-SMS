import React, {
    Component
} from 'react'
import { List, Card } from 'antd';
import styles from './Exam.css';


export default class Exam extends Component {

    state = {
        data: [
            // {
            //     title: 'GZ-HTML5-1905第二阶段第八周考试+2019-07-05+考试',
            //     time: '90',
            //     total: 100,
            //     scope: 'HTML5（考试大纲）-->第31周-->JS第五周;',
            //     testtime: '2019-07-05',
            //     states: '已考'

            // }
        ]
    }

    async  componentWillMount() {
        await React.$axios('http://localhost:3000/exam').then((resolve) => {
            console.log(resolve)
            this.setState({
                data: resolve.data,

            })

        })
    }

    render() {
        return (
            <div>
                <div style={{ borderBottom: '1px solid #ccc' }}>
                    <h2>考试列表</h2>
                </div>
                <div style={{ marginTop: '43px' }}>
                    <List
                        grid={{ gutter: 40, column: 2 }}
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item style={{ width: '90%' }}>
                                <Card >
                                    <div className={styles.states}>{item.states}</div>
                                    <h3>{item.title}</h3>
                                    <p>考试时间：{item.time}分钟</p>
                                    <p>总分数：{item.total}分</p>
                                    <p>{item.scope}</p>
                                    <p style={{ paddingTop: '20px' }}>考试时间：{item.testtime}</p>
                                </Card>
                            </List.Item>
                        )}
                        locale={
                            { emptyText: <div></div> }
                        }
                    >




                    </List>
                </div >
            </div >
        )
    }
};
