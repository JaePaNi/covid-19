import axios from 'axios';

export const hospitalInfoApi = () => {
    const res = axios.get('http://localhost:5000/openapi/HOST_HOSPITAL_INFO')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}