import React, { Component } from 'react';
import ItemList from './ItemList';
import { connect } from 'react-redux';

class List extends Component {
    render() {
        var { tasks, keyword, sort } = this.props;
        
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });

        if (sort.by === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sort.value;
                else if (a.name < b.name) return -sort.value;
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if (a.sex > b.sex) return -sort.value;
                else if (a.sex < b.sex) return sort.value;
                else return 0;
            });
        }
        var elTasks = tasks.map((task, index) => {
            return <ItemList key={task.id} index={index} task={task}
                onUpdate={this.props.onUpdate} />
        });


        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>STT</th>
                            <th>Status</th>
                            <th>Name</th>
                            <th>Sex</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elTasks}
                    </tbody>
                </table>
            </div>
        );
    }
}

var mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        keyword: state.search,
        sort: state.sort
    }
}

export default connect(mapStateToProps, null)(List);