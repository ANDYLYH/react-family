import React from 'react';
import '!style-loader!css-loader!sass-loader!./loading.css';
export default class Loading extends React.Component {
	render(){
		return (
			<div className="loaderBox">
				<div className="loader">
					<div>l</div>
					<div>o</div>
					<div>a</div>
					<div>d</div>
					<div>i</div>
					<div>n</div>
					<div>g</div>
				</div>
			</div>
		)
	}
}
