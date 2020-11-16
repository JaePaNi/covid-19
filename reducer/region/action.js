import {regionApi} from "./api";
import {REGION_STATUS, REGION_STATUS_SUCCESS, REGION_STATUS_ERROR} from "../actionType";

export const region = () => async (dispatch) => {
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