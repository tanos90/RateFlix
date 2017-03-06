import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class MediaStore extends EventEmitter {
    constructor(){
        super()
        this.response = {};
    }

    getResponse = () => this.response;
    
    getMediaByText (response) {
        const self = this;
        self.response = response;
        self.emit("received");
    }

    handleActions(action){
        const self = this;
        switch(action.type){
            case "RECEIVE_MEDIA": {
                self.getMediaByText(action.response);
            }
        }
    }
}


const mediaStore = new MediaStore;
dispatcher.register(mediaStore.handleActions.bind(mediaStore));
export default mediaStore;