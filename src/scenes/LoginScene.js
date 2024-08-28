function _0x3a64() {
  const _0x5a9148 = [
    "log",
    "searchParams",
    "changeScene",
    "floor",
    "push",
    "13812752SmvPJb",
    "PlayScene",
    "fetchData",
    "2817580bFLtRq",
    "random",
    "10voYRLo",
    "href",
    "generateId",
    "509234awCyNF",
    "join",
    "7313268TfXsAg",
    "MenuScene",
    "username",
    "3362947Mdtrmu",
    "create",
    "scene",
    "578822JHmFuk",
    "nickText",
    "BackgroundScene",
    "json",
    "start",
    "9nmvlfT",
    "Guest",
    "pause",
    "LoginScene",
    "38932947AVGsoV",
  ];
  _0x3a64 = function () {
    return _0x5a9148;
  };
  return _0x3a64();
}
function _0x4581(_0x2a89c1, _0x500130) {
  const _0x3a649e = _0x3a64();
  return (
    (_0x4581 = function (_0x4581f7, _0x5da4b8) {
      _0x4581f7 = _0x4581f7 - 0x75;
      let _0x173c70 = _0x3a649e[_0x4581f7];
      return _0x173c70;
    }),
    _0x4581(_0x2a89c1, _0x500130)
  );
}
const _0x37a4f7 = _0x4581;
(function (_0x4934f8, _0x4b32a1) {
  const _0x4ba979 = _0x4581,
    _0x3289b3 = _0x4934f8();
  while (!![]) {
    try {
      const _0x370811 =
        parseInt(_0x4ba979(0x83)) / 0x1 +
        (parseInt(_0x4ba979(0x8b)) / 0x2) * (parseInt(_0x4ba979(0x90)) / 0x3) +
        (-parseInt(_0x4ba979(0x7e)) / 0x4) * (parseInt(_0x4ba979(0x80)) / 0x5) +
        -parseInt(_0x4ba979(0x85)) / 0x6 +
        -parseInt(_0x4ba979(0x88)) / 0x7 +
        -parseInt(_0x4ba979(0x7b)) / 0x8 +
        parseInt(_0x4ba979(0x75)) / 0x9;
      if (_0x370811 === _0x4b32a1) break;
      else _0x3289b3["push"](_0x3289b3["shift"]());
    } catch (_0x5aedc2) {
      _0x3289b3["push"](_0x3289b3["shift"]());
    }
  }
})(_0x3a64, 0xd413b);
class LoginScene extends Phaser["Scene"] {
  constructor() {
    const _0x2c1e9a = _0x4581;
    super(_0x2c1e9a(0x93));
  }
  [_0x37a4f7(0x89)]() {
    const _0x14d1cd = _0x37a4f7;
    (this[_0x14d1cd(0x8c)] = ""),
      (this["id"] = this[_0x14d1cd(0x82)]()),
      this[_0x14d1cd(0x7d)]();
  }
  [_0x37a4f7(0x82)]() {
    const _0x177270 = _0x37a4f7;
    let _0x11a55c = [];
    for (let _0x411e33 = 0x0; _0x411e33 < 0xa; _0x411e33++) {
      _0x11a55c[_0x177270(0x7a)](
        Math[_0x177270(0x79)](Math[_0x177270(0x7f)]() * 0x64)
      );
    }
    const _0x4d9917 = _0x11a55c[_0x177270(0x84)]("");
    return _0x4d9917;
  }
  async ["fetchData"]() {
    const _0x504133 = _0x37a4f7,
      _0x55b8dd = window["location"][_0x504133(0x81)],
      _0x500776 = new URL(_0x55b8dd),
      _0x343517 = _0x500776[_0x504133(0x77)]["get"](_0x504133(0x87)),
      _0x5a5e21 = _0x500776[_0x504133(0x77)]["get"]("id"),
      _0xac77ff = {
        nick: _0x343517 || _0x504133(0x91),
        id: _0x5a5e21,
        telegram: !![],
      };
    try {
      const _0x469850 = await (
        await CREATE_ACCOUNT(_0xac77ff)
      )[_0x504133(0x8e)]();
      console[_0x504133(0x76)](_0x469850);
      const { newNick: _0x2096f0, success: _0x172043 } = _0x469850;
      _0x172043
        ? (localStorage["setItem"]("id", _0x5a5e21),
          localStorage["setItem"]("nickname", _0x2096f0),
          this["changeScene"]())
        : this[_0x504133(0x78)]();
    } catch (_0x4755fa) {
      this[_0x504133(0x78)]();
    }
  }
  ["changeScene"]() {
    const _0x103133 = _0x37a4f7;
    this[_0x103133(0x8a)]
      [_0x103133(0x8f)]("PlayScene")
      [_0x103133(0x92)](_0x103133(0x7c))
      [_0x103133(0x8f)](_0x103133(0x8d))
      ["start"](_0x103133(0x86))
      ["swapPosition"](_0x103133(0x7c), _0x103133(0x8d))
      ["swapPosition"]("BackgroundScene", _0x103133(0x86));
  }
}
