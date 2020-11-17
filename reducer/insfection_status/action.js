import { infctionStatusApi, infctionStatusOneApi } from "./api";
import { INFECTION_STATUS, INFECTION_STATUS_SUCCESS, INFECTION_STATUS_ERROR } from "../actionType";
import { INFECTION_STATUS_ONE, INFECTION_STATUS_ONE_SUCCESS, INFECTION_STATUS_ONE_ERROR } from '../actionType';

export const infctionStatusAction = () => async (dispatch) => {
    const data = await infctionStatusApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;

    dispatch({ type: INFECTION_STATUS });
    try {
        dispatch({ type: INFECTION_STATUS_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: INFECTION_STATUS_ERROR, e });
    }
}

export const infctionStatusOneAction = () => async (dispatch) => {
    const data = await infctionStatusOneApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;

    dispatch({ type: INFECTION_STATUS_ONE });
    try {
        dispatch({ type: INFECTION_STATUS_ONE_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: INFECTION_STATUS_ONE_ERROR, e });
    }
}