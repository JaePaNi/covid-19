import axios from 'axios';

export const infctionStatusApi = () => {
    const res = axios.get('http://3.14.8.194:5000/openapi/HOST_INFCTION_STATUS')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}

export const infctionStatusOneApi = () => {
    const res = axios.get('http://3.14.8.194:5000/openapi/HOST_INFCTION_STATUS_ONE')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}