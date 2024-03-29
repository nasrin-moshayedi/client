import {SIGN_OUT, SIGN_IN} from "./../actions/types";
const INITAL_STATE = {
    isSignedIN: null, //null state use objact instead of null  
    userId: null
}

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN : 
            return { ...state, isSignedIn: true, userId: action.payload};
        case SIGN_OUT : 
            return { ...state, isSignedIn: false, userId: null};
        default: 
            return state
    }
};