import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { postEvent } from '../actions';
import { Link } from 'react-router-dom';


class EventsNew extends Component {

    render() {
        return (
            <React.Fragment>
                <div>foo</div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({ events: state.events });
// const mapDispatchProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// });

// const mapDispatchToProps = ({ postEvents });

export default connect(null, null)(EventsNew);
