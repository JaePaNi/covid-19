import axios from 'axios';

export const safetyNewsApi = () => {
    const res = axios.get('http://3.14.8.194:5000/openapi/HOST_SAFETY_NEWS')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}