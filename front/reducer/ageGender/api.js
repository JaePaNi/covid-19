import axios from 'axios';

export const ageGenderApi = () => {
    const res = axios.get('http://3.14.8.194:5000/openapi/HOST_AGE_GENDER')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}

export const ageGenderTodayApi = () => {
    console.log('Today');
    const res = axios.get('http://3.14.8.194:5000/openapi/HOST_AGE_GENDER_TODAY')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}

export const ageGenderYesterdayApi = () => {
    console.log('Yesterday');
    const res = axios.get('http://3.14.8.194:5000/openapi/HOST_AGE_GENDER_YESTERDAY')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}