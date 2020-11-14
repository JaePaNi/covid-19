// const convert = require('xml-js');
// const request = require('request');

// package.json에 "type" : "module" 를 추가하여 모듈화 시켜 import사용
import convert from 'xml-js';
import request from 'request';
import { AUTH_KEY } from './security.js';

// 코로나19 감염현황
const HOST_INFCTION_STATUS = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson';
// 코로나19 시/도 발생 현황
const HOST_REGION = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson';
// 코로나19 연령별/성별 감염 현황
const HOST_AGE_GENDER = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/ getCovid19GenAgeCaseInfJson';
// 코로나19 해외발생현황
const HOST_FOREIG = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson';

const requestUrl = `${HOST_INFCTION_STATUS}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=20201101&endCreateDt=20201113`;

request.get(requestUrl, (err, res, body) => {
  if (err) console.log('Error!!! ', err);
  else {
    if (res.statusCode === 200) {
      const result = body;
      console.log('Body data : ', result);
      const xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
      console.log('Xml to Json : ', xmlToJson);
    }
  }
});


// const express = require('express');
// const app = express();

// // GET method route
// app.get('/', function (req, res) {
//   res.send('GET request to the homepage');
// });

// // POST method route
// app.get('/hi', function (req, res) {
//   res.send('POST request to the homepage');
// });

// app.listen(8080, () => {
//   console.log("Server on!!!");
// })