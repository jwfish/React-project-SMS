import React, {
  Component
} from 'react'
import {
  Form,
  Input,
  Button,
  Radio,
  Icon, Table, message
} from 'antd';
import styles from './Technology.css';
const { TextArea } = Input;
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    render: text => <a>{text}</a>, align: 'center'
  },
  {
    title: '问题理由',
    dataIndex: 'question',
    align: 'center'
  }, {
    title: '创建时间',
    dataIndex: 'time',
    align: 'center'
  }, {
    title: '回复',
    dataIndex: 'reply',
    align: 'center'
  }
];




export default class Technology extends Component {

  state = {
    data: [],
    content: '',
    name: ''
  }
  getContent = e => {
    // console.log(e.target.value);
    this.state.content = e.target.value;
    // console.log(this.state.content);

  }
  //点击确定发送请求
  commitbtn() {
    console.log(this.value);
    if (this.state.content) {
      const hide = message.loading('正在提交中，请稍后', 0)
      // Dismiss manually and asynchronously
      setTimeout(hide, 2000);
      // console.log(1);
      React.$axios('http://localhost:3000/inserttechnology', {
        params: {
          name: this.state.name,
          question: this.state.content,
          time: new Date().toLocaleString()

        }
      }).then(async (resolve) => {

        console.log(resolve);
        let data = await React.$axios('http://localhost:3000/technology')
        // console.log(data.data.data);
        this.setState({
          data: data.data.data,//数据复制给data
        })
        await message.success('问题提交成功！');
      }).catch((err) => {
        // console.log(err);
        message.error('请求失败' + err);
      })
    } else {
      message.warning('请输入需要提交的内容');
    }

  }

  //初始化时发送请求数据
  async  componentWillMount() {

    let data = await React.$axios('http://localhost:3000/technology')
    console.log(data);
    this.setState({
      data: data.data.data,//数据复制给data
      //拿到学员名字，如果没有数据就给默认值
      name: data.data.data[0].name ? data.data.data[0].name : "还没吃酸菜鱼"
    })


  }

  render() {


    return (
      <div>
        <div style={{ padding: '16px 12px', border: '1px solid #c5d0dc' }}>
          <Form>

            <Form.Item label="学员姓名：" labelCol={{ span: 4 }} wrapperCol={{ span: 3 }}>
              <Input placeholder={this.state.name} disabled style={{ cursor: "default" }} />
            </Form.Item>
            <Form.Item label="问题内容：" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
              <TextArea rows={4} placeholder="请输入技术内容" onChange={this.getContent} onPressEnter={(e) => this.commitbtn()} />
              {/* <Input placeholder="input placeholder" />  */}
            </Form.Item>

            <div style={{ width: '50%', margin: "30px auto 0", textAlign: "CENTER" }}>

              <Button type="primary" size="large" style={{ backgroundColor: "#6fb3e0", borderColor: "#6fb3e0" }} onClick={(event) => this.commitbtn()} >
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
            rowKey="_id"
            columns={columns}
            dataSource={this.state.data}
            bordered
            size="middle"//尺寸小
            rowClassName={(record, index) => {//隔行变色
              let className = styles.lightRow;
              if (index % 2 === 1) className = styles.darkRow;
              return className;
            }}
            pagination={false}//分页器
            locale={
              { emptyText: <div></div> }
            }

           
      />
        </div>
      </div>
    )
  }
}