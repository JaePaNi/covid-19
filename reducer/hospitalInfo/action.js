import {hospitalInfoApi} from "./api";
import {HOSPITAL_STATUS, HOSPITAL_STATUS_SUCCESS, HOSPITAL_STATUS_ERROR} from "../actionType";

export const hospitalInfoAction = () => async (dispatch) => {
    const data = await hospitalInfoApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;

    console.log('payload :: ', payload);

    dispatch({type: HOSPITAL_STATUS});
    try {
        dispatch({type: HOSPITAL_STATUS_SUCCESS, payload});
    } catch (e) {
        dispatch({type: HOSPITAL_STATUS_ERROR, e});
    }
}