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
let DATE_LASTWEEK_ONE = (getDateLastWeek.getDate() - 1).toString();
MONTH_LASTWEEK = MONTH_LASTWEEK.length === 1 ? '0' + MONTH_LASTWEEK : MONTH_LASTWEEK;
DATE_LASTWEEK = DATE_LASTWEEK.length === 1 ? '0' + DATE_LASTWEEK : DATE_LASTWEEK;
DATE_LASTWEEK_ONE = DATE_LASTWEEK_ONE.length === 1 ? '0' + DATE_LASTWEEK_ONE : DATE_LASTWEEK_ONE;

//이번주 날짜 파싱
let YEAR = date.getFullYear().toString();
let MONTH = (date.getMonth() + 1).toString();
let DATE = date.getDate().toString();
MONTH = MONTH.length === 1 ? '0' + MONTH : MONTH;
DATE = DATE.length === 1 ? '0' + DATE : DATE;

//일주일 전, 이번주 날짜
const LAST_WEEK = YEAR_LASTWEEK + MONTH_LASTWEEK + DATE_LASTWEEK;
const LAST_WEEK_ONE = YEAR_LASTWEEK + MONTH_LASTWEEK + DATE_LASTWEEK_ONE;
const TODAY = YEAR + MONTH + DATE;

// 코로나19 감염현황
const HOST_INFCTION_STATUS = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson';
// 코로나19 시/도 발생 현황
const HOST_REGION = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson';
// 코로나19 연령별/성별 감염 현황
const HOST_AGE_GENDER = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson';
// 코로나19 해외발생현황
const HOST_FOREIGN = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson';
// 코로나19 관련 병원 운영기관 목록 (병원 데이터 전체 불러오기.. 데이터 정형화 필요..)
const HOST_HOSPITAL_INFO = 'http://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList';
// 코로나19 국가,지역별 최신안전소식 목록조회 (코로나관련..)
const HOST_SAFETY_NEWS = 'http://apis.data.go.kr/1262000/SafetyNewsList/getCountrySafetyNewsList';


const requestUrl_HOST_INFCTION_STATUS = `${HOST_INFCTION_STATUS}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=${LAST_WEEK}&endCreateDt=${TODAY}`;
const requestUrl_HOST_INFCTION_STATUS_ONE = `${HOST_INFCTION_STATUS}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=${LAST_WEEK_ONE}&endCreateDt=${LAST_WEEK_ONE}`;

const requestUrl_HOST_REGION = `${HOST_REGION}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=${LAST_WEEK}&endCreateDt=${TODAY}`;
const requestUrl_HOST_REGION_TODAY = `${HOST_REGION}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=${TODAY}&endCreateDt=${TODAY}`;

const requestUrl_HOST_AGE_GENDER = `${HOST_AGE_GENDER}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=${LAST_WEEK}&endCreateDt=${TODAY}`;
const requestUrl_HOST_AGE_GENDER_TODAY = `${HOST_AGE_GENDER}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=${TODAY}&endCreateDt=${TODAY}`;
const requestUrl_HOST_AGE_GENDER_YESTERDAY = `${HOST_AGE_GENDER}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=20201118&endCreateDt=20201118`;


const requestUrl_HOST_FOREIGN = `${HOST_FOREIGN}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=${LAST_WEEK}&endCreateDt=${TODAY}`;
const requestUrl_HOST_FOREIGN_TODAY = `${HOST_FOREIGN}?serviceKey=${AUTH_KEY}&numOfRows=10&startCreateDt=${TODAY}&endCreateDt=${TODAY}`;

const requestUrl_HOST_HOSPITAL_INFO = `${HOST_HOSPITAL_INFO}?ServiceKey=${AUTH_KEY}&numOfRows=1016`;
// const requestUrl_HOST_HOSPITAL_INFO = `${HOST_HOSPITAL_INFO}?ServiceKey=${AUTH_KEY}&numOfRows=10`;
const requestUrl_HOST_SAFETY_NEWS = `${HOST_SAFETY_NEWS}?serviceKey=${AUTH_KEY}&numOfRows=2`;
// const requestUrl_HOST_SAFETY_NEWS = `${HOST_SAFETY_NEWS}?serviceKey=${AUTH_KEY}&numOfRows=310`;

router.get('/', (req, res) => {
    res.send('hello this is openapi page');
    console.log('hello this is openapi page');
});

router.get('/HOST_INFCTION_STATUS', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_INFCTION_STATUS).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
    console.log('xmlToJson send HOST_INFCTION_STATUS ::');
    res.json(xmlToJson);
});

router.get('/HOST_INFCTION_STATUS_ONE', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_INFCTION_STATUS_ONE).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
    console.log('xmlToJson send HOST_INFCTION_STATUS_ONE ::');
    res.json(xmlToJson);
});

router.get('/HOST_REGION', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_REGION).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
    console.log('xmlToJson send HOST_REGION ::');
    res.json(xmlToJson);
});

router.get('/HOST_REGION_TODAY', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_REGION_TODAY).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
    console.log('xmlToJson send HOST_REGION ::');
    res.json(xmlToJson);
});

router.get('/HOST_AGE_GENDER', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_AGE_GENDER).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
    console.log('xmlToJson send HOST_AGE_GENDER ::');
    res.json(xmlToJson);
});

router.get('/HOST_AGE_GENDER_TODAY', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_AGE_GENDER_TODAY).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
    console.log('xmlToJson send HOST_AGE_GENDER_TODAY ::');
    res.json(xmlToJson);
});

router.get('/HOST_AGE_GENDER_YESTERDAY', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_AGE_GENDER_YESTERDAY).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
    console.log('xmlToJson send HOST_AGE_GENDER_TODAY ::');
    res.json(xmlToJson);
});

router.get('/HOST_FOREIGN', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_FOREIGN).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
    console.log('xmlToJson send HOST_FOREIGN ::');
    res.json(xmlToJson);
});

router.get('/HOST_FOREIGN_TODAY', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_FOREIGN_TODAY).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
    console.log('xmlToJson send HOST_FOREIGN_TODAY ::');
    res.json(xmlToJson);
});

router.get('/HOST_HOSPITAL_INFO', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_HOSPITAL_INFO).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
    console.log('xmlToJson send HOST_HOSPITAL_INFO ::');
    res.json(xmlToJson);
});

router.get('/HOST_SAFETY_NEWS', cors(), async (req, res) => {
    const result = await rp(requestUrl_HOST_SAFETY_NEWS).then((data) => data).catch((e) => console.log(e));
    const xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
    console.log('xmlToJson send HOST_SAFETY_NEWS ::');
    res.json(xmlToJson);
});

module.exports = router;