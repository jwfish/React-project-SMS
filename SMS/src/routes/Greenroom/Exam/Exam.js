import React, {
    Component
} from 'react'
import { List, Card } from 'antd';
import styles from './Exam.css';
const data = [
    {
        title: 'GZ-HTML5-1905第二阶段第八周考试+2019-07-05+考试',
        time: '90',
        total: 100,
        scope: 'HTML5（考试大纲）-->第31周-->JS第五周;',
        testtime: '2019-07-05',
        states:'已考'

    },
    {
        title: ' GZ-HTML5-1905第二阶段第七周考试+2019-07-05+考试', time: '90',
        total: 100,
        scope: 'HTML5（考试大纲）-->第31周-->JS第五周;',
        testtime: '2019-06-05',states:'已考'
    },
    {
        title: 'GZ-HTML5-1905第二阶段第六周考试+2019-07-02+考试', time: '90',
        total: 100,
        scope: 'HTML5（考试大纲）-->第31周-->JS第五周;',
        testtime: '2019-05-05',states:'已考'
    },
    {
        title: 'GZ-HTML5-1905第二阶段第六周考试+2019-06-28+考试', time: '90',
        total: 100,
        scope: 'HTML5（考试大纲）-->第31周-->JS第五周;',
        testtime: '2019-04-05',states:'已考'
    },
];

export default class Exam extends Component {


    render() {
        return (
            <div>
                <div style={{ borderBottom: '1px solid #ccc' }}>
                    <h2>考试列表</h2>
                </div>
                <div style={{ marginTop: '43px' }}>
                    <List
                        grid={{ gutter: 40, column: 2 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item style={{ width: '90%' }}>
                            <Card >
                                <div className={styles.states}>{item.states}</div>
                                <h3>{item.title}</h3>
                                <p>考试时间：{item.time}分钟</p>
                                <p>总分数：{item.total}分</p>
                                <p>{item.scope}</p>
                                <p style={{paddingTop:'20px'}}>考试时间：{item.testtime}</p>
                            </Card>
                        </List.Item>
                    )}
                    >

                        
                      

                    </List>
                </div >
            </div >
        )
    }
};
