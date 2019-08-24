import React, { Component } from 'react'
import { Route, Switch, Link } from 'dva/router';


import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Popconfirm, message } from 'antd';
import { connect } from 'dva';


import Complaint from '../../routes/Greenroom/Complain/Complain';
import Technology from '../../routes/Greenroom/Technology/Technology';
import Itemupload from '../../routes/Greenroom/Itemupload/Itemupload';
import Stuvip from '../../routes/Greenroom/Stuvip/Stuvip';
import Weekly from '../../routes/Greenroom/Weekly/Weekly';
import Moneydetail from '../../routes/Greenroom/Moneydetail/Moneydetail';
import Index from '../../routes/Greenroom/Index/Index';
import Exam from '../../routes/Greenroom/Exam/Exam';
import Discipline from '../../routes/Checking/Discipline/Discipline';
import Leave from '../../routes/Checking/Leave/Leave';
import Evaluate from '../../routes/Greenroom/Evaluate/Evaluate';
import Inquiry from '../../routes/Greenroom/Inquiry/Inquiry'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const routes = [

    {
        path: 'home',
        breadcrumbName: 'home',

    }, {
        path: 'Complaint',
        breadcrumbName: 'Complaint',
    }
]



class Elayout extends Component {

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
            url: '/home/Index'
        }, {
            title: '交费明细',
            url: '/home/Moneydetail'
        }, {
            title: '参加考试',
            url: '/home/Exam'
        }, {
            title: '学员评价',
            url: '/home/Evaluate'
        }, {
            title: '教学测评',
            url: '/home/Inquiry'
        }]
    }
    confirm() {
        console.log(this);
        message.info('已退出登录');

        this.props.history.push("/login");
    }


    itemRender(route, params, routes, paths) {
        // const last = routes.indexOf(route) === routes.length - 1;
        return <span>{route.breadcrumbName}</span>

    }

   
    render() {
        return (
            <div style={{ height: '100%', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
                <Layout style={{ height: '100%', overflow: 'auto' }}>
                    <Header className="header" style={{ background: '#428bca', height: '50px' }}>
                        <div className="logo" style={{ lineHeight: '50px', float: 'left' }}>
                            <img style={{ height: '50px' }} src="http://stu.1000phone.net/Public/assets/css/images/logo.png?1566207048" alt="" />
                        </div>
                        <Popconfirm placement="bottom" title="确认退出登录？" onConfirm={this.confirm.bind(this)} okText="确定" cancelText="取消" >
                            <a href="" style={{ float: 'right', color: '#fff', lineHeight: '50px' }}>

                                huahua ▼</a>
                        </Popconfirm>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['5']}
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
                                        </Menu.Item >)
                                    })}
                                    {/* <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item> */}
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span style={{ fontWeight: '800', color: '#2b7dbc', fontSize: '13px' }}>
                                            <Icon type="barcode" />
                                            学员考勤
                                        </span>
                                    }
                                >
                                    <Menu.Item key="10">
                                        <Link to={'/home/Leave'}>学员请假</Link>

                                    </Menu.Item>
                                    <Menu.Item key="11"> <Link to={'/home/Discipline'}>学员违纪</Link></Menu.Item>
                                </SubMenu>

                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }} itemRender={this.itemRender} routes={routes} >
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>complaint</Breadcrumb.Item>

                            </Breadcrumb>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                    overflow: 'auto'
                                }}
                            >


                                <Switch>
                                    <Route path="/home/complaint" component={Complaint} />
                                    <Route path="/home/Technology" component={Technology} />
                                    <Route path="/home/Itemupload" component={Itemupload} />
                                    <Route path="/home/Stuvip" component={Stuvip} />
                                    <Route path="/home/Weekly" component={Weekly} />
                                    <Route path="/home/Moneydetail" component={Moneydetail} />
                                    <Route path="/home/Index" component={Index} />
                                    <Route path="/home/Exam" component={Exam} />
                                    <Route path="/home/Discipline" component={Discipline} />
                                    <Route path="/home/Leave" component={Leave} />
                                    <Route path="/home/Evaluate" component={Evaluate} />
                                    <Route path="/home/Inquiry" component={Inquiry} />

                                </Switch>

                            </Content>
                        </Layout>
                    </Layout>
                </Layout>

            </div>
        )
    }
}

export default connect(({ products }) => ({
    products,
}))(Elayout)