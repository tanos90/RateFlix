import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ReviewStore extends EventEmitter {
    constructor(){
        super()
        this.reviews = [

        ];

    }

    getAll =  () => this.reviews;

    createReview (review) {
        const self = this;
        self.reviews.push(review);
        self.emit("change");
    }

    handleActions(action){
        const self = this;
        switch(action.type){
            case "CREATE_REVIEW": {
                self.createReview(action.review);
            }
        }
    }

}


const reviewStore = new ReviewStore;
dispatcher.register(reviewStore.handleActions.bind(reviewStore));
export default reviewStore;