import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
import "./StreamList.css";

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderAdmin(stream) {
		if (stream.userId === this.props.currentUserId) {
			return (
				<div className='right floated content'>
					<Link to={`/streams/edit/${stream.id}`} className='admin-btn'>
						Edit
					</Link>
					<Link to={`/streams/delete/${stream.id}`} className='admin-btn'>
						Delete
					</Link>
				</div>
			);
		}
	}
	renderList() {
		return this.props.streams.map((stream) => {
			return (
				<div className='item' key={stream.id}>
					<div className='content'>
						<Link to={`streams/${stream.id}`} className='header'>
							<div className='wrapper-title'>
								<div className='stream-box-title'>{stream.title}</div>
							</div>
						</Link>
						<div className='description'>{stream.description}</div>
					</div>
					{this.renderAdmin(stream)}
				</div>
			);
		});
	}
	renderCreate() {
		if (this.props.isSignedIn) {
			return (
				<div style={{ textAlign: "right" }} className='create-stream'>
					<Link to='/streams/new' className='create-btn'>
						Create Stream
					</Link>
				</div>
			);
		}
	}
	render() {
		return (
			<>
				<div className='streams'>
					<h3>Streams {`(${Object.keys(this.props.streams).length})`}</h3>
					<div className='stream-boxes'>{this.renderList()}</div>
				</div>
				{this.renderCreate()}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
