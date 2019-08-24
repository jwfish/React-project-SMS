import React, {
  Component
} from 'react'
import { Form, Icon, Input, Button, message } from 'antd';
import styles from './Login.css'
import Qs from 'qs'
// import { connect } from 'dva';
class Login extends Component {
  state = {
    loading: false,
    loadtext: '登录中 ···'

  };

  enterLoading = () => {
    this.setState({ loading: true });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {//获取到表单的值
        console.log(values.username, values.password);

        await React.$axios({
          method: 'post',
          url: 'http://localhost:3000/login',
          data: Qs.stringify({
            name: values.username,
            password: values.password
          }
          ), headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then((resolve) => {
          console.log(resolve);
          if (resolve.data.data.length) {
            console.log('登录成功');
            document.cookie = "tokenpw=" + resolve.data.token;
            //编程时导航跳转
            this.props.history.push("/home/Index");
          } else {
            console.log('登录失败');
          }
        }).catch((reject) => {
          // console.log(reject);
          // console.log('登录不成功');
          message.warning('登录发生错误' + reject)
        })

        // console.log(data);

        // // document.cookie = "name=" + "huahua";
        // console.log(data.data.data.length);


      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div className={styles.loginbox}>
          <div className={styles.frombox}>
            <div style={{ textAlign: 'center', paddingBottom: '10px', }}>
              <h3 style={{ borderBottom: '1px solid #d9d9d9', lineHeight: '40px', }}>酸菜鱼--学生后台系统</h3>
            </div>

            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名/学号"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="登录密码"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {/* {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="">
                  Forgot password
          </a> */}
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}
                  loading={this.state.loading} onClick={this.enterLoading}>
                  {this.state.loading ? this.state.loadtext : '登录'}
                </Button>
                {/* Or <a href="">register now!</a> */}
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}


export default Login = Form.create({ name: 'normal_login' })(Login);
