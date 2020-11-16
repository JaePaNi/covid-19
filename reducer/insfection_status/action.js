import {infctionStatusApi} from "./api";
import {INFECTION_STATUS, INFECTION_STATUS_SUCCESS, INFECTION_STATUS_ERROR} from "../actionType";

export const infctionStatus = () => async (dispatch) => {
    const data = await infctionStatusApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;

    dispatch({type: INFECTION_STATUS});
    try {
        dispatch({type: INFECTION_STATUS_SUCCESS, payload});
    } catch (e) {
        dispatch({type: INFECTION_STATUS_ERROR, e});
    }
}