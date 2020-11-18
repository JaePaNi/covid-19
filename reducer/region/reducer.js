import { REGION_STATUS, REGION_STATUS_SUCCESS, REGION_STATUS_ERROR, REGION_STATUS_TODAY, REGION_STATUS_TODAY_SUCCESS, REGION_STATUS_TODAY_ERROR } from "../actionType";

const initialState = {
    status: false,
    data: {
        "body": {
            "items": {
                "item": [
                    {
                        //등록 일 시 분 초
                        "createDt": { "_text": null },
                        //사망자 수
                        "deathCnt": { "_text": null },
                        //확진자 수
                        "defCnt": { "_text": null },
                        // 시도명(한글)
                        "gubun": { "_text": null },
                        // 시도명(중국어)
                        "gubunCn": { "_text": null },
                        // 시도명(영어)
                        "gubunEn": { "_text": null },
                        // 전일대비 증감수
                        "incDec": { "_text": null },
                        // 격리해제 수
                        "isolClearCnt": { "_text": null },
                        // 격리중 환자수
                        "isolIngCnt": { "_text": null },
                        // 지역발생 수
                        "localOccCnt": { "_text": null },
                        // 해외유입 수
                        "overFlowCnt": { "_text": null },
                        // 10만명당 발생 수
                        "qurRate": { "_text": null },
                        // 게시글번호(국내 시도별 발생현황 고유값)
                        "seq": { "_text": null },
                        // 기준일시
                        "stdDay": { "_text": null },
                        // 수정 일 시 분 초
                        "updateDt": { "_text": null },
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
        // case REGION_STATUS: {
        //     console.log('REGION_STATUS TEST');
        //     return {
        //         ...state,
        //     }
        // }
        // case REGION_STATUS_SUCCESS: {
        //     console.log('REGION_STATUS TEST_SUCCESS');
        //     console.log('###payload### ::', action.payload);
        //     return {
        //         ...state,
        //         status: true,
        //         data: {
        //             body: action.payload.body,
        //         }
        //     }
        // }
        // case REGION_STATUS_ERROR: {
        //     console.log('REGION_STATUS TEST_ERROR');
        //     return {
        //         ...state,
        //         status: false,
        //     }
        // }

        case REGION_STATUS_TODAY: {
            console.log('REGION_STATUS_TODAY');
            return {
                ...state,
            }
        }
        case REGION_STATUS_TODAY_SUCCESS: {
            console.log('REGION_STATUS_TODAY_SUCCESSUCCESS');
            return {
                ...state,
                status: true,
                data: {
                    body: action.payload.body,
                }
            }
        }
        case REGION_STATUS_TODAY_ERROR: {
            console.log('REGION_STATUS_TODAY_ERROR');
            return {
                ...state,
                status: false,
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