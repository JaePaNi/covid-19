import {HOSPITAL_STATUS, HOSPITAL_STATUS_SUCCESS, HOSPITAL_STATUS_ERROR} from "../actionType";

const initialState = {
    status: false,
    data: {
        "body": {
            "items": {
                "item": [
                    {
                        //운영가능일자
                        "adtFrDd": {"_text": null},
                        //시 군 구명
                        "sgguNm": {"_text": null},
                        // 시 도명
                        "sidoNm": {"_text": null},
                        // 구분코드
                        "spclAdmTyCd": {"_text": null},
                        // 전화번호
                        "telno": {"_text": null},
                        // 기관명
                        "yadmNm": {"_text": null},
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