import React,{Component} from 'react';
import {connect} from 'react-redux';
import '!style-loader!css-loader!sass-loader!./login.scss';
import {login} from '../../common/service/login/login.js';
class LoginPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			passWord:'',
			phone:''
		}
	};
	handlePassword = (e) => {
		this.setState({passWord:e.target.value})
	}
	handlePhone = (e) =>{
		this.setState({phone:e.target.value})
	}
	comfirmLogin = () => {
		const {history } = this.props;
        const data = {
          accountNo: this.state.phone,
          password: this.state.passWord
        };
        login(data).then((res) => {
        	history.push('/');
        	localStorage.setItem('code', res.accessToken);
        }).catch((err) => {
        	
        });
      
	}
	render(){
		var pass = this.state.passWord;
		var phone = this.state.phone;
		return (
			<div>
				<div className="signIn_Content">
					<div className="signIn_bg"></div>
					<div className="signIn_ContentMain">
						<div className="signIn_form">
							<div className="signIn_formMain">
								<div className="signIn_formMain_head">
									密码登录
								</div>
								<div className="signIn_formMain_input">
									<input type="text" placeholder="请输入手机号码"  onChange={this.handlePhone} value={phone} className="mobile"/>
								</div>
								<div className="signIn_formMain_input">
									<input type="password" placeholder="请输入账号密码" onChange={this.handlePassword} value={pass} className="password"/>
								</div>
								<div className="signIn_formMain_input">
									<button className="confirm_login" onClick={this.comfirmLogin} >登录</button>
								</div>
								<div className="signIn_formMain_tips">
									<a href="javascript:void(0)">忘记密码</a>
								</div>
							</div>
							<div className="signIn_form_footer">
								<span>新用户注册：如果您没有账号请先 </span>
								<a href="javascript:void(0)" className="go_zhuce">注册</a>
							</div>
						</div>
					</div>
				</div>
				<div className="signIn_footer">
					<div className="signIn_footerText">这里可以填版权信息</div>
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
export default connect(mapStateToProps)(LoginPage);