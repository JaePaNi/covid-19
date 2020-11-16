const express = require('express');
const convert = require('xml-js');
const rp = require('request-promise');
const cors = require('cors');

const AUTH_KEY = require('./security');

const router = express.Router();

const date = new Date();

//일주일 전 날짜 파싱
const getDateLastWeek = new Date(Date.parse(date) - 7 * 1000 * 60 * 60 * 24);
let YEAR_LASTWEEK = getDateLastWeek.getFullYear().toString();
let MONTH_LASTWEEK = (getDateLastWeek.getMonth() + 1).toString();
let DATE_LASTWEEK = getDateLastWeek.getDate().toString();
MONTH_LASTWEEK = MONTH_LASTWEEK.length === 1 ? '0' + MONTH_LASTWEEK : MONTH_LASTWEEK;
DATE_LASTWEEK = DATE_LASTWEEK.length === 1 ? '0' + DATE_LASTWEEK : DATE_LASTWEEK;

//이번주 날짜 파싱
let YEAR_THISWEEK = date.getFullYear().toString();
let MONTH_THISWEEK = (date.getMonth() + 1).toString();
let DATE_THISWEEK = date.getDate().toString();
MONTH_THISWEEK = MONTH_THISWEEK.length === 1 ? '0' + MONTH_THISWEEK : MONTH_THISWEEK;
DATE_THISWEEK = DATE_THISWEEK.length === 1 ? '0' + DATE_THISWEEK : DATE_THISWEEK;

//일주일 전, 이번주 날짜
const LAST_WEEK = YEAR_LASTWEEK+MONTH_LASTWEEK+DATE_LASTWEEK;
const THIS_WEEK = YEAR_THISWEEK+MONTH_THISWEEK+DATE_THISWEEK;

// 코로나19 감염현황
const HOST_INFCTION_STATUS = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson';
// 코로나19 시/도 발생 현황
const HOST_REGION = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson';
// 코로나19 연령별/성별 감염 현황
const HOST_AGE_GENDER = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson';
// 코로나19 해외발생현황
const HOST_FOREIGN = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson';

const requestUrl_HOST_INFCTION_STATUS = `${HOST_INFCTION_STATUS}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=${LAST_WEEK}&endCreateDt=${THIS_WEEK}`;
const requestUrl_HOST_REGION = `${HOST_REGION}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=${LAST_WEEK}&endCreateDt=${THIS_WEEK}`;
const requestUrl_HOST_AGE_GENDER = `${HOST_AGE_GENDER}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=${LAST_WEEK}&endCreateDt=${THIS_WEEK}`;
const requestUrl_HOST_FOREIGN = `${HOST_FOREIGN}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=${LAST_WEEK}&endCreateDt=${THIS_WEEK}`;

router.get('/', (req, res) => {
    res.send('hello this is openapi page');
    console.log('hello this is openapi page');
});

router.get('/HOST_INFCTION_STATUS', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_INFCTION_STATUS).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
    console.log('xmlToJson send ::');
    res.json(xmlToJson);
});

router.get('/HOST_REGION', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_REGION).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
    console.log('xmlToJson send ::');
    res.json(xmlToJson);
});

router.get('/HOST_AGE_GENDER', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_AGE_GENDER).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
    console.log('xmlToJson send ::');
    res.json(xmlToJson);
});

router.get('/HOST_FOREIGN', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_FOREIGN).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
    console.log('xmlToJson send ::');
    res.json(xmlToJson);
});

module.exports = router;