import {SAFETYNEWS_STATUS, SAFETYNEWS_STATUS_SUCCESS, SAFETYNEWS_STATUS_ERROR} from "../actionType";


const initialState = {
    status: false,
    data: {
        "body": {
            "items": {
                "item": [
                    {
                        "content": {"_text": null},
                        "countryEnName": {"_text": null},
                        "countryName": {"_text": null},
                        "id": {"_text": null},
                        "title": {"_text": null},
                        "wrtDt": {"_text": null},
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
        case SAFETYNEWS_STATUS : {
            console.log('SAFETYNEWS_STATUS TEST');
            return {
                ...state,
            }
        }
        case SAFETYNEWS_STATUS_SUCCESS : {
            console.log('SAFETYNEWS_STATUS TEST_SUCCESS');
            console.log('###payload### ::', action.payload);
            return {
                ...state,
                status: true,
                data: {
                    body: action.payload.body,
                }
            }
        }
        case SAFETYNEWS_STATUS_ERROR : {
            console.log('SAFETYNEWS_STATUS TEST_ERROR');
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