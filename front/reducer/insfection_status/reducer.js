import { INFECTION_STATUS, INFECTION_STATUS_SUCCESS, INFECTION_STATUS_ERROR, INFECTION_STATUS_ONE_SUCCESS, INFECTION_STATUS_ONE } from "../actionType";

import HYDRATE from 'next-redux-wrapper';

const initialState = {
    status: false,
    data: {
        "body": {
            "items": {
                "item": [
                    {
                        //누적확진률
                        "accDefRate": { "_text": null },
                        //누적검사수
                        "accExamCnt": { "_text": null },
                        //누적검사 완료수
                        "accExamCompCnt": { "_text": null },
                        //치료중 환자 수
                        "careCnt": { "_text": null },
                        //격리해제 수
                        "clearCnt": { "_text": null },
                        //등록 일 시 분 초
                        "createDt": { "_text": null },
                        //사망자 수
                        "deathCnt": { "_text": null },
                        //확진자 수
                        "decideCnt": { "_text": null },
                        //검사진행 수
                        "examCnt": { "_text": null },
                        //결과 음성 수
                        "resutlNegCnt": { "_text": null },
                        //게시글 번호(감염현황 고유 값)
                        "seq": { "_text": null },
                        //기준일
                        "stateDt": { "_text": null },
                        //기준 시간
                        "stateTime": { "_text": null },
                        //수정 일 시 분 초
                        "updateDt": { "_text": null }
                    }
                ]
            },
            "numOfRows": { "_text": null },
            "pageNo": { "_text": null },
            "totalCount": { "_text": null }
        }
    },
    dataOne: {
        "body": {
            "items": {
                "item":
                {
                    //누적확진률
                    "accDefRate": { "_text": null },
                    //누적검사수
                    "accExamCnt": { "_text": null },
                    //누적검사 완료수
                    "accExamCompCnt": { "_text": null },
                    //치료중 환자 수
                    "careCnt": { "_text": null },
                    //격리해제 수
                    "clearCnt": { "_text": null },
                    //등록 일 시 분 초
                    "createDt": { "_text": null },
                    //사망자 수
                    "deathCnt": { "_text": null },
                    //확진자 수
                    "decideCnt": { "_text": null },
                    //검사진행 수
                    "examCnt": { "_text": null },
                    //결과 음성 수
                    "resutlNegCnt": { "_text": null },
                    //게시글 번호(감염현황 고유 값)
                    "seq": { "_text": null },
                    //기준일
                    "stateDt": { "_text": null },
                    //기준 시간
                    "stateTime": { "_text": null },
                    //수정 일 시 분 초
                    "updateDt": { "_text": null }
                }
            },
            "numOfRows": { "_text": null },
            "pageNo": { "_text": null },
            "totalCount": { "_text": null }
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
        case INFECTION_STATUS: {
            console.log('INFECTION_STATUS TEST');
            return {
                ...state,
            }
        }
        case INFECTION_STATUS_SUCCESS: {
            console.log('INFECTION_STATUS TEST_SUCCESS');
            return {
                ...state,
                status: true,
                data: {
                    body: action.payload.body,
                }
            }
        }
        case INFECTION_STATUS_ERROR: {
            console.log('INFECTION_STATUS TEST_ERROR');
            return {
                ...state,
            }
        }
        case INFECTION_STATUS_ONE: {
            console.log('INFECTION_STATUS_ONE');
            return {
                ...state,
            }

        }
        case INFECTION_STATUS_ONE_SUCCESS: {
            console.log('INFECTION_STATUS_ONE_SUCCESS');
            return {
                ...state,
                status: true,
                dataOne: {
                    body: action.payload.body,
                }
            }
        }
        case INFECTION_STATUS_ERROR: {
            console.log('INFECTION_STATUS_ERROR');
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