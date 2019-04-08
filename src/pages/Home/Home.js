import React,{Component} from 'react';
import '!style-loader!css-loader!sass-loader!./Home.scss';
import '!style-loader!css-loader!sass-loader!./reset.css';
////菜单
import SiderMenu from '../../component/SiderCustom';
import HeaderCustom from '../../component/HeaderCustom';
import HomeRouter from '../../router/homeRouter'
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Home extends React.Component {
  state = {
    collapsed: false,
  };
  componentWillMount(){
		if(!localStorage.getItem('code')){
			this.props.history.push('/Login');
		}
	}
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (   
      <Layout>
        <SiderMenu collapsed={this.state.collapsed}/>
        <Layout>
          <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
          <Content style={{ margin: '10px', padding: 10, background: '#fff', minHeight: 280 }}>
            <HomeRouter/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Home