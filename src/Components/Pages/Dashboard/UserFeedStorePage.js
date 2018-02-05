import React, { Component } from 'react';
import $ from 'jquery/dist/jquery.min';
import FrontLayout from '../../Layouts/FrontLayout';
import ContainerSideBarComponent from '../../WidgetComponents/ContainerSideBarComponent';
import ContainerSideBarComponentSecond from '../../WidgetComponents/ContainerSideBarComponentSecond';
import ContainerBodyFil from '../../WidgetComponents/ContainerBodyFil';

class UserFeedStorePage extends Component {

	componentWillMount() {
		const body = $('body');
		body.removeClass('navbar-bottom sidebar-xs');
	}

	componentDidMount() {
		const body = $('body');
		body.addClass('navbar-bottom sidebar-xs');
	}

	render() {
		return <div>
				<FrontLayout>
					<ContainerSideBarComponent />
					<ContainerSideBarComponentSecond />
					<ContainerBodyFil />
				</FrontLayout>
			</div>;
	}
}

export default UserFeedStorePage;

