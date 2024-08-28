function _0x527f(_0x3e5ea1, _0x419346) {
  const _0x3601bc = _0x3601();
  return (
    (_0x527f = function (_0x527f02, _0x5460f1) {
      _0x527f02 = _0x527f02 - 0x1b1;
      let _0x328189 = _0x3601bc[_0x527f02];
      return _0x328189;
    }),
    _0x527f(_0x3e5ea1, _0x419346)
  );
}
const _0x42e364 = _0x527f;
function _0x3601() {
  const _0x349811 = [
    "/claimReward",
    "14133wMgkLM",
    "25HkUqqP",
    "application/json",
    "74871rzumjb",
    "/updateScore",
    "riskyJumperTelegram",
    "8890MtQSQZ",
    "2123784NIQqXA",
    "1008qkynlJ",
    "/playersStatus",
    "166OTBAOv",
    "151884MWVhCy",
    "/createAccount",
    "https://personalserver-c0422f9a9869.herokuapp.com",
    "/state",
    "riskyJumperWeb",
    "21688WLHVRH",
    "1505NcUfEI",
    "7932947TVmvrI",
  ];
  _0x3601 = function () {
    return _0x349811;
  };
  return _0x3601();
}
(function (_0x575f2e, _0x4a13af) {
  const _0x1d167f = _0x527f,
    _0x27e7e4 = _0x575f2e();
  while (!![]) {
    try {
      const _0x3cebbb =
        parseInt(_0x1d167f(0x1c0)) / 0x1 +
        (-parseInt(_0x1d167f(0x1b3)) / 0x2) *
          (parseInt(_0x1d167f(0x1bd)) / 0x3) +
        parseInt(_0x1d167f(0x1c4)) / 0x4 +
        (parseInt(_0x1d167f(0x1be)) / 0x5) *
          (parseInt(_0x1d167f(0x1b4)) / 0x6) +
        (-parseInt(_0x1d167f(0x1ba)) / 0x7) *
          (-parseInt(_0x1d167f(0x1b9)) / 0x8) +
        (-parseInt(_0x1d167f(0x1b1)) / 0x9) *
          (-parseInt(_0x1d167f(0x1c3)) / 0xa) +
        -parseInt(_0x1d167f(0x1bb)) / 0xb;
      if (_0x3cebbb === _0x4a13af) break;
      else _0x27e7e4["push"](_0x27e7e4["shift"]());
    } catch (_0x3164a4) {
      _0x27e7e4["push"](_0x27e7e4["shift"]());
    }
  }
})(_0x3601, 0x49e26);
const SERVER_URL = _0x42e364(0x1b6),
  PREFX_WEB = _0x42e364(0x1b8),
  PREFX_TELEGRAM = _0x42e364(0x1c2),
  headers = { "Content-Type": _0x42e364(0x1bf), Accept: _0x42e364(0x1bf) },
  requestPost = (_0x176ac1, _0x382e20) => {
    return fetch(SERVER_URL + "/" + _0x382e20, {
      method: "post",
      headers: headers,
      body: JSON["stringify"](_0x176ac1),
    });
  },
  requestGet = (_0x3198ae) => {
    return fetch(SERVER_URL + "/" + _0x3198ae, { headers: headers });
  },
  CREATE_ACCOUNT = (_0x4da14c) => {
    const _0xea0eb7 = _0x42e364;
    return requestPost(_0x4da14c, PREFX_WEB + _0xea0eb7(0x1b5));
  },
  GET_PLAYERS = () => {
    const _0x162a9a = _0x42e364;
    return requestGet(PREFX_WEB + _0x162a9a(0x1b2));
  },
  UPDATE_SCORE = (_0x2b6e44) => {
    const _0x2c0c1a = _0x42e364;
    return (
      requestPost(_0x2b6e44, PREFX_TELEGRAM + _0x2c0c1a(0x1c1)),
      requestPost(_0x2b6e44, PREFX_WEB + _0x2c0c1a(0x1c1))
    );
  },
  GAME_STATE = (_0x509008) => {
    const _0x556d08 = _0x42e364;
    return requestPost(_0x509008, PREFX_WEB + _0x556d08(0x1b7));
  },
  CLAIM_REWARD = (_0x3c69b5) => {
    const _0x261ef2 = _0x42e364;
    return requestPost(_0x3c69b5, PREFX_WEB + _0x261ef2(0x1bc));
  };
