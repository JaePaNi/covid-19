import {HOSPITAL_STATUS, HOSPITAL_STATUS_SUCCESS, HOSPITAL_STATUS_ERROR} from "../actionType";

const initialState = {
    status: false,
    data: {
        "body": {
            "items": {
                "item": [
                    {
                        "accDefRate": {
                            "_text": null
                        },
                        "accExamCnt": {
                            "_text": null
                        },
                        "accExamCompCnt": {
                            "_text": null
                        },
                        "careCnt": {
                            "_text": null
                        },
                        "clearCnt": {
                            "_text": null
                        },
                        "createDt": {
                            "_text": null
                        },
                        "deathCnt": {
                            "_text": null
                        },
                        "decideCnt": {
                            "_text": null
                        },
                        "examCnt": {
                            "_text": null
                        },
                        "resutlNegCnt": {
                            "_text": null
                        },
                        "seq": {
                            "_text": null
                        },
                        "stateDt": {
                            "_text": null
                        },
                        "stateTime": {
                            "_text": null
                        },
                        "updateDt": {
                            "_text": null
                        }
                    }
                ]
            },
            "numOfRows": {
                "_text": null
            },
            "pageNo": {
                "_text": null
            },
            "totalCount": {
                "_text": null
            }
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HOSPITAL_STATUS : {
            console.log('HOSPITAL_STATUS TEST');
            return {
                ...state,
            }
        }
        case HOSPITAL_STATUS_SUCCESS : {
            console.log('HOSPITAL_STATUS TEST_SUCCESS');
            console.log('###payload### ::', action.payload);
            return {
                ...state,
                status: true,
                data: {
                    body: action.payload.body,
                }
            }
        }
        case HOSPITAL_STATUS_ERROR : {
            console.log('HOSPITAL_STATUS TEST_ERROR');
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