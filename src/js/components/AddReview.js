import React from 'react';
import Search from './Search';
import MediaStore from "../stores/MediaStore";
import Movie from './Movie';
import ReviewStore from "../stores/ReviewStore";
import * as ReviewActions from "../actions/ReviewActions";
import dispatcher from "../dispatcher";

export default class AddReview extends React.Component {

    constructor (props) {
        super(props);
        this.getMovie = this.getMovie.bind(this);
        this.state = {movie : {title: ''}, showMovie: false, reviewText:""}
    }

    componentWillMount () {
        MediaStore.on("received", this.getMovie);
    }

    componentWillUnmount() {
        MediaStore.removeListener("received", this.getMovie);
    }

    getMovie(){
        this.setState({movie : MediaStore.getResponse(), showMovie: true});
    }

    addReview(event){
        let {movie} = this.state;
        movie.reviewText = this.state.reviewText;
        ReviewActions.createReview(movie);
        this.resetAddReview();
        event.preventDefault();
    }

    resetAddReview(){
        this.setState({showMovie: false});
        this.props.toggleAddReview();
    }

    handleText(e){
        const {value} = e.target;
        this.setState({reviewText:value});
    }

    render() {
        return (
            <form class="form-horizontal" onSubmit={this.addReview.bind(this)}>
                <div class="well">
                    <div class="form-group">
                        <Search class="form-control" />
                    </div>
                    { 
                        this.state.showMovie ? 
                        <div class="form-group">
                            <Movie movie={this.state.movie}/> 
                            
                            <div class="form-group col-md-12">
                                <label for="review">Review:</label>
                                <textarea value={this.props.ReviewText} 
                                        onBlur={this.handleText.bind(this)} 
                                        name="review" 
                                        class="form-control" 
                                        rows="5" 
                                        id="review">
                                </textarea>
                                <button type="submit"  class="btn btn-primary">Submit</button>   
                            </div>
                        </div>
                        : null    
                    }
                    
                    
                </div>
            </form>
        )
    }

}
