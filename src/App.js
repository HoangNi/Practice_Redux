import React, { Component } from 'react';
import './App.css';
import FormAdd from './components/FormAdd';
import Control from './components/Control';
import List from './components/List';
import { connect } from 'react-redux';
import * as action from './actions/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'name',
      sortValue: 1
    }
  }
  onToggleForm = () => {
    var{itemEditing} =this.props;
    if(itemEditing && itemEditing.id !==''){
      this.props.onOpenForm();
    }else{
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id:'',
      name: '',
      sex:1
    });
  }
  render() {
    return (
      <div className="container mt-30" >
        <h1>To Do List</h1>
        <button type="button" className="btn btn-primary "
          onClick={this.onToggleForm}>Add Users</button>
        <div className="formAdd mt-30">
          <FormAdd />
        </div>
        <hr></hr>
        <div className="control">
          <Control/>
        </div>
        <div className="listUser mt-30">
          <List />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(action.toggleForm())
    },
    onClearTask: (task) => {
      dispatch(action.editTask(task))
    },
    onOpenForm: () => {
        dispatch(action.openForm())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
