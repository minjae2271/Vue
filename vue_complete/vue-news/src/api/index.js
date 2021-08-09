import axios from 'axios';

//1. 기본 request & response 관련된 기본 설정 
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

//2. api 함수들 정리
function fetchNewsList(){
    return axios.get(`${config.baseUrl}news/1.json`); 
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchList(pageName){
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}
function fetchItemInfo(itemId){
    return axios.get(`${config.baseUrl}item/${itemId}.json`);
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}