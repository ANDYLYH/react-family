import React,{Component} from 'react';
import {connect} from 'react-redux';
class List extends React.Component {
	constructor(props){
		super(props);
	};
	goPage = () => {
		this.props.history.push('/Home/Counter');
	}
	render(){
		return (
			<div>
				这是列表页,{this.props.counter.count}
				<button onClick={this.goPage}>跳转到结算页</button>
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