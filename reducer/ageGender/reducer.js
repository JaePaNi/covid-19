import {AGEGENDER_STATUS, AGEGENDER_STATUS_SUCCESS, AGEGENDER_STATUS_ERROR} from "../actionType";

const initialState = {
    status: false,
    data: {
        "body": {
            "items": {
                "item": [
                    {
                        "confCase": {_text: null},
                        "confCaseRate": {_text: null},
                        "createDt": {_text: null},
                        "criticalRate": {_text: null},
                        "death": {_text: null},
                        "deathRate": {_text: null},
                        "gubun": {_text: null},
                        "seq": {_text: null},
                        "updateDt": {_text: null},
                    }
                ]
            },
            "numOfRows": {_text: null},
            "pageNo": {_text: null},
            "totalCount": {_text: null},
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AGEGENDER_STATUS : {
            console.log('AGEGENDER_STATUS TEST');
            return {
                ...state,
            }
        }
        case AGEGENDER_STATUS_SUCCESS : {
            console.log('AGEGENDER_STATUS TEST_SUCCESS');
            console.log('###payload### ::', action.payload);
            return {
                ...state,
                status: true,
                data: {
                    body: action.payload.body,
                }
            }
        }
        case AGEGENDER_STATUS_ERROR : {
            console.log('AGEGENDER_STATUS TEST_ERROR');
            return {
                ...state,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer;