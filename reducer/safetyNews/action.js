import { safetyNewsApi } from "./api";
import { SAFETYNEWS_STATUS, SAFETYNEWS_STATUS_SUCCESS, SAFETYNEWS_STATUS_ERROR } from "../actionType";

export const safetyNewsAction = () => async (dispatch) => {
    const data = await safetyNewsApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;

    dispatch({ type: SAFETYNEWS_STATUS });
    try {
        dispatch({ type: SAFETYNEWS_STATUS_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: SAFETYNEWS_STATUS_ERROR, e });
    }
}