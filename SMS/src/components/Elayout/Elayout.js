import React, { Component } from 'react'
import { Route, Switch, Link } from 'dva/router';


import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import Complaint from '../../routes/Greenroom/Complain/Complain';
import Technology from '../../routes/Greenroom/Technology/Technology';
import Itemupload from '../../routes/Greenroom/Itemupload/Itemupload';
import Stuvip from '../../routes/Greenroom/Stuvip/Stuvip';
import Weekly from '../../routes/Greenroom/Weekly/Weekly';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default class Elayout extends Component {

    state = {
        student: [{
            title: '匿名投诉',
            url: '/home/complaint',
        }, {
            title: '技术问题',
            url: '/home/Technology'
        },
        {
            title: '项目上传',
            url: '/home/Itemupload'

        }, {
            title: 'VIP',
            url: '/home/Stuvip'
        }, {
            title: '学员周报',
            url: '/home/Weekly'
        }, {
            title: '我的资料',
            url: '/ppp'
        }, {
            title: '交费明细',
            url: '/ppp'
        }, {
            title: '参加考试',
            url: '/ooo'
        }, {
            title: '学员评价',
            url: '/fafa'
        }, {
            title: '教学测评',
            url: '/iii'
        }]
    }
    render() {
        return (
            <div style={{ height: '100%', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
                <Layout style={{ height: '100%' }}>
                    <Header className="header" style={{ background: '#428bca', height: '50px' }}>
                        <div className="logo" style={{ lineHeight: '50px' }}>
                            <img style={{ height: '50px' }} src="http://stu.1000phone.net/Public/assets/css/images/logo.png?1566207048" alt="" />
                        </div>

                    </Header>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['0']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span style={{ fontWeight: '800', color: '#2b7dbc', fontSize: '13px' }}>
                                            <Icon type="user" />
                                            学员后台
                                        </span>
                                    }
                                >
                                    {this.state.student.map((item, index) => {
                                        return (<Menu.Item key={index}>
                                            <Link to={item.url}>
                                                {item.title}
                                            </Link>
                                        </Menu.Item>)
                                    })}
                                    {/* <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item> */}
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="laptop" />
                                            学员考勤
                                        </span>
                                    }
                                >
                                    <Menu.Item key="10">学员请假</Menu.Item>
                                    <Menu.Item key="11">学员违纪</Menu.Item>

                                </SubMenu>

                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Switch>
                                    <Route path="/home/complaint" component={Complaint} />
                                    <Route path="/home/Technology" component={Technology} />
                                    <Route path="/home/Itemupload" component={Itemupload} />
                                    <Route path="/home/Stuvip" component={Stuvip} />
                                    <Route path="/home/Weekly" component={Weekly} />

                                </Switch>

                            </Content>
                        </Layout>
                    </Layout>
                </Layout>

            </div>
        )
    }
}