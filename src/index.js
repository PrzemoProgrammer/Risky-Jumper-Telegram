const _0x261e0e = _0x5e00;
function _0x53d3() {
  const _0x3cf0de = [
    "8ViJwrh",
    "4248PqLvqm",
    "scene",
    "arcade",
    "132380nJEIvN",
    "488059InXNaT",
    "events",
    "scenes",
    "RESIZE",
    "innerWidth",
    "resize",
    "setZoom",
    "div",
    "Scale",
    "160572fSGUVj",
    "cameras",
    "Game",
    "addEventListener",
    "min",
    "innerHeight",
    "5050bJHVkt",
    "2WxeRaj",
    "__PHASER_GAME__",
    "game-container",
    "48alqsov",
    "3hQfYlw",
    "ready",
    "AUTO",
    "4962musqJZ",
    "3345WNupdj",
    "forEach",
    "2062578WXtmSb",
    "#0195b7",
    "13346476BfLcTh",
  ];
  _0x53d3 = function () {
    return _0x3cf0de;
  };
  return _0x53d3();
}
(function (_0x34360e, _0x1057fd) {
  const _0xfcd3dd = _0x5e00,
    _0x1d9e91 = _0x34360e();
  while (!![]) {
    try {
      const _0x3f0eaa =
        (parseInt(_0xfcd3dd(0x1ae)) / 0x1) *
          (parseInt(_0xfcd3dd(0x1bf)) / 0x2) +
        (parseInt(_0xfcd3dd(0x1b2)) / 0x3) *
          (-parseInt(_0xfcd3dd(0x1c9)) / 0x4) +
        (parseInt(_0xfcd3dd(0x1b6)) / 0x5) *
          (parseInt(_0xfcd3dd(0x1b5)) / 0x6) +
        (-parseInt(_0xfcd3dd(0x1b8)) / 0x7) *
          (-parseInt(_0xfcd3dd(0x1bb)) / 0x8) +
        (-parseInt(_0xfcd3dd(0x1bc)) / 0x9) *
          (-parseInt(_0xfcd3dd(0x1cf)) / 0xa) +
        (-parseInt(_0xfcd3dd(0x1c0)) / 0xb) *
          (-parseInt(_0xfcd3dd(0x1b1)) / 0xc) +
        -parseInt(_0xfcd3dd(0x1ba)) / 0xd;
      if (_0x3f0eaa === _0x1057fd) break;
      else _0x1d9e91["push"](_0x1d9e91["shift"]());
    } catch (_0x2aca0e) {
      _0x1d9e91["push"](_0x1d9e91["shift"]());
    }
  }
})(_0x53d3, 0x5067a);
const GAME_SAFE_WIDTH = 0x2d0,
  GAME_SAFE_HEIGHT = 0x500,
  statusbarHeight = 0x1e,
  deltaX =
    (window["innerWidth"] / calculateVerticalScaleFactor() -
      window[_0x261e0e(0x1c4)]) /
    0x2,
  deltaY =
    (window[_0x261e0e(0x1ce)] / calculateVerticalScaleFactor() -
      window[_0x261e0e(0x1ce)]) /
    0x2,
  gameStartX = -deltaX,
  gameStartY = -deltaY,
  gameWidth = window["innerWidth"] + deltaX,
  gameHeight = window[_0x261e0e(0x1ce)] + deltaY,
  halfGameWidth = window["innerWidth"] / 0x2,
  halfGameHeight = window[_0x261e0e(0x1ce)] / 0x2,
  config = {
    type: Phaser[_0x261e0e(0x1b4)],
    parent: _0x261e0e(0x1c7),
    pixelArt: !![],
    antialias: ![],
    roundPixels: ![],
    backgroundColor: _0x261e0e(0x1b9),
    physics: {
      default: _0x261e0e(0x1be),
      arcade: { debug: ![], gravity: { y: 0x3e8 } },
    },
    scale: {
      parent: _0x261e0e(0x1b0),
      mode: Phaser[_0x261e0e(0x1c8)]["ScaleModes"][_0x261e0e(0x1c3)],
      width: GAME_SAFE_WIDTH,
      height: GAME_SAFE_HEIGHT,
    },
    dom: { createContainer: !![] },
    scene: [
      PreloadScene,
      BackgroundScene,
      ConnectBlockchainScene,
      MintNFTScene,
      SkinSelectorScene,
      LoginScene,
      MenuScene,
      PlayScene,
      RankScene,
      PauseScene,
      SettingsScene,
      RankingScene,
    ],
  },
  game = new Phaser[_0x261e0e(0x1cb)](config);
function calculateVerticalScaleFactor() {
  const _0x131eff = _0x261e0e;
  return Math[_0x131eff(0x1cd)](
    window[_0x131eff(0x1ce)] / GAME_SAFE_HEIGHT,
    window[_0x131eff(0x1c4)] / GAME_SAFE_WIDTH
  );
}
function _0x5e00(_0x28c116, _0x4c3974) {
  const _0x53d3ed = _0x53d3();
  return (
    (_0x5e00 = function (_0x5e0033, _0x1dd190) {
      _0x5e0033 = _0x5e0033 - 0x1ae;
      let _0x196e81 = _0x53d3ed[_0x5e0033];
      return _0x196e81;
    }),
    _0x5e00(_0x28c116, _0x4c3974)
  );
}
function checkIsPortraitOrientation() {
  return window["innerWidth"] / window["innerHeight"] <= 0x1;
}
function onresize() {
  const _0x28984f = _0x261e0e,
    _0xaedf35 = calculateVerticalScaleFactor();
  game[_0x28984f(0x1bd)][_0x28984f(0x1c2)][_0x28984f(0x1b7)](
    (_0x22ccc4, _0x3cba59) => {
      const _0x2b1fef = _0x28984f;
      if (_0x3cba59 === 0x0) return;
      _0x22ccc4[_0x2b1fef(0x1ca)]["main"][_0x2b1fef(0x1c6)](_0xaedf35);
    }
  );
}
window[_0x261e0e(0x1cc)](_0x261e0e(0x1c5), onresize),
  game[_0x261e0e(0x1c1)]["on"](_0x261e0e(0x1b3), () => {
    onresize();
  }),
  (globalThis[_0x261e0e(0x1af)] = game);
