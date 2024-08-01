// const SERVER_URL = "https://riskyjumper.cyclic.app";
const SERVER_URL = "https://personalserver-c0422f9a9869.herokuapp.com";
const PREFX_WEB = "riskyJumperWeb";
const PREFX_TELEGRAM = "riskyJumperTelegram";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const requestPost = (data, url) => {
  return fetch(`${SERVER_URL}/${url}`, {
    method: "post",
    headers: headers,
    body: JSON.stringify(data),
  });
};

const requestGet = (url) => {
  return fetch(`${SERVER_URL}/${url}`, {
    headers: headers,
  });
};

const CREATE_ACCOUNT = (data) => {
  return requestPost(data, `${PREFX_WEB}/createAccount`);
};

const GET_PLAYERS = () => {
  return requestGet(`${PREFX_WEB}/playersStatus`);
};

const UPDATE_SCORE = (data) => {
  requestPost(data, `${PREFX_TELEGRAM}/updateScore`);
  return requestPost(data, `${PREFX_WEB}/updateScore`);
};
