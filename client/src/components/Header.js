import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import GoogleAuth from "./GoogleAuth";
import "./Header.css";

const Header = (props) => {
	const renderWelcome = () => {
		if (props.isSignedIn) {
			return `Hi ${props.username.split(" ")[0]}`;
		}
		return "Welcome to Streamify";
	};
	return (
		<div className='ui secondary pointing menu'>
			<div className='headline'>
				{renderWelcome()}
				<div className='sub-headline'>
					Below you can manage your streams and watch others!
				</div>
			</div>

			<div className='navigation'>
				<Link to='/' className='streams-btn'>
					Current Streams
				</Link>
				<GoogleAuth />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		username: state.auth.username,
		isSignedIn: state.auth.isSignedIn,
	};
};
export default connect(mapStateToProps, {})(Header);
