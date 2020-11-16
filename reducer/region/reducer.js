import {REGION_STATUS, REGION_STATUS_SUCCESS, REGION_STATUS_ERROR} from "../actionType";

const initialState = {
    status: false,
    data: {
        "body": {
            "items": {
                "item": [
                    {
                        "createDt": {"_text": null},
                        "deathCnt": {"_text": null},
                        "defCnt": {"_text": null},
                        "gubun": {"_text": null},
                        "gubunCn": {"_text": null},
                        "gubunEn": {"_text": null},
                        "incDec": {"_text": null},
                        "isolClearCnt": {"_text": null},
                        "isolIngCnt": {"_text": null},
                        "localOccCnt": {"_text": null},
                        "overFlowCnt": {"_text": null},
                        "qurRate": {"_text": null},
                        "seq": {"_text": null},
                        "stdDay": {"_text": null},
                        "updateDt": {"_text": null},
                    }
                ]
            },
            "numOfRows": {"_text": null},
            "pageNo": {"_text": null},
            "totalCount": {"_text": null}
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGION_STATUS : {
            console.log('REGION_STATUS TEST');
            return {
                ...state,
            }
        }
        case REGION_STATUS_SUCCESS : {
            console.log('REGION_STATUS TEST_SUCCESS');
            console.log('###payload### ::', action.payload);
            return {
                ...state,
                status: true,
                data: {
                    body: action.payload.body,
                }
            }
        }
        case REGION_STATUS_ERROR : {
            console.log('REGION_STATUS TEST_ERROR');
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