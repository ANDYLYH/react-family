import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
export default class Nav extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			navIndex:0,
			navFist:'',
			navSecond:''
		}
	}
	componentWillMount(){
		console.log('componentWillMount')
		const self = this;
		this.props.menus.forEach(function(item,index){
			item.subs.forEach(function(data){
				if(self.props.history.location.pathname == data.key){
					self.setState({navFist: data.pid});
					self.setState({navSecond: data.id});
					self.setState({navIndex: index});
				}
			})
		});
		
	}
	componentWillUpdate(){
//		console.log('componentWillUpdate',this.props)
//		const self = this;
//		this.props.menus.forEach(function(item,index){
//			item.subs.forEach(function(data){
//				if(self.props.history.location.pathname == data.key){
//					self.setState({navFist: data.pid});
//					self.setState({navSecond: data.id});
//					self.setState({navIndex: index});
//				}
//			})
//		});
		this.props.history.listen((evt)=>{
			console.log(evt)
		})
	}
	
	setCurrentNav(idx){
		if(this.props.menus[idx].subs && this.state.navFist != this.props.menus[idx].subs[0].pid){
			this.setState({navIndex: idx});
			this.setState({navFist: this.props.menus[idx].subs[0].pid});
			this.setState({navSecond: this.props.menus[idx].subs[0].id});
			this.props.history.push(this.props.menus[idx].subs[0].key);
		}
	} 
	changePageUrl(data){
		this.setState({navFist: data.pid});
		this.setState({navSecond: data.id});
	}
	render() {
		const menus = this.props.menus;
		const self = this;
		return(
				<div className="nav">
					<div className="navMain">
						 <div className="nav_img">
							<img src="/logo.jpg"/>
						 </div>
						 <ul className="navlist" >   
							{menus && menus.map((item,idx) => 
					            <li className={['iconfont','navlist-item',(this.state.navFist == item.id ? 'active' : '')].join(' ')} onClick={self.setCurrentNav.bind(this,idx)}  key={item.key}>
									<a target="_blank" className="toIm"></a>
									{item.title}
								</li>
					        )}
						</ul>
					</div>
					<div className="menu">
						<ul>
							{menus && menus[self.state.navIndex].subs.map(item => 
					            <li key={item.key} onClick={this.changePageUrl.bind(this,item)}>
									<Link className={[(this.state.navSecond == item.id ? 'router-active' : '')]} to={(item.route || item.key)} key={item.key} replace>  
										<span className="nav-text">{item.title}</span>
							        </Link>
								</li>
					        )}
						</ul>
					</div>
				</div>
		)
	}
}