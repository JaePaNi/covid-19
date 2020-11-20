import { ageGenderApi, ageGenderTodayApi, ageGenderYesterdayApi } from "./api";
import { AGEGENDER_STATUS, AGEGENDER_STATUS_SUCCESS, AGEGENDER_STATUS_ERROR } from "../actionType";
import { AGEGENDER_STATUS_TODYA, AGEGENDER_STATUS_TODYA_SUCCESS, AGEGENDER_STATUS_TODYA_ERROR } from "../actionType";

export const ageGenderAction = () => async (dispatch) => {
    const data = await ageGenderApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;
    console.log('###', payload);

    dispatch({ type: AGEGENDER_STATUS });
    try {
        dispatch({ type: AGEGENDER_STATUS_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: AGEGENDER_STATUS_ERROR, e });
    }
}

export const ageGenderTodayAction = () => async (dispatch) => {
    const time = new Date();
    const data = time.getHours() === 14 ? time.getMinutes() === 10 ? await ageGenderTodayApi() : await ageGenderYesterdayApi() : await ageGenderYesterdayApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;
    console.log('###', payload);

    dispatch({ type: AGEGENDER_STATUS_TODYA });
    try {
        dispatch({ type: AGEGENDER_STATUS_TODYA_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: AGEGENDER_STATUS_TODYA_ERROR, e });
    }
}