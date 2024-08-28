const _0x4f74d4 = _0x3fa9;
(function (_0x289f93, _0x2cbbb1) {
  const _0xf9ec2b = _0x3fa9,
    _0x7263f1 = _0x289f93();
  while (!![]) {
    try {
      const _0x311c10 =
        -parseInt(_0xf9ec2b(0x148)) / 0x1 +
        -parseInt(_0xf9ec2b(0x14e)) / 0x2 +
        parseInt(_0xf9ec2b(0x151)) / 0x3 +
        -parseInt(_0xf9ec2b(0x169)) / 0x4 +
        -parseInt(_0xf9ec2b(0x15d)) / 0x5 +
        (parseInt(_0xf9ec2b(0x15b)) / 0x6) *
          (parseInt(_0xf9ec2b(0x15c)) / 0x7) +
        (parseInt(_0xf9ec2b(0x16b)) / 0x8) * (parseInt(_0xf9ec2b(0x164)) / 0x9);
      if (_0x311c10 === _0x2cbbb1) break;
      else _0x7263f1["push"](_0x7263f1["shift"]());
    } catch (_0x34594c) {
      _0x7263f1["push"](_0x7263f1["shift"]());
    }
  }
})(_0xf7d8, 0xb7feb);
class BackgroundScene extends Phaser["Scene"] {
  constructor() {
    const _0xeb1945 = _0x3fa9;
    super(_0xeb1945(0x14c));
  }
  [_0x4f74d4(0x159)]() {
    const _0x1b5b63 = _0x4f74d4;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this[_0x1b5b63(0x16a)] = halfGameWidth),
      (this[_0x1b5b63(0x154)] = halfGameHeight),
      (this[_0x1b5b63(0x168)] = null),
      (this["clouds"] = null),
      (this[_0x1b5b63(0x155)] = null),
      this[_0x1b5b63(0x15e)](),
      this["addBackgroundComponents"]();
  }
  ["addBackground"]() {
    const _0x1e6be5 = _0x4f74d4;
    this[_0x1e6be5(0x153)]
      [_0x1e6be5(0x15a)](gameStartX, gameStartY, _0x1e6be5(0x156))
      [_0x1e6be5(0x149)](0x0, 0x0)
      [_0x1e6be5(0x163)](gameWidth + deltaX, gameHeight + deltaY);
  }
  ["addBackgroundComponents"]() {
    const _0x35c52f = _0x4f74d4;
    this[_0x35c52f(0x150)](gameStartX, gameHeight),
      this[_0x35c52f(0x165)](this["halfW"], gameStartY + gameHeight / 0x4),
      this["addGround"](gameStartX, gameHeight);
  }
  ["addLayer1"](_0x3e7a85, _0x8a14aa) {
    const _0x51ac84 = _0x4f74d4,
      _0x89f0f0 = this[_0x51ac84(0x153)]
        [_0x51ac84(0x157)](
          _0x3e7a85,
          _0x8a14aa + 0x3e8,
          gameWidth + deltaX,
          0x4d8,
          _0x51ac84(0x16c)
        )
        ["setOrigin"](0x0, 0x1);
    (this[_0x51ac84(0x155)] = _0x89f0f0),
      this[_0x51ac84(0x166)][_0x51ac84(0x153)]({
        targets: _0x89f0f0,
        ease: _0x51ac84(0x16d),
        duration: 0x258,
        y: _0x8a14aa,
      });
  }
  ["addClouds"](_0x50829f, _0x26d5dd) {
    const _0xdf9b42 = _0x4f74d4,
      _0x19e8e8 = this[_0xdf9b42(0x153)]
        [_0xdf9b42(0x15a)](_0x50829f, _0x26d5dd, _0xdf9b42(0x158))
        ["setOrigin"](0.5, 0x0)
        [_0xdf9b42(0x161)](0x3);
    this[_0xdf9b42(0x160)] = _0x19e8e8;
    const _0x54f5df = {
      target: _0x19e8e8,
      x: _0x19e8e8["x"] - 0x14,
      y: _0x19e8e8["y"] + 0xf,
      time: 0x834,
    };
    this[_0xdf9b42(0x166)][_0xdf9b42(0x153)]({
      targets: _0x19e8e8,
      ease: "Back.out",
      duration: 0x3e8,
      scale: 0x1,
      onComplete: () => {
        const _0x19cda6 = _0xdf9b42;
        this[_0x19cda6(0x168)] = this["moveAnim"](_0x54f5df);
      },
    });
  }
  ["addGround"](_0x5da97a, _0x2db9de) {
    const _0x20cbe6 = _0x4f74d4,
      _0x3a6f7e = this[_0x20cbe6(0x153)]
        [_0x20cbe6(0x157)](
          _0x5da97a,
          _0x2db9de + 0x32,
          gameWidth + deltaX,
          0x37,
          _0x20cbe6(0x162)
        )
        ["setOrigin"](0x0, 0x1);
    this["tweens"][_0x20cbe6(0x153)]({
      targets: _0x3a6f7e,
      ease: _0x20cbe6(0x15f),
      duration: 0x12c,
      y: _0x2db9de,
    });
  }
  [_0x4f74d4(0x14a)]({
    target: _0x1996bd,
    x: _0x52f74a,
    y: _0x5e2dbe,
    time: _0x4c9c8f,
    ease: ease = "Sine.easeInOut",
  }) {
    const _0x16bb52 = _0x4f74d4;
    return this["tweens"][_0x16bb52(0x153)]({
      targets: _0x1996bd,
      x: _0x52f74a,
      y: _0x5e2dbe,
      ease: ease,
      duration: _0x4c9c8f,
      yoyo: !![],
      repeat: -0x1,
    });
  }
  [_0x4f74d4(0x14d)]() {
    const _0x19fbb0 = _0x4f74d4;
    this[_0x19fbb0(0x168)][_0x19fbb0(0x167)](), (this[_0x19fbb0(0x168)] = null);
  }
  [_0x4f74d4(0x14f)]() {
    const _0x5b5403 = _0x4f74d4;
    this["cloudsMoveTween"]["remove"](),
      this[_0x5b5403(0x166)][_0x5b5403(0x153)]({
        targets: this[_0x5b5403(0x155)],
        ease: _0x5b5403(0x152),
        duration: 0x1f4,
        y: gameHeight + 0x3e8,
      }),
      this["tweens"][_0x5b5403(0x153)]({
        targets: this[_0x5b5403(0x160)],
        ease: _0x5b5403(0x14b),
        duration: 0xc8,
        scale: 0x0,
      });
  }
}
function _0x3fa9(_0x5ea872, _0x46d6f9) {
  const _0xf7d86b = _0xf7d8();
  return (
    (_0x3fa9 = function (_0x3fa9bb, _0x3d95a) {
      _0x3fa9bb = _0x3fa9bb - 0x148;
      let _0x3a074d = _0xf7d86b[_0x3fa9bb];
      return _0x3a074d;
    }),
    _0x3fa9(_0x5ea872, _0x46d6f9)
  );
}
function _0xf7d8() {
  const _0x3b243f = [
    "tweens",
    "remove",
    "cloudsMoveTween",
    "4667516KqGXWu",
    "halfW",
    "16oUQmnM",
    "menuLayer1",
    "Cubic.out",
    "1386151GiKKrA",
    "setOrigin",
    "moveAnim",
    "Back.in",
    "BackgroundScene",
    "clearTweens",
    "1113768OyEVcH",
    "removeTween",
    "addLayer1",
    "2518593JKViKs",
    "Cubic.in",
    "add",
    "halfH",
    "layer1",
    "menuBg",
    "tileSprite",
    "layer2",
    "create",
    "image",
    "1986PZnFqG",
    "364BfPNzj",
    "1408580XuEpfD",
    "addBackground",
    "Linear",
    "clouds",
    "setScale",
    "ground",
    "setDisplaySize",
    "14798385epOOdh",
    "addClouds",
  ];
  _0xf7d8 = function () {
    return _0x3b243f;
  };
  return _0xf7d8();
}
