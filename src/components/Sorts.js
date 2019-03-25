import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index'

class Sorts extends Component {
    onClick = (sortBy, sortValue) => {
        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
    }

    render() {
        return (
            <div>
                <div className="dropdown">
                    <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                        Sorts
                </button>
                    <div className="dropdown-menu">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a className=
                                {(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'dropdown-item actice' : 'dropdown-item disabled'}
                            >Name A-Z</a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a className=
                                {(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'dropdown-item actice' : 'dropdown-item disabled'}
                            >Name Z-A</a>
                        </li>
                        <li onClick={() => this.onClick('sex', 1)}>
                            <a className=
                                {(this.props.sort.by === 'sex' && this.props.sort.value === 1) ? 'dropdown-item actice' : 'dropdown-item disabled'}
                            >Male</a>
                        </li>
                        <li onClick={() => this.onClick('sex', -1)}>
                            <a className=
                                {(this.props.sort.by === 'sex' && this.props.sort.value === -1) ? 'dropdown-item actice' : 'dropdown-item disabled'}
                            >Female</a>
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        sort : state.sort
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(action.sortTask(sort))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sorts);