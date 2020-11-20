import { SAFETYNEWS_STATUS, SAFETYNEWS_STATUS_SUCCESS, SAFETYNEWS_STATUS_ERROR } from "../actionType";


const initialState = {
    status: false,
    data: {
        "body": {
            "items": {
                "item": [
                    {
                        // 내용
                        "content": { "_text": null },
                        // 영문국가명
                        "countryEnName": { "_text": null },
                        // 국가명
                        "countryName": { "_text": null },
                        // 고유값
                        "id": { "_text": null },
                        // 제목
                        "title": { "_text": null },
                        // 작성일
                        "wrtDt": { "_text": null },
                    }
                ]
            },
            "numOfRows": { "_text": null },
            "pageNo": { "_text": null },
            "totalCount": { "_text": null }
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAFETYNEWS_STATUS: {
            console.log('SAFETYNEWS_STATUS TEST');
            return {
                ...state,
            }
        }
        case SAFETYNEWS_STATUS_SUCCESS: {
            console.log('SAFETYNEWS_STATUS TEST_SUCCESS');
            return {
                ...state,
                status: true,
                data: {
                    body: action.payload.body,
                }
            }
        }
        case SAFETYNEWS_STATUS_ERROR: {
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