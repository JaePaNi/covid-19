import {FOREIGN_STATUS, FOREIGN_STATUS_SUCCESS, FOREIGN_STATUS_ERROR} from "../actionType";

const initialState = {
    status: false,
    data: {
        "body": {
            "items": {
                "item": [
                    {
                        "areaNm": {"_text": null},
                        "areaNmCn": {"_text": null},
                        "areaNmEn": {"_text": null},
                        "createDt": {"_text": null},
                        "natDeathCnt": {"_text": null},
                        "natDeathRate": {"_text": null},
                        "natDefCnt": {"_text": null},
                        "nationNm": {"_text": null},
                        "nationNmCn": {"_text": null},
                        "nationNmEn": {"_text": null},
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
        case FOREIGN_STATUS : {
            console.log('FOREIGN_STATUS TEST');
            return {
                ...state,
            }
        }
        case FOREIGN_STATUS_SUCCESS : {
            console.log('FOREIGN_STATUS TEST_SUCCESS');
            console.log('###payload### ::', action.payload);
            return {
                ...state,
                status: true,
                data: {
                    body: action.payload.body,
                }
            }
        }
        case FOREIGN_STATUS_ERROR : {
            console.log('FOREIGN_STATUS TEST_ERROR');
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