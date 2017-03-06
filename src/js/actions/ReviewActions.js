import dispatcher  from "../dispatcher";

export function createReview(review) {
    dispatcher.dispatch({
        type: "CREATE_REVIEW",
        review,
    });

}