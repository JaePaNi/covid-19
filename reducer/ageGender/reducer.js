import { AGEGENDER_STATUS, AGEGENDER_STATUS_SUCCESS, AGEGENDER_STATUS_ERROR } from "../actionType";
import { AGEGENDER_STATUS_TODYA, AGEGENDER_STATUS_TODYA_SUCCESS, AGEGENDER_STATUS_TODYA_ERROR } from "../actionType";

import HYDRATE from 'next-redux-wrapper';

const initialState = {
    status: false,
    data: {
        "body": {
            "items": {
                "item": [
                    {
                        // 확진자
                        "confCase": { _text: null },
                        // 확진률
                        "confCaseRate": { _text: null },
                        // 등록 일 시 분 초
                        "createDt": { _text: null },
                        // 치명률
                        "criticalRate": { _text: null },
                        // 사망자
                        "death": { _text: null },
                        // 사망률
                        "deathRate": { _text: null },
                        // 구분(성별 연령별)
                        "gubun": { _text: null },
                        // 게시글번호(확진자 성별 연령별 고유값)
                        "seq": { _text: null },
                        // 수정 일 시 분 초
                        "updateDt": { _text: null },
                    }
                ]
            },
            "numOfRows": { _text: null },
            "pageNo": { _text: null },
            "totalCount": { _text: null },
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: {
            console.log('ageGender_reducer_HYDRATE');
            return {
                ...state,
                ...action.payload
            }
        }
        case AGEGENDER_STATUS: {
            console.log('AGEGENDER_STATUS TEST');
            return {
                ...state,
            }
        }
        case AGEGENDER_STATUS_SUCCESS: {
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
        case AGEGENDER_STATUS_ERROR: {
            console.log('AGEGENDER_STATUS TEST_ERROR');
            return {
                ...state,
            }
        }
        case AGEGENDER_STATUS_TODYA: {
            console.log('AGEGENDER_STATUS_TODYA');
            return {
                ...state,
            }
        }
        case AGEGENDER_STATUS_TODYA_SUCCESS: {
            console.log('AGEGENDER_STATUS_TODYA_SUCCESS');
            return {
                ...state,
                status: true,
                data: {
                    body: action.payload.body,
                }
            }
        }
        case AGEGENDER_STATUS_TODYA_ERROR: {
            console.log('AGEGENDER_STATUS_TODYA_ERROR');
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