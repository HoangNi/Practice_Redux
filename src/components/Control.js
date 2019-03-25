import React, { Component } from 'react';
import Search from './Search';
import Sorts from './Sorts';

class Control extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-10">
                        <Search />
                    </div>
                    <div className="col-lg-2">
                        <Sorts />
                    </div>
                </div>
            </div>
        );
    }
}

export default Control;