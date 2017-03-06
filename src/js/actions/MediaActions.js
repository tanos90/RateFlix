import dispatcher  from "../dispatcher";

export function getMediaByText(mediaTxt) {
    dispatcher.dispatch({
        type: "FETCH_MEDIA",
        mediaTxt
    });
    fetch(`https://www.omdbapi.com/?t=$${mediaTxt}&plot=short&r=json`)
        .then(function(response) {
            response.json()
                .then(res => {
                    dispatcher.dispatch({type:"RECEIVE_MEDIA", response: res})
                }
                );
        });

}