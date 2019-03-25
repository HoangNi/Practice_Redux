import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            keyword: ''
        }
    }
    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }
    onSearch = () =>{
        this.props.onSearch(this.state.keyword);
    }
    render() {
        var {keyword} = this.state;
        return (
            <div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Please enter the content to search"
                    name="keyword" value={keyword} onChange={this.onChange} />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-light" onClick={this.onSearch} >Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch,props) =>{
    return {
        onSearch : (keyword) =>{
            dispatch(action.searchTask(keyword))
        }
    }
}
export default connect(null, mapDispatchToProps)(Search);