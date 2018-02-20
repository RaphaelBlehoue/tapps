import React from 'react';
import { connect } from "react-redux";
import FrontLayout from '../../Layouts/FrontLayout';

const ProfileContainer = () => (
	<FrontLayout>
		<h2>{this.props.users.email}</h2>
	</FrontLayout>
);

const mapStateToProps = (state) => {
    return {
        users: state.auth
    }
}

export default connect(mapStateToProps)(ProfileContainer);

