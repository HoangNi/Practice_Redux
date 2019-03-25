import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as action from './../actions/index'

class FormAdd extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:'',
            name: '',
            sex: 1
        }
    }
    
    componentWillMount(){
        if(this.props.itemEditing && this.props.itemEditing.id !==null){
            this.setState({
                id : this.props.itemEditing.id,
                name : this.props.itemEditing.name,
                sex : this.props.itemEditing.sex
            });
        } else{
            this.onClear();
        }
    }
    componentWillReceiveProps(nextprops){
        if(nextprops && nextprops.itemEditing){
            this.setState({
                id : nextprops.itemEditing.id,
                name : nextprops.itemEditing.name,
                sex : nextprops.itemEditing.sex
            });
        } else{
            this.onClear();
        }
    }
    onChange = (event) =>{
        var target = event.target;
        var value = target.value;
        var name = target.name;
        if(name==='sex'){
            value=target.value === "1" ? 1 :0;
        }
        this.setState({
            [name]: value
        });
    }
    onSave = (event) =>{
        event.preventDefault();
        this.props.onSaveTask(this.state);
        this.onClear();
    }
    onClear = () =>{
        this.setState({
            name:''
        });
    }
    
    
    render() {
        var {id} = this.state;
        if(!this.props.isDisplayForm) return '';
        return (
            <div>
                <form className="form-inline mr-sm-2" onSubmit={this.onSave}>
                    <h4 className= "mr-5">
                    {id !== '' ? 'Update User' : 'Add user'}
                    </h4>
                    <label forhtml="name" className="mr-sm-2">Your Name:</label>
                    <input type="text" className="form-control" id="email" 
                    name="name" value={this.state.name} onChange={this.onChange} />
                    <div className="form-group ml-10">
                        <label forhtml="sel1" className="mr-sm-2">Sex:</label>
                        <select className="form-control mr-sm-4 " id="sel1" name="sex"
                        value={this.state.sex} onChange={this.onChange}>
                            <option value={1}>Male</option>
                            <option value={0}>Female</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-info mr-sm-2"> {id !== '' ? 'Update' : 'Add'}</button>
                    <button type="button" className="btn btn-danger mr-sm-2" onClick={this.onClear}>Cancel</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state=>{
    return{
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
}
const mapDispatchToprops = (dispatch,props) =>{
    return{
        onSaveTask :(task)=>{
            dispatch(action.saveTask(task));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToprops)(FormAdd);