import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import "./Header.css";

const Header = () => {
	return (
		<div className='ui secondary pointing menu'>
			<div className='headline'>
				Welcome to Streamify
				<div className='sub-headline'>
					Below you can manage your streams and watch others!
				</div>
			</div>

			<div className='navigation'>
				<Link to='/' className='streams-btn'>
					Go to all Streams
				</Link>
				<GoogleAuth />
			</div>
		</div>
	);
};

export default Header;
