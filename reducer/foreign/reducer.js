import {FOREIGN_STATUS, FOREIGN_STATUS_SUCCESS, FOREIGN_STATUS_ERROR} from "../actionType";
import {FOREIGN_STATUS_TODYA, FOREIGN_STATUS_TODYA_SUCCESS, FOREIGN_STATUS_TODYA_ERROR} from "../actionType";

import HYDRATE from 'next-redux-wrapper';

const initialState = {
    status: false,
    data: {
        "body": {
            "items": {
                "item": [
                    {
                        // 지역명
                        "areaNm": {"_text": null},
                        //지역명(중문)
                        "areaNmCn": {"_text": null},
                        //지역명(영문)
                        "areaNmEn": {"_text": null},
                        //등록 일 시 분 초
                        "createDt": {"_text": null},
                        //국가별 사망자 수
                        "natDeathCnt": {"_text": null},
                        //확진률 대비 사망률
                        "natDeathRate": {"_text": null},
                        //국가별 확진자 수
                        "natDefCnt": {"_text": null},
                        //국가명
                        "nationNm": {"_text": null},
                        //국가명(중문)
                        "nationNmCn": {"_text": null},
                        //국가명(영문)
                        "nationNmEn": {"_text": null},
                        //게시글번호(국외발생현황고유
                        "seq": {"_text": null},
                        //기준일시
                        "stdDay": {"_text": null},
                        //수정 일 시 분 초
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
        case HYDRATE: {
            return {
                ...state,
                ...payload.action
            }
        }
        case FOREIGN_STATUS: {
            console.log('FOREIGN_STATUS TEST');
            return {
                ...state,
            }
        }
        case FOREIGN_STATUS_SUCCESS: {
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
        case FOREIGN_STATUS_ERROR: {
            console.log('FOREIGN_STATUS TEST_ERROR');
            return {
                ...state,
            }
        }
        case FOREIGN_STATUS_TODYA: {
            console.log('FOREIGN_STATUS_TODYA');
            return {
                ...state,
            }
        }
        case FOREIGN_STATUS_TODYA_SUCCESS: {
            console.log('FOREIGN_STATUS_TODYA_SUCCESS');
            return {
                ...state,
                status: true,
                data: {
                    body: action.payload.body,
                }
            }
        }
        case FOREIGN_STATUS_TODYA_ERROR: {
            console.log('FOREIGN_STATUS_TODYA_ERROR');
            return {
                ...state,
                status: false
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