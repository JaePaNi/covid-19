import {combineReducers} from "redux";

import insfectionStatus from './insfection_status/reducer';
import ageGender from './ageGender/reducer';
import foreign from './foreign/reducer';
import hospitalInfo from './hospitalInfo/reducer.js';
import region from './region/reducer';
import safetyNews from "../pages/content/safetyNews";

const rootReducer = combineReducers({
    insfectionStatus,
    ageGender,
    foreign,
    hospitalInfo,
    region,
    safetyNews,
});

export default rootReducer;