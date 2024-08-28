const _0x47004a = _0x15fa;
(function (_0x15714b, _0x270726) {
  const _0x17d7db = _0x15fa,
    _0x1ed928 = _0x15714b();
  while (!![]) {
    try {
      const _0x529309 =
        (-parseInt(_0x17d7db(0x112)) / 0x1) *
          (-parseInt(_0x17d7db(0x128)) / 0x2) +
        parseInt(_0x17d7db(0x110)) / 0x3 +
        (parseInt(_0x17d7db(0x111)) / 0x4) *
          (-parseInt(_0x17d7db(0x103)) / 0x5) +
        (parseInt(_0x17d7db(0x120)) / 0x6) *
          (-parseInt(_0x17d7db(0x127)) / 0x7) +
        (-parseInt(_0x17d7db(0x117)) / 0x8) *
          (parseInt(_0x17d7db(0x116)) / 0x9) +
        (-parseInt(_0x17d7db(0x10f)) / 0xa) *
          (-parseInt(_0x17d7db(0x107)) / 0xb) +
        parseInt(_0x17d7db(0x115)) / 0xc;
      if (_0x529309 === _0x270726) break;
      else _0x1ed928["push"](_0x1ed928["shift"]());
    } catch (_0xbcf872) {
      _0x1ed928["push"](_0x1ed928["shift"]());
    }
  }
})(_0x4c52, 0xbbc8a);
function _0x4c52() {
  const _0x2435ba = [
    "stop",
    "update",
    "padStart",
    "createCountdownText",
    "timeToRenew",
    "7486850FBZdQt",
    "2435763niyNlD",
    "4PlDUmZ",
    "53682toybJN",
    "scene",
    "add",
    "6732948lfvkAg",
    "54qheduq",
    "1086416ReoYgQ",
    "Container",
    "countdownText",
    "countDownInterval",
    "scaleY",
    "...",
    "setAlpha",
    "scaleX",
    "tweens",
    "888cBCDFk",
    "#FFFFFF",
    "startPulseTweenAnimation",
    "existing",
    "pulseTween",
    "text",
    "#000000",
    "17696hebIXt",
    "44VGSGfW",
    "dailyReward",
    "GameObjects",
    "log",
    "image",
    "6722855dXWOFV",
    "isActive",
    "setOrigin",
    "setState",
    "11garoCU",
    "20px",
    "floor",
  ];
  _0x4c52 = function () {
    return _0x2435ba;
  };
  return _0x4c52();
}
function _0x15fa(_0x198c9e, _0x3fc702) {
  const _0x4c525c = _0x4c52();
  return (
    (_0x15fa = function (_0x15fa77, _0x4de4ff) {
      _0x15fa77 = _0x15fa77 - 0x103;
      let _0x400905 = _0x4c525c[_0x15fa77];
      return _0x400905;
    }),
    _0x15fa(_0x198c9e, _0x3fc702)
  );
}
class DailyReward extends Phaser[_0x47004a(0x12a)][_0x47004a(0x118)] {
  constructor(_0x536de5, _0x3f4829, _0x1b38bd) {
    const _0x5902b2 = _0x47004a;
    super(_0x536de5, _0x3f4829, _0x1b38bd),
      _0x536de5[_0x5902b2(0x114)][_0x5902b2(0x123)](this),
      (this[_0x5902b2(0x113)] = _0x536de5),
      (this[_0x5902b2(0x124)] = null),
      (this["timeToRenew"] = 0x17 * 0x3b * 0x3b * 0x3e8),
      (this[_0x5902b2(0x104)] = ![]),
      (this[_0x5902b2(0x11a)] = null),
      (this[_0x5902b2(0x12c)] = this["createImage"]()),
      (this[_0x5902b2(0x119)] = this[_0x5902b2(0x10d)]());
  }
  ["createImage"]() {
    const _0x34a1a = _0x47004a,
      _0x5048c0 = new Button(this[_0x34a1a(0x113)], 0x0, 0x0, _0x34a1a(0x129))[
        "setAlpha"
      ](0.5);
    return this[_0x34a1a(0x114)](_0x5048c0), _0x5048c0;
  }
  [_0x47004a(0x10d)]() {
    const _0x164778 = _0x47004a,
      _0x2c9d7a = this[_0x164778(0x113)][_0x164778(0x114)]
        ["text"](0x0, 0x43, _0x164778(0x11c), {
          fontFamily: "pixel",
          fontSize: _0x164778(0x108),
          color: _0x164778(0x121),
          stroke: _0x164778(0x126),
          strokeThickness: 0x5,
          shadow: { blur: 0x0, stroke: ![], fill: ![] },
        })
        [_0x164778(0x105)](0.5, 0.5);
    return this["add"](_0x2c9d7a), _0x2c9d7a;
  }
  [_0x47004a(0x106)](_0x447054) {
    const _0x31b69a = _0x47004a;
    if (_0x447054) {
      this["image"]["setAlpha"](0x1);
      if (!this[_0x31b69a(0x104)]) this["startPulseTweenAnimation"]();
      this[_0x31b69a(0x104)] = !![];
    } else {
      this["image"][_0x31b69a(0x11d)](0.5), (this["isActive"] = ![]);
      if (this["pulseTween"])
        this[_0x31b69a(0x124)][_0x31b69a(0x10a)]()["remove"]();
      (this[_0x31b69a(0x124)] = null),
        (this[_0x31b69a(0x12c)][_0x31b69a(0x11e)] = 0x1),
        (this[_0x31b69a(0x12c)][_0x31b69a(0x11b)] = 0x1);
      if (this[_0x31b69a(0x104)])
        this["update"]({
          dailyClaimTIme: this[_0x31b69a(0x10e)],
          success: ![],
          canClaim: ![],
        });
    }
  }
  [_0x47004a(0x10b)](_0x5bf1cf) {
    const _0x4076f2 = _0x47004a,
      {
        dailyClaimTIme: _0x1b15d6,
        success: _0x3b7ec8,
        canClaim: _0x59b219,
      } = _0x5bf1cf;
    console["log"](_0x5bf1cf);
    let _0x2149b7 = _0x1b15d6;
    const _0x431021 = () => {
      const _0x22de63 = _0x15fa;
      if (
        !_0x2149b7 ||
        _0x59b219 ||
        this[_0x22de63(0x119)]["text"] == "00:00:00"
      )
        this[_0x22de63(0x106)](!![]),
          (this[_0x22de63(0x119)]["text"] = "Get\x20reward!"),
          console[_0x22de63(0x12b)](
            "You\x20can\x20claim\x20your\x20reward\x20now!"
          ),
          clearInterval(this[_0x22de63(0x11a)]);
      else {
        this[_0x22de63(0x106)](![]);
        const _0x4c92d8 = Math[_0x22de63(0x109)](_0x2149b7 / 0x3e8),
          _0x22a307 = String(Math[_0x22de63(0x109)](_0x4c92d8 / 0xe10))[
            _0x22de63(0x10c)
          ](0x2, "0"),
          _0x5098ba = String(
            Math[_0x22de63(0x109)]((_0x4c92d8 % 0xe10) / 0x3c)
          )["padStart"](0x2, "0"),
          _0x5dc8ca = String(_0x4c92d8 % 0x3c)["padStart"](0x2, "0");
        (this[_0x22de63(0x119)][_0x22de63(0x125)] =
          _0x22a307 + ":" + _0x5098ba + ":" + _0x5dc8ca),
          (_0x2149b7 -= 0x3e8);
      }
    };
    (this[_0x4076f2(0x11a)] = setInterval(() => {
      _0x431021();
    }, 0x3e8)),
      _0x431021();
  }
  [_0x47004a(0x122)]() {
    const _0x1c2b76 = _0x47004a;
    this[_0x1c2b76(0x124)] = this[_0x1c2b76(0x113)][_0x1c2b76(0x11f)]["add"]({
      targets: this,
      scaleX: 1.1,
      scaleY: 1.1,
      duration: 0x1f4,
      yoyo: !![],
      repeat: -0x1,
    });
  }
  [_0x47004a(0x10a)]() {
    const _0x1236c3 = _0x47004a;
    this[_0x1236c3(0x106)](![]), clearInterval(this[_0x1236c3(0x11a)]);
  }
}
