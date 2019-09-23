import {
    SIGN_IN,
    SIGN_OUT, 
    CREATE_STREAM, 
    FETCH_STREAM, 
    FETCH_STREAMS, 
    EDIT_STREAM, 
    DELETE_STREAM} from "./types";
import streams from "../apis/streams";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async dispatch => { 
    streams.post("/streams", formValues);
    dispatch({type: CREATE_STREAM, payload: streams.data})
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/sreams');

    dispatch({tyle: FETCH_STREAMS, payload: response.data});
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/sreams/${id}`);

    dispatch({tyle: FETCH_STREAM, payload: response.data});
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/sreams/${id}`);

    dispatch({tyle: DELETE_STREAM, payload: id});
};

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/sreams/${id}`, formValues);

    dispatch({tyle: EDIT_STREAM, payload: response.data});
};