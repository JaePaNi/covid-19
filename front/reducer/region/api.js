import axios from 'axios';

export const regionApi = () => {
    const res = axios.get('http://localhost:5000/openapi/HOST_REGION')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}

export const regionTodayApi = () => {
    const res = axios.get('http://localhost:5000/openapi/HOST_REGION_TODAY')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}