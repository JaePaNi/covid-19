import axios from 'axios';

export const ageGenderApi = () => {
    const res = axios.get('http://localhost:5000/openapi/HOST_AGE_GENDER')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}