import {foreignApi} from "./api";
import {FOREIGN_STATUS, FOREIGN_STATUS_SUCCESS, FOREIGN_STATUS_ERROR} from "../actionType";

export const foreign = () => async (dispatch) => {
    const data = await foreignApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;

    dispatch({type: FOREIGN_STATUS});
    try {
        dispatch({type: FOREIGN_STATUS_SUCCESS, payload});
    } catch (e) {
        dispatch({type: FOREIGN_STATUS_ERROR, e});
    }
}