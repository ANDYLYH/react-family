import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "../../redux/actions/userInfo";

class UserInfo extends Component {

    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
            <div>
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <h1>用户信息：</h1>
                                    <p>用户名：{userInfo.name}</p>
                                    <p>介绍：{userInfo.intro}</p>
                                </div>
                        )
                }
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
};
export default connect(mapStateToProps, {getUserInfo})(UserInfo);