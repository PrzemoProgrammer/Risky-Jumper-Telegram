function _0x42ab(_0x4f539e, _0x4f88ba) {
  const _0x358c30 = _0x358c();
  return (
    (_0x42ab = function (_0x42ab41, _0x256945) {
      _0x42ab41 = _0x42ab41 - 0x153;
      let _0x413b66 = _0x358c30[_0x42ab41];
      return _0x413b66;
    }),
    _0x42ab(_0x4f539e, _0x4f88ba)
  );
}
const _0x4d8fbf = _0x42ab;
function _0x358c() {
  const _0x180493 = [
    "moveAnim",
    "tweens",
    "968lTBTkS",
    "setScale",
    "resume",
    "restart",
    "27xQqShi",
    "create",
    "setState",
    "Power2",
    "createInformationWindow",
    "play",
    "swapPosition",
    "addConnectionProblemText",
    "canClickPlay",
    "settingsButton",
    "addBackgroundComponents",
    "achivButton",
    "text",
    "get",
    "menuPlatform1",
    "platform2Tween",
    "addGround",
    "removeTween",
    "isPaused",
    "Back.in",
    "addAchievementsButton",
    "Arial",
    "playButton",
    "RankingScene",
    "50px",
    "624814MvftyV",
    "Scene",
    "cloudsMoveTween",
    "RankScene",
    "platform2",
    "stopTweens",
    "riskyJumperText",
    "setVisible",
    "image",
    "setOrigin",
    "1068020ugrSVk",
    "#FF0000",
    "halfW",
    "addRiskyJumperText",
    "launch",
    "7239054ilPbXN",
    "heroMenuIcon",
    "fetchData",
    "bringToTop",
    "createDailyReward",
    "3qclVQO",
    "isActive",
    "addPlayButton",
    "addPlatform2",
    "ground",
    "getItem",
    "SettingsScene",
    "loadingIcon",
    "scene",
    "click",
    "BackgroundScene",
    "rankingButton",
    "halfH",
    "Nick\x20couldn\x27t\x20be\x20saved\x0adue\x20to\x20a\x20connection\x20problem",
    "5WynljP",
    "platform1",
    "audio",
    "heroIcon",
    "achievementsButton",
    "stop",
    "getElementById",
    "remove",
    "platform1Tween",
    "changeScene",
    "playerMoveTween",
    "7170lGZgYz",
    "playButtonTween",
    "addPlatform1",
    "add",
    "json",
    "3951332aXRAeF",
    "connectionStatus",
    "checkConnectionStatus",
    "PlayScene",
    "nickname",
    "updateAndDisplay",
    "MenuScene",
    "handleNextScene",
    "4377940vIVujY",
    "Sine.easeInOut",
    "menuPlatform2",
    "dailyReward",
    "2460832PsKyHu",
    "addHeroIcon",
    "informationWindow",
    "Back.out",
    "reward",
    "onClick",
    "mainMenu",
    "sleep",
  ];
  _0x358c = function () {
    return _0x180493;
  };
  return _0x358c();
}
(function (_0x330162, _0x260a98) {
  const _0x40f021 = _0x42ab,
    _0x801f18 = _0x330162();
  while (!![]) {
    try {
      const _0x4b2978 =
        (parseInt(_0x40f021(0x195)) / 0x1) *
          (parseInt(_0x40f021(0x181)) / 0x2) +
        (parseInt(_0x40f021(0x1ae)) / 0x3) *
          (parseInt(_0x40f021(0x164)) / 0x4) +
        (-parseInt(_0x40f021(0x1a3)) / 0x5) *
          (parseInt(_0x40f021(0x190)) / 0x6) +
        parseInt(_0x40f021(0x156)) / 0x7 +
        -parseInt(_0x40f021(0x15a)) / 0x8 +
        (-parseInt(_0x40f021(0x168)) / 0x9) *
          (parseInt(_0x40f021(0x18b)) / 0xa) +
        parseInt(_0x40f021(0x1b3)) / 0xb;
      if (_0x4b2978 === _0x260a98) break;
      else _0x801f18["push"](_0x801f18["shift"]());
    } catch (_0x4bf319) {
      _0x801f18["push"](_0x801f18["shift"]());
    }
  }
})(_0x358c, 0xa2872);
class MenuScene extends Phaser[_0x4d8fbf(0x182)] {
  constructor() {
    const _0x4739dd = _0x4d8fbf;
    super(_0x4739dd(0x154));
  }
  [_0x4d8fbf(0x169)]() {
    const _0x4a33d8 = _0x4d8fbf;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this[_0x4a33d8(0x18d)] = halfGameWidth),
      (this[_0x4a33d8(0x1a1)] = halfGameHeight),
      (this[_0x4a33d8(0x170)] = ![]),
      (this[_0x4a33d8(0x183)] = null),
      (this[_0x4a33d8(0x1ad)] = null),
      (this["playButtonTween"] = null),
      (this[_0x4a33d8(0x1ab)] = null),
      (this[_0x4a33d8(0x177)] = null),
      (this[_0x4a33d8(0x1a5)] = this["game"][_0x4a33d8(0x1a5)]),
      this[_0x4a33d8(0x1a5)][_0x4a33d8(0x160)][_0x4a33d8(0x16d)](),
      (this[_0x4a33d8(0x1a4)] = null),
      (this[_0x4a33d8(0x185)] = null),
      (this[_0x4a33d8(0x1a6)] = null),
      (this[_0x4a33d8(0x199)] = null),
      this[_0x4a33d8(0x172)](),
      (this["riskyJumperText"] = this[_0x4a33d8(0x18e)]()),
      (this["playButton"] = this[_0x4a33d8(0x197)]()),
      (this["settingsButton"] = this["addSettingsButton"]()),
      (this[_0x4a33d8(0x1a0)] = this["addRankingButton"]()),
      (this[_0x4a33d8(0x1a7)] = this["addAchievementsButton"]()),
      (this[_0x4a33d8(0x159)] = this[_0x4a33d8(0x194)]()),
      (this[_0x4a33d8(0x15c)] = this[_0x4a33d8(0x16c)]()),
      this["fetchData"]();
    if (document[_0x4a33d8(0x1a9)](_0x4a33d8(0x19c)))
      document[_0x4a33d8(0x1a9)](_0x4a33d8(0x19c))[_0x4a33d8(0x1aa)]();
  }
  [_0x4d8fbf(0x194)]() {
    const _0x516912 = _0x4d8fbf,
      _0x12fe64 = new DailyReward(
        this,
        halfGameWidth + 0xdc,
        gameStartY + 0x1f4
      );
    return (
      _0x12fe64[_0x516912(0x189)]["onClick"](async () => {
        const _0x52473d = _0x516912;
        if (!this[_0x52473d(0x159)][_0x52473d(0x196)]) return;
        this["dailyReward"][_0x52473d(0x16a)](![]);
        const _0x2074df = {
            id: localStorage[_0x52473d(0x19a)]("id"),
            daily: !![],
          },
          _0x1da2d6 = await (await CLAIM_REWARD(_0x2074df))[_0x52473d(0x1b2)]();
        this[_0x52473d(0x15c)][_0x52473d(0x153)](_0x1da2d6[_0x52473d(0x15e)]),
          this[_0x52473d(0x159)]["update"](_0x1da2d6);
      }),
      _0x12fe64
    );
  }
  async [_0x4d8fbf(0x192)]() {
    const _0x5bdabb = _0x4d8fbf,
      _0x17bdb9 = { id: localStorage[_0x5bdabb(0x19a)]("id") },
      _0x2a0ba2 = await (await GAME_STATE(_0x17bdb9))["json"](),
      { dailyReward: _0x2200de } = _0x2a0ba2;
    this[_0x5bdabb(0x159)]["update"](_0x2200de);
  }
  ["createInformationWindow"]() {
    const _0x5f3637 = _0x4d8fbf,
      _0x1efb31 = new InformationWindow(
        this,
        this[_0x5f3637(0x18d)],
        this[_0x5f3637(0x1a1)]
      );
    return _0x1efb31;
  }
  [_0x4d8fbf(0x18e)]() {
    const _0x55095e = _0x4d8fbf,
      _0x268f83 = this["add"]
        [_0x55095e(0x189)](
          this[_0x55095e(0x18d)],
          gameStartY + 0x64,
          _0x55095e(0x187)
        )
        [_0x55095e(0x18a)](0.5, 0x0)
        [_0x55095e(0x165)](0x0);
    return (
      this["tweens"][_0x55095e(0x1b1)]({
        targets: _0x268f83,
        ease: "Back.out",
        duration: 0x3e8,
        scale: 0x1,
      }),
      _0x268f83
    );
  }
  ["addSettingsButton"]() {
    const _0x5ea4ae = _0x4d8fbf,
      _0x484728 = new Button(
        this,
        halfGameWidth - 0xdc,
        gameHeight,
        _0x5ea4ae(0x171)
      )[_0x5ea4ae(0x15f)](() => {
        const _0x4b442e = _0x5ea4ae;
        this[_0x4b442e(0x1a5)][_0x4b442e(0x19e)]["play"](),
          this[_0x4b442e(0x19d)][_0x4b442e(0x193)](_0x4b442e(0x19b)),
          this[_0x4b442e(0x19d)][_0x4b442e(0x188)](!![], _0x4b442e(0x19b)),
          this[_0x4b442e(0x19d)][_0x4b442e(0x166)]("SettingsScene"),
          !this["scene"]["isPaused"](_0x4b442e(0x19b)) &&
            this[_0x4b442e(0x19d)]["launch"]("SettingsScene");
      });
    return (
      this[_0x5ea4ae(0x163)][_0x5ea4ae(0x1b1)]({
        targets: _0x484728,
        ease: _0x5ea4ae(0x15d),
        duration: 0x320,
        y: halfGameHeight + 0x1f4,
      }),
      _0x484728
    );
  }
  ["addRankingButton"]() {
    const _0x552e01 = _0x4d8fbf,
      _0x3d3728 = new Button(
        this,
        this[_0x552e01(0x18d)],
        gameHeight,
        _0x552e01(0x1a0)
      )[_0x552e01(0x15f)](() => {
        const _0x349caa = _0x552e01;
        this[_0x349caa(0x1a5)][_0x349caa(0x19e)][_0x349caa(0x16d)](),
          this[_0x349caa(0x1ac)](_0x349caa(0x17f), _0x349caa(0x154));
      });
    return (
      this[_0x552e01(0x163)][_0x552e01(0x1b1)]({
        targets: _0x3d3728,
        ease: "Back.out",
        duration: 0x320,
        y: halfGameHeight + 0x1f4,
      }),
      _0x3d3728
    );
  }
  [_0x4d8fbf(0x17c)]() {
    const _0x3f79fe = _0x4d8fbf,
      _0x10d080 = new Button(
        this,
        halfGameWidth + 0xdc,
        gameHeight,
        _0x3f79fe(0x173)
      )[_0x3f79fe(0x15f)](() => {
        const _0x468e30 = _0x3f79fe;
        this[_0x468e30(0x1a5)]["click"][_0x468e30(0x16d)](),
          this[_0x468e30(0x1ac)](_0x468e30(0x184), "MenuScene");
      });
    return (
      this["tweens"][_0x3f79fe(0x1b1)]({
        targets: _0x10d080,
        ease: _0x3f79fe(0x15d),
        duration: 0x320,
        y: halfGameHeight + 0x1f4,
      }),
      _0x10d080
    );
  }
  ["changeScene"](_0x3cda03, _0x29e3fb) {
    const _0x1f16b8 = _0x4d8fbf;
    if (!this["scene"][_0x1f16b8(0x17a)](_0x3cda03)) {
      this["scene"][_0x1f16b8(0x18f)](_0x3cda03, { currentScene: _0x29e3fb }),
        this[_0x1f16b8(0x19d)]["bringToTop"](_0x3cda03);
      return;
    }
    const _0x3176f8 = this[_0x1f16b8(0x19d)][_0x1f16b8(0x175)](_0x3cda03);
    this[_0x1f16b8(0x19d)]["pause"](),
      this[_0x1f16b8(0x19d)][_0x1f16b8(0x188)](![], _0x29e3fb),
      this[_0x1f16b8(0x19d)][_0x1f16b8(0x188)](!![], _0x3cda03),
      _0x3176f8["scene"][_0x1f16b8(0x167)]({ currentScene: _0x29e3fb }),
      this[_0x1f16b8(0x19d)][_0x1f16b8(0x193)](_0x3cda03);
  }
  ["addBackgroundComponents"]() {
    const _0x238061 = _0x4d8fbf;
    this[_0x238061(0x1b0)](this["halfW"] - 0x96, this["gh"] - this["gh"] / 0x3),
      this[_0x238061(0x198)](
        this[_0x238061(0x18d)] + 0xc8,
        this["gh"] - this["gh"] / 0x3 - 0xc8
      ),
      this["addHeroIcon"](this[_0x238061(0x18d)], this[_0x238061(0x1a1)]),
      this["addGround"](gameStartX, gameHeight);
  }
  [_0x4d8fbf(0x1b0)](_0xfda552, _0x4ec07e) {
    const _0x5f49b1 = _0x4d8fbf,
      _0x47eae2 = this["add"]
        [_0x5f49b1(0x189)](_0xfda552, gameHeight, _0x5f49b1(0x176))
        [_0x5f49b1(0x18a)](0.5, 0x0);
    (this[_0x5f49b1(0x1a4)] = _0x47eae2),
      this[_0x5f49b1(0x163)][_0x5f49b1(0x1b1)]({
        targets: _0x47eae2,
        ease: _0x5f49b1(0x15d),
        duration: 0x44c,
        y: _0x4ec07e,
        onComplete: () => {
          const _0x51e31c = _0x5f49b1,
            _0x22be2d = {
              target: _0x47eae2,
              x: _0x47eae2["x"] - 0x14,
              y: _0x47eae2["y"] + 0xf,
              time: 0x7d0,
            };
          this[_0x51e31c(0x1ab)] = this[_0x51e31c(0x162)](_0x22be2d);
        },
      });
  }
  ["addPlatform2"](_0xa4e4a9, _0xf076da) {
    const _0x34fa28 = _0x4d8fbf,
      _0x1cfc4b = this[_0x34fa28(0x1b1)]
        ["image"](_0xa4e4a9, gameHeight, _0x34fa28(0x158))
        [_0x34fa28(0x18a)](0.5, 0x0);
    (this["platform2"] = _0x1cfc4b),
      this[_0x34fa28(0x163)]["add"]({
        targets: _0x1cfc4b,
        ease: _0x34fa28(0x15d),
        duration: 0x514,
        y: _0xf076da,
        onComplete: () => {
          const _0x48ab03 = _0x34fa28,
            _0x3287b4 = {
              target: _0x1cfc4b,
              x: _0x1cfc4b["x"] - 0x14,
              y: _0x1cfc4b["y"] + 0xf,
              time: 0x9c4,
            };
          this[_0x48ab03(0x177)] = this["moveAnim"](_0x3287b4);
        },
      });
  }
  [_0x4d8fbf(0x15b)](_0x20561e, _0x41b409) {
    const _0x4e5da3 = _0x4d8fbf,
      _0x140770 = this["add"]
        ["image"](_0x20561e, 0x0, _0x4e5da3(0x191))
        ["setOrigin"](0.5, 0.5)
        ["setScale"](0x3);
    (this["heroIcon"] = _0x140770),
      this[_0x4e5da3(0x163)]["add"]({
        targets: _0x140770,
        ease: "Back.out",
        duration: 0x5dc,
        y: _0x41b409,
        scale: 0x1,
        onComplete: () => {
          const _0x4b7496 = _0x4e5da3;
          this[_0x4b7496(0x170)] = !![];
          const _0x34b90d = {
            target: _0x140770,
            x: _0x140770["x"] - 0x14,
            y: _0x140770["y"] + 0xf,
            time: 0x898,
          };
          this[_0x4b7496(0x1ad)] = this[_0x4b7496(0x162)](_0x34b90d);
        },
      });
  }
  [_0x4d8fbf(0x178)](_0x25166d, _0x1c153e) {
    const _0x2bcaed = _0x4d8fbf;
    this[_0x2bcaed(0x199)] = this["add"]
      ["tileSprite"](
        _0x25166d,
        _0x1c153e,
        gameWidth + deltaX,
        0x37,
        _0x2bcaed(0x199)
      )
      [_0x2bcaed(0x18a)](0x0, 0x1);
  }
  [_0x4d8fbf(0x162)]({
    target: _0x5b8550,
    x: _0x386b6b,
    y: _0x1a02e5,
    time: _0x4b2417,
    ease: ease = _0x4d8fbf(0x157),
  }) {
    const _0x545861 = _0x4d8fbf;
    return this[_0x545861(0x163)][_0x545861(0x1b1)]({
      targets: _0x5b8550,
      x: _0x386b6b,
      y: _0x1a02e5,
      ease: ease,
      duration: _0x4b2417,
      yoyo: !![],
      repeat: -0x1,
    });
  }
  [_0x4d8fbf(0x197)]() {
    const _0x5c2080 = _0x4d8fbf,
      _0x156bb9 = new Button(this, halfGameWidth, gameHeight, _0x5c2080(0x17e))[
        _0x5c2080(0x15f)
      ](() => {
        const _0x5bc398 = _0x5c2080;
        if (this[_0x5bc398(0x170)]) this[_0x5bc398(0x155)]();
        this[_0x5bc398(0x170)] = ![];
      });
    return (
      this["tweens"][_0x5c2080(0x1b1)]({
        targets: _0x156bb9,
        ease: "Back.out",
        duration: 0x1f4,
        y: halfGameHeight + halfGameHeight / 0x2,
        onComplete: () => {
          const _0xbccc20 = _0x5c2080;
          this[_0xbccc20(0x1af)] = this[_0xbccc20(0x163)][_0xbccc20(0x1b1)]({
            targets: _0x156bb9,
            ease: _0xbccc20(0x16b),
            scaleX: 1.1,
            scaleY: 1.1,
            duration: 0x1f4,
            yoyo: !![],
            repeat: -0x1,
          });
        },
      }),
      _0x156bb9
    );
  }
  ["addConnectionProblemText"](_0x1ca16a, _0x136e62) {
    const _0x3c8ae7 = _0x4d8fbf,
      _0x11e6ed = _0x3c8ae7(0x1a2);
    this[_0x3c8ae7(0x1b4)] = this[_0x3c8ae7(0x1b1)]
      [_0x3c8ae7(0x174)](_0x1ca16a, _0x136e62, _0x11e6ed, {
        fontFamily: _0x3c8ae7(0x17d),
        fontSize: _0x3c8ae7(0x180),
        color: "#FF0000",
        stroke: _0x3c8ae7(0x18c),
        strokeThickness: 0x3,
        shadow: { blur: 0x0, stroke: ![], fill: ![] },
      })
      [_0x3c8ae7(0x18a)](0.5, 0.5);
  }
  [_0x4d8fbf(0x1b5)]() {
    const _0x5b7fc3 = _0x4d8fbf;
    if (localStorage["getItem"](_0x5b7fc3(0x1b7))) return;
    this[_0x5b7fc3(0x16f)](this["halfW"], this[_0x5b7fc3(0x1a1)]);
  }
  [_0x4d8fbf(0x155)]() {
    const _0x2cccb2 = _0x4d8fbf;
    this[_0x2cccb2(0x1a5)][_0x2cccb2(0x19e)][_0x2cccb2(0x16d)](),
      this[_0x2cccb2(0x186)](),
      this[_0x2cccb2(0x159)]["stop"]();
    const _0x1f23ac = this["scene"]["get"](_0x2cccb2(0x19f));
    _0x1f23ac[_0x2cccb2(0x179)](),
      this["tweens"][_0x2cccb2(0x1b1)]({
        targets: this[_0x2cccb2(0x187)],
        ease: _0x2cccb2(0x17b),
        duration: 0x12c,
        scale: 0x0,
      }),
      this["tweens"]["add"]({
        targets: [
          this[_0x2cccb2(0x171)],
          this[_0x2cccb2(0x1a0)],
          this[_0x2cccb2(0x1a7)],
        ],
        ease: _0x2cccb2(0x17b),
        duration: 0xc8,
        y: gameHeight + 0xc8,
      }),
      this["tweens"][_0x2cccb2(0x1b1)]({
        targets: [this["platform1"], this[_0x2cccb2(0x17e)]],
        ease: _0x2cccb2(0x17b),
        duration: 0x190,
        y: gameHeight + 0xc8,
      }),
      this[_0x2cccb2(0x163)][_0x2cccb2(0x1b1)]({
        targets: this[_0x2cccb2(0x159)],
        ease: _0x2cccb2(0x17b),
        duration: 0x1c2,
        y: gameHeight,
      }),
      this[_0x2cccb2(0x163)][_0x2cccb2(0x1b1)]({
        targets: this[_0x2cccb2(0x185)],
        ease: _0x2cccb2(0x17b),
        duration: 0x12c,
        y: gameHeight,
      }),
      this[_0x2cccb2(0x163)][_0x2cccb2(0x1b1)]({
        targets: this[_0x2cccb2(0x1a6)],
        ease: "Back.in",
        duration: 0x1f4,
        y: 0x0,
        scale: 0x3,
        onComplete: () => {
          const _0x325bcf = _0x2cccb2;
          this[_0x325bcf(0x1a5)][_0x325bcf(0x160)][_0x325bcf(0x1a8)](),
            this["scene"][_0x325bcf(0x1aa)](_0x325bcf(0x19f)),
            this[_0x325bcf(0x19d)]
              [_0x325bcf(0x161)]("MenuScene")
              [_0x325bcf(0x166)](_0x325bcf(0x1b6))
              [_0x325bcf(0x16e)](_0x325bcf(0x154), _0x325bcf(0x1b6)),
            this[_0x325bcf(0x19d)][_0x325bcf(0x1aa)]("MenuScene");
        },
      });
  }
  ["stopTweens"]() {
    const _0x1a1713 = _0x4d8fbf;
    this["playerMoveTween"][_0x1a1713(0x1aa)](),
      this[_0x1a1713(0x1af)]["remove"](),
      this[_0x1a1713(0x1ab)][_0x1a1713(0x1aa)](),
      this["platform2Tween"]["remove"](),
      (this[_0x1a1713(0x1ad)] = null),
      (this[_0x1a1713(0x1af)] = null),
      (this[_0x1a1713(0x1ab)] = null),
      (this[_0x1a1713(0x177)] = null);
  }
}
