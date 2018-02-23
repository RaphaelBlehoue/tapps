import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HocLoading extends Component {
    render() {
        return (
            <div>
               {this.props.children}
            </div>
        );
    }
}

HocLoading.propTypes = {
   children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default connect(null)(HocLoading);