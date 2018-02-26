import React, { Component } from 'react';
import { connect } from "react-redux";
import FrontLayout from '../../Layouts/FrontLayout';
import FeedBodyComponent from '../../Components/feed/FeedBodyComponent';
import SideBarComponent from '../../Components/Sidebars/SideBarComponent';
import SecondSideBarComponent from '../../Components/Sidebars/SecondSideBarComponent';

const $ = window.jQuery;

class userFeedContainer extends Component {

    componentWillMount() {
        const body = $('body');
        body.removeClass('navbar-bottom sidebar-xs');
    }

    componentDidMount() {
        const body = $('body');
        body.addClass('navbar-bottom sidebar-xs');
    }

    render() {
        return (
            <FrontLayout>
                <SideBarComponent />
                <SecondSideBarComponent />
                <FeedBodyComponent />
            </FrontLayout>
        );
    }
}

export default connect(null)(userFeedContainer);
