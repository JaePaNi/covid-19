const convert = require('xml-js');
const request = require('request');

const AUTH_KEY = require('./security');

// 코로나19 감염현황
const HOST_INFCTION_STATUS = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson';
// 코로나19 시/도 발생 현황
const HOST_REGION = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson';
// 코로나19 연령별/성별 감염 현황
const HOST_AGE_GENDER = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/ getCovid19GenAgeCaseInfJson';
// 코로나19 해외발생현황
const HOST_FOREIGN = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson';

const requestUrl = `${HOST_INFCTION_STATUS}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=20201101&endCreateDt=20201113`;

const changeJson = async () => {
    console.log('changeJson func');
    await request.get(requestUrl, (err, res, body) => {
        if (err) console.log('Error!!!', err);
        else {
            if (res.statusCode === 200) {
                const result = body;
                return console.log('return');
                // console.log(result);
                // const xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
                // return xmlToJson;
            }
        }
    });
};

module.exports = changeJson();