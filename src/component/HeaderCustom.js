/**
 * Created by liyinhua 2019/03/30
 */
import React from 'react';
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
import SiderCustom from './SiderCustom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends React.Component {
	constructor(props){
		super(props);
		this.state = {
	        user: '',
	        visible: false,
	    };
	}
    componentDidMount() {
    	
    };
    logout = () => {
    	console.log('退出登录');
        this.props.history.push('/Login');
    };
    popoverHide = () => {
        this.setState({
            visible: false,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    };
    render() {
        const { responsive, path } = this.props;
        return ( 
            <Header className="custom-theme header" style={{ background: '#fff', padding:'0 12px',}} >
                <Icon
                    className="header__trigger custom-trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                >
                    <Menu.Item key="1">
                        <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                            <Icon type="notification" />
                        </Badge>
                    </Menu.Item>
                    <SubMenu title={<span className="avatar"><img src="http://ww1.sinaimg.cn/thumb180/e242d7b4gw1f2svi8t97bj20hs0hs75d.jpg" alt="头像" /><i className="on bottom b-white" /></span>}>
                        <MenuItemGroup title="用户中心">
                            <Menu.Item key="setting:1">你好 - andy</Menu.Item>
                            <Menu.Item key="setting:2">个人信息</Menu.Item>
                            <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="设置中心">
                            <Menu.Item key="setting:3">个人设置</Menu.Item>
                            <Menu.Item key="setting:4">系统设置</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
            </Header>
        )
    }
}


export default withRouter(HeaderCustom);
