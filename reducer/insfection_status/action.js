import {testApi} from "./api";
import {TEST, TEST_SUCCESS, TEST_ERROR} from "../actionType";

export const onClick = () => async (dispatch) => {
    const data = await testApi();
    const parseJson = JSON.parse(data.data);
    const payload = parseJson.response;

    dispatch({type: TEST});
    try {
        dispatch({type: TEST_SUCCESS, payload});
    } catch (e) {
        dispatch({type: TEST_ERROR, error: e});
    }
}