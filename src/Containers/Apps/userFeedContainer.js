import React, { Component } from 'react';
import { connect } from "react-redux";
import { 
    CardContainer,
    SlideSwipeableComponent,
    SideBarComponent,
    SecondSideBarComponent
} from '../../Components';
import FeedBodyComponent from '../../Components/feed/FeedBodyComponent';

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
            <div>
                <SlideSwipeableComponent/>
                <CardContainer>
                    <SideBarComponent />
                    <SecondSideBarComponent />
                    <FeedBodyComponent />
                </CardContainer>
            </div>
        );
    }
}

export default connect(null)(userFeedContainer);
