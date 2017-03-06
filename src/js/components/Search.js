import React from 'react';
import { Link, browserHistory, Router } from 'react-router';
import * as MediaActions from "../actions/MediaActions";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: 'search'
        };
    }

    navigate(e) {
        const {value} = e.target;
        this.getMovieByTitle(value);     
    }

    getMovieByTitle(title) {
        MediaActions.getMediaByText(title);
    }

    render() {
        const style = {
            "max-width":"500px"
        };
        return (
            <div>
                <h4>Movie By Title</h4>
                <div class="input-group" style={style}>
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
}
