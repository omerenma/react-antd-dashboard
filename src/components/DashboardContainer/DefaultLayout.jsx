import React, { Component } from 'react';
import {Layout, Menu, Avatar, Breadcrumb} from 'antd'
import {User} from '../../icons/icons'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    SettingOutlined
  } from '@ant-design/icons';

  const { Header, Sider, Content } = Layout;
  const {SubMenu} = Menu
  


class DefaultLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed:false
        }
    }
    toggle = () => {
        this.setState({collapsed:!this.state.collapsed})
    }
    render() {
        return (
            <div>
                <Layout>
                    <Sider 
                        className="sider"
                        trigger={null}
                        collapsible collapsed={this.state.collapsed} 
                        theme="light"
                        
                        >
                        {/* <div className="logo" /> */}
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                            style={{height:'100%'}}
                        >
                            <SubMenu key="sub1" icon={<SettingOutlined />} title="subnav 1">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>

                            <SubMenu key="2" icon={<UserOutlined />} title="subnav 1">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>
                        </Menu>
                      
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="header" style={{paddin:0}}>
                            <Avatar src={<User />} style={{float:'right', marginTop:15}}/>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                            })}
                        </Header>
                        <Content
                        className="site-layout-background"
                        style={{
                        //   margin: '24px 16px',
                        //   padding: 24,
                        //   minHeight: 280,
                        height:'100vh'
                        }}
                        >
                            Content
                        </Content>

                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default DefaultLayout;
