import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Table, Icon,Pagination,message,Button,Modal} from 'antd';
import {queryHorsemanInfo} from '../../common/service/horsemanManagement/horsemanInfo.js';
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
		}
	};
	goPage = () => {
		this.props.history.push('/Home/Counter');
	}
	componentDidMount(){ 
		this.HorsemanInfo();
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
		})
	}
	deleteInfo = (_id) =>{
		Modal.confirm({
		    title: '删除',
		    content: '确定删除此条信息吗?',
		    okText: '确定',
		    cancelText: '取消',
		    onOk:function(){
		    	console.log('回调')
		    }
		});
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
				      <Button type="primary" onClick={()=>this.deleteInfo(record.id)}>删除</Button>
				    </span>
				),
			}];
		return (
			<div>
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