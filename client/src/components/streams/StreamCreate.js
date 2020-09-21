import React from "react";
import { connect } from "react-redux";
import { createStream, fetchStreams } from "../../actions";
import StreamForm from "./StreamForm";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import history from "../../history";

class StreamCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	};

	renderActions() {
		return (
			<Link to='/' className='ui button blue'>
				Back
			</Link>
		);
	}
	renderForm() {
		if (Object.keys(this.props.streams).length < 8) {
			return <StreamForm onSubmit={this.onSubmit} />;
		}
		return (
			<Modal
				title='Oops!'
				content='Seems like the streams limits has been reached (8)'
				actions={this.renderActions()}
				onDismiss={() => history.push("/")}
			/>
		);
	}

	render() {
		return (
			<div>
				<h3>Create Stream</h3>
				{this.renderForm()}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return { streams: Object.values(state.streams) };
};
export default connect(mapStateToProps, { fetchStreams, createStream })(
	StreamCreate
);
