import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from '../modules/Pagination';



const styles = {
	root: {
		position: 'relative',
	},
	slide: {
		padding: 15,
		minHeight: 300,
		color: '#fff',
	},
	slide1: {
		background: '#FEA900',
	},
	slide2: {
		background: '#B3DC4A',
	},
	slide3: {
		background: '#6AC0FF',
	},
};
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


class SlideSwipeableComponent  extends Component {

    state = {
        index: 0
    };

    handleChangeIndex = (index) => {
        this.setState({
            index    
        });
    };

    render () {
        const { index } = this.state;

        return (
				<div style={styles.root}>
					<AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
						<div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
						<div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
						<div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
                    </AutoPlaySwipeableViews>
                    <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
				</div>
        );
    }
}

export default SlideSwipeableComponent;
