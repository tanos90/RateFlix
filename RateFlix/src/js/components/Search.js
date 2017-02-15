import React from 'react';
import { Link, browserHistory, Router } from 'react-router';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: 'search'
        };
    }

    navigate(e) {
        const {value} = e.target;
        this.props.history.push(`movie/${value}`);
    }

    render() {
        return (
            <div class="well">
                <h4>Movie By Title</h4>
                <div class="input-group">
                    <input type="text" class="form-control" onBlur = { this.navigate.bind(this) }/>
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </div>
        );
    }
};
