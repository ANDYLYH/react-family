import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Table, Icon,Pagination,message,Button,Modal,Input} from 'antd';
import {queryHorsemanInfo,editIsStop} from '../../common/service/horsemanManagement/horsemanInfo.js';
import mUTIL from '../../common/utils/utils.js';
import '!style-loader!css-loader!sass-loader!./list.scss';

class List extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			formData: {
				pageSize: 10,
				pageNum: 1,
				storeName: '',
				storeNo: '',
				userName: '',
				role: '',
				status: '',
				telPhone: ''
			},
			config:{
				pagination:false
			},
			tableData:[],
			total:0,
			flag:false
			
		}
	};
	componentDidMount(){ 
		const self = this;
//		mUTIL.getLocalStorage({
//			name: 'List',
//			success: function(obj) {
//				let data = Object.assign({}, self.state.formData, obj.data);
//				//setState是异步的
//				self.setState({
//				  formData: data
//				},()=>{
//					self.HorsemanInfo();
//				})
//			},
//			fail: function() {
//				self.HorsemanInfo();
//			}
//		})
		self.HorsemanInfo();
	}
	 componentWillReceiveProps(nextProps) {

           console.log(nextProps);

    }
	HorsemanInfo = () =>{
		const self = this;
		queryHorsemanInfo(this.state.formData).then((res)=>{
			self.setState({
				tableData:res.content,
				total:res.totalElements
			});
		}).catch((res)=>{
			message.error(res.message)
		});
		mUTIL.setLocalStorage('List', this.state.formData);
	}
	comfirmUpdata = (data) =>{
		const self = this;
		var _isStop = data.isStop == 1 ? 0 : 1;
		var _text = data.isStop == 1 ? '启用成功' : '停用成功';
		var _obj = {
			id: data.id,
			isStop: _isStop
		};
		Modal.confirm({
		    title: '操作提示',
		    content: '您确定停用/启用该用户吗?',
		    okText: '确定',
		    cancelText: '取消',
		    onOk:function(){
		    	self.editIsStop(_obj,_text);
		    }
		});
	}
	//更新状态
	editIsStop = (obj,_text) =>{
		editIsStop(obj).then((res)=>{
			message.success(_text);
			this.HorsemanInfo();
		}).catch((res)=>{
			message.error(res.message)
		})
	}
	//改变页码
	hanlePageNumChange = (_pageNum) =>{
		const self = this;
		let data = Object.assign({}, this.state.formData, { pageNum: _pageNum });
		//setState是异步的
		this.setState({
		  formData: data
		},()=>{
			self.HorsemanInfo();
		})
		//这里打印的信息,是state上一个状态的信息
//		console.log(this.state.formData);
	}
	//改变一页显示的条数
	onShowSizeChange = (current, pageSize) => {
		let data = Object.assign({}, this.state.formData, { pageSize: pageSize ,pageNum:1});
		this.setState({
		  formData: data
		},()=>{
			this.HorsemanInfo();
		})
	}
	onChangeFn = (e) =>{
		const self = this;
		let data = Object.assign({}, self.state.formData, {userName:e.target.value});
		//setState是异步的
		self.setState({
		  formData: data
		},()=>{
			self.HorsemanInfo();
		})
	}
	render(){
		const columns = [{
				title: '用户名',
				dataIndex: 'userName',
				key: 'userName',
				render: text => <a href="###">{text}</a>,
			}, {
				title: '手机号',
				dataIndex: 'telPhone',
				key: 'telPhone',
			}, {
				title: '角色',
				dataIndex: 'roleDesc',
				key: 'roleDesc',
			}, {
				title: '门店名称',
				dataIndex: 'storeName',
				key: 'storeName',
			}, {
				title: '新增时间',
				dataIndex: 'createTime',
				key: 'createTime',
			}, {
				title: '操作',
				key: 'action',
				render: (text, record) => (
					<span>
				      <Button type="primary">编辑</Button>
				      <span className="ant-divider" />
				      <Button type={record.isStop == 1 ? 'primary' : 'danger'} onClick={()=>this.comfirmUpdata(record)}>{record.isStop == 1 ? '启动' :"停用"}</Button>
				    </span>
				),
			}]; 
		var _userName = this.state.formData.userName;
		return (<div>
					<div className="searchFormBox">
						<div className="searchForm-Item">
							<Input size="large" placeholder="骑手名称" onChange={this.onChangeFn} value={_userName}/>
						</div>
						<div className="searchForm-btn">
							<Button size="large" type="primary" >查询</Button>
						</div>
				    </div>
					<Table {...this.state.config} columns={columns} dataSource={this.state.tableData} rowKey='id'/>
					<div className="pageContent">
						<Pagination showSizeChanger onChange={this.hanlePageNumChange} onShowSizeChange={this.onShowSizeChange} defaultCurrent={this.state.formData.pageNum} total={this.state.total} />
					</div>
					
				</div>
				)
	}
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};
export default connect(mapStateToProps)(List);