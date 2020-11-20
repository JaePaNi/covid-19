import {regionApi, regionTodayApi} from "./api";
import {REGION_STATUS, REGION_STATUS_SUCCESS, REGION_STATUS_ERROR, REGION_STATUS_TODAY_ERROR} from "../actionType";
import {REGION_STATUS_TODAY, REGION_STATUS_TODAY_SUCCESS, REGION_STATUS_TODAY_ERRORTATUS_ERROR} from "../actionType";

export const regionAction = () => async (dispatch) => {
    const data = await regionApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;

    dispatch({type: REGION_STATUS});
    try {
        dispatch({type: REGION_STATUS_SUCCESS, payload});
    } catch (e) {
        dispatch({type: REGION_STATUS_ERROR, e});
    }
}

export const regionActionToday = () => async (dispatch) => {
    const data = await regionTodayApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;

    dispatch({type: REGION_STATUS_TODAY});
    try {
        dispatch({type: REGION_STATUS_TODAY_SUCCESS, payload});
    } catch (e) {
        dispatch({type: REGION_STATUS_TODAY_ERROR, e});
    }
}