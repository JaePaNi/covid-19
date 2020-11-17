import {ageGenderApi} from "./api";
import {AGEGENDER_STATUS, AGEGENDER_STATUS_SUCCESS, AGEGENDER_STATUS_ERROR} from "../actionType";

export const ageGenderAction = () => async (dispatch) => {
    const data = await ageGenderApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;
    console.log('###', payload);

    dispatch({type: AGEGENDER_STATUS});
    try {
        dispatch({type: AGEGENDER_STATUS_SUCCESS, payload});
    } catch (e) {
        dispatch({type: AGEGENDER_STATUS_ERROR, e});
    }
}