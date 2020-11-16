import axios from 'axios';

export const testApi = () => {
    const res = axios.get('http://localhost:5000/openapi/HOST_INFCTION_STATUS')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}