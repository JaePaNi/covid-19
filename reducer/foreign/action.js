import { foreignApi, foreignTodayApi } from "./api";
import { FOREIGN_STATUS, FOREIGN_STATUS_SUCCESS, FOREIGN_STATUS_ERROR } from "../actionType";
import { FOREIGN_STATUS_TODYA, FOREIGN_STATUS_TODYA_SUCCESS, FOREIGN_STATUS_TODYA_ERROR } from "../actionType";

export const foreignAction = () => async (dispatch) => {
    const data = await foreignApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;

    dispatch({ type: FOREIGN_STATUS });
    try {
        dispatch({ type: FOREIGN_STATUS_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: FOREIGN_STATUS_ERROR, e });
    }
}

export const foreignTodayAction = () => async (dispatch) => {
    const data = await foreignTodayApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;

    dispatch({ type: FOREIGN_STATUS_TODYA });
    try {
        dispatch({ type: FOREIGN_STATUS_TODYA_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: FOREIGN_STATUS_TODYA_ERROR, e });
    }
}