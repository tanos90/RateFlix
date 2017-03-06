import React from 'react';
import AddReview from './AddReview';
import Movie from './Movie';
import ReviewStore from "../stores/ReviewStore";
import styled from 'styled-components';


export default class MyReviews extends React.Component {
    constructor() {
        super();
        this.getReviews = this.getReviews.bind(this);
        this.state = {
            showReviewForm: false,
            reviews: ReviewStore.getAll()
        };
    }

    componentWillMount () {
        ReviewStore.on("change", this.getReviews);
    }

    componentWillUnmount(){
        ReviewStore.removeListener("change",this.getReviews);
    }

    getReviews(){
        this.setState({
            reviews : ReviewStore.getAll()
        })
    }

    toggleAddReview() {
        this.setState({showReviewForm: !this.state.showReviewForm});
    }


    
    render() {
        const {reviews} = this.state;

        const addReviewStyle = { 
            "margin":"10px"
        };
        const posts = reviews.map((review)=> 
            <div  class="col-md-12 well" key={review.Title}>
                <Movie movie={review}/> 
                <label for="review">Review:</label>
                <p name="review">{review.reviewText}</p>
            </div>
        );

        return (
            <div class="container">
                <div class="col-md-12">
                    <h2>My Reviews</h2>
                    <button class="btn" onClick={this.toggleAddReview.bind(this)}  style={addReviewStyle} >Add new review</button>
                    { this.state.showReviewForm ? <AddReview toggleAddReview={this.toggleAddReview.bind(this)} /> : null }
                </div>

                {posts}
            </div>
        )
    }

}

const Image = styled.img`
  width : 15%;
  margin: 5px;
`;

