import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index'

class ItemList extends Component {
    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }
    onEditTask = () => {
        this.props.onEditTask(this.props.task);
        this.props.onOpenForm();
    }
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value="" />Checked
                  </label>
                </td>
                <td>{task.name}</td>
                <td>{task.sex}</td>
                <td>
                    <button type="button" className="btn btn-success mr-sm-2" onClick={this.onEditTask}>Update</button>
                    <button type="button" className="btn btn-secondary" onClick={this.onDelete}>Delete</button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteTask: (id) => {
            dispatch(action.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(action.closeForm())
        },
        onOpenForm: () => {
            dispatch(action.openForm())
        },
        onEditTask : (task) => {
            dispatch(action.editTask(task))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);