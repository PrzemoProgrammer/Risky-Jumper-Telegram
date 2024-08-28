const _0x1e0428 = _0x53a2;
(function (_0xad33a1, _0x3305fc) {
  const _0x50d3de = _0x53a2,
    _0x1933c5 = _0xad33a1();
  while (!![]) {
    try {
      const _0x21eff5 =
        (parseInt(_0x50d3de(0xaf)) / 0x1) * (-parseInt(_0x50d3de(0x85)) / 0x2) +
        (parseInt(_0x50d3de(0x9d)) / 0x3) * (-parseInt(_0x50d3de(0x81)) / 0x4) +
        -parseInt(_0x50d3de(0x87)) / 0x5 +
        (parseInt(_0x50d3de(0xa5)) / 0x6) * (-parseInt(_0x50d3de(0xc1)) / 0x7) +
        (-parseInt(_0x50d3de(0x8f)) / 0x8) * (parseInt(_0x50d3de(0x78)) / 0x9) +
        (-parseInt(_0x50d3de(0xb1)) / 0xa) *
          (-parseInt(_0x50d3de(0xbc)) / 0xb) +
        (parseInt(_0x50d3de(0x92)) / 0xc) * (parseInt(_0x50d3de(0xb8)) / 0xd);
      if (_0x21eff5 === _0x3305fc) break;
      else _0x1933c5["push"](_0x1933c5["shift"]());
    } catch (_0x57748c) {
      _0x1933c5["push"](_0x1933c5["shift"]());
    }
  }
})(_0x4690, 0xd757f);
function _0x53a2(_0x212d2b, _0x23e74b) {
  const _0x46900f = _0x4690();
  return (
    (_0x53a2 = function (_0x53a27a, _0x5eda4e) {
      _0x53a27a = _0x53a27a - 0x73;
      let _0x539978 = _0x46900f[_0x53a27a];
      return _0x539978;
    }),
    _0x53a2(_0x212d2b, _0x23e74b)
  );
}
class SkinSelectorScene extends Phaser[_0x1e0428(0x80)] {
  constructor() {
    super("SkinSelectorScene");
  }
  async ["create"]() {
    const _0x197001 = _0x1e0428;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this[_0x197001(0x91)] = halfGameWidth),
      (this[_0x197001(0x90)] = halfGameHeight),
      (this[_0x197001(0xb5)] = []),
      (this[_0x197001(0x96)] = []),
      (this[_0x197001(0xae)] = null),
      (this[_0x197001(0x9e)] = 0x0),
      (this["loadingAnimation"] = new LoadingAnimation(
        this,
        this[_0x197001(0x91)],
        this[_0x197001(0x90)]
      )),
      this[_0x197001(0x7c)][_0x197001(0x8d)]();
    const _0x19c20f = await this[_0x197001(0x8e)]();
    this[_0x197001(0x7c)][_0x197001(0x73)](),
      (this[_0x197001(0xa0)] = this[_0x197001(0xc0)]()),
      (this["mintNFTTextImage"] = this[_0x197001(0xbe)]()),
      (this[_0x197001(0xbb)] = this[_0x197001(0x7b)]()),
      this[_0x197001(0x75)](_0x19c20f);
  }
  [_0x1e0428(0xbe)]() {
    const _0x12918e = _0x1e0428,
      _0x5a21be = this[_0x12918e(0xac)]
        [_0x12918e(0xb3)](this[_0x12918e(0x91)], -0x64, _0x12918e(0xb0))
        [_0x12918e(0x76)](0.5, 0x0);
    return (
      (this["mintNFTTextCreateTween"] = this[_0x12918e(0x9b)][_0x12918e(0xac)]({
        targets: _0x5a21be,
        ease: _0x12918e(0xa6),
        duration: 0x3e8,
        y: this[_0x12918e(0x90)] - 0x190,
      })),
      _0x5a21be
    );
  }
  [_0x1e0428(0xb2)](_0x37f82a, _0x253cd7, _0x4a5921) {
    const _0x21abca = _0x1e0428,
      _0x47a845 = this[_0x21abca(0xac)]
        [_0x21abca(0xb3)](_0x37f82a, _0x253cd7, _0x4a5921)
        [_0x21abca(0x76)](0.5, 0.5)
        [_0x21abca(0xaa)](0x0)
        [_0x21abca(0x9a)]();
    return (
      this[_0x21abca(0x9b)]["add"]({
        targets: _0x47a845,
        ease: _0x21abca(0xa6),
        duration: 0x1f4,
        scale: 0x1,
      }),
      _0x47a845
    );
  }
  [_0x1e0428(0x75)](_0x25a65a) {
    const _0x5815df = _0x1e0428,
      _0x4f6e59 = _0x25a65a["map"]((_0x266385) => parseInt(_0x266385) + 0x1);
    _0x4f6e59["push"](0x0),
      _0x4f6e59[_0x5815df(0x8c)](
        (_0x4bbd7d, _0x5c13b6) => _0x4bbd7d - _0x5c13b6
      );
    const _0x1b9163 = _0x4f6e59[_0x5815df(0xa7)],
      _0x2524da = Math[_0x5815df(0x86)](Math[_0x5815df(0x7f)](_0x1b9163 + 0x2));
    for (let _0xa2e223 = 0x0; _0xa2e223 < _0x1b9163; _0xa2e223++) {
      const _0x38fefc = _0x4f6e59[_0xa2e223];
      let _0x114230 = _0x5815df(0x74) + _0x38fefc;
      const _0x3e38a6 =
          (_0xa2e223 % _0x2524da) * 0xe6 + this[_0x5815df(0x91)] - 0xe6,
        _0x5dd873 =
          this["halfH"] -
          0x64 +
          Math[_0x5815df(0x9c)](_0xa2e223 / _0x2524da) * 0xe6;
      this[_0x5815df(0xc2)][_0x5815df(0x93)](0x64 * _0xa2e223, () => {
        const _0x3f5561 = _0x5815df,
          _0x547404 = this[_0x3f5561(0xb2)](_0x3e38a6, _0x5dd873, _0x114230);
        (_0x547404["ID"] = _0x38fefc),
          _0x547404["on"](_0x3f5561(0x88), () => {
            const _0x5692a3 = _0x3f5561;
            (this[_0x5692a3(0x9e)] = _0x547404["ID"]),
              this["chooseSkinFrame"][_0x5692a3(0x7e)](_0x3e38a6, _0x5dd873);
          }),
          this[_0x3f5561(0xb5)][_0x3f5561(0x99)](_0x547404);
      });
      if (_0xa2e223 === 0x0)
        this[_0x5815df(0xa0)][_0x5815df(0x7e)](_0x3e38a6, _0x5dd873);
    }
  }
  async ["getUserNFTsFromBLockchain"]() {
    const _0x3f4854 = _0x1e0428,
      _0x3c4689 = web3Manager[_0x3f4854(0xa1)]();
    let _0x28851c = null;
    return (
      await web3Manager[_0x3f4854(0xa9)][_0x3f4854(0x97)]
        [_0x3f4854(0xa4)](_0x3c4689)
        [_0x3f4854(0xa8)]()
        [_0x3f4854(0xb9)]((_0x451e5e) => {
          _0x28851c = _0x451e5e;
        })
        [_0x3f4854(0xb7)]((_0x34e0dc) => {
          const _0x2cd2ac = _0x3f4854;
          console["error"](_0x2cd2ac(0x8a), _0x34e0dc), (_0x28851c = ![]);
        }),
      _0x28851c
    );
  }
  ["createChooseSkinFrame"]() {
    const _0x35eda5 = _0x1e0428,
      _0x2d5a4e = this[_0x35eda5(0xac)]
        [_0x35eda5(0xb3)](0x0, 0x0, _0x35eda5(0x7a))
        [_0x35eda5(0x76)](0.5, 0.5)
        [_0x35eda5(0xaa)](0x0);
    return (
      this["tweens"][_0x35eda5(0xac)]({
        targets: _0x2d5a4e,
        ease: _0x35eda5(0xa6),
        duration: 0x320,
        scale: 0x1,
      }),
      _0x2d5a4e
    );
  }
  [_0x1e0428(0x7b)]() {
    const _0x4d2da8 = _0x1e0428,
      _0x217164 = new Button(
        this,
        this[_0x4d2da8(0x91)],
        gameHeight,
        _0x4d2da8(0x8b)
      )
        [_0x4d2da8(0x7d)](() => {
          const _0x10d47d = _0x4d2da8;
          this[_0x10d47d(0x94)][_0x10d47d(0x82)][_0x10d47d(0xa3)][
            _0x10d47d(0x98)
          ](),
            localStorage[_0x10d47d(0x9f)](
              _0x10d47d(0xba),
              this["chooseSkinID"]
            ),
            this["handleNextScene"]();
        })
        [_0x4d2da8(0xb4)](0xb4);
    return (
      this["tweens"][_0x4d2da8(0xac)]({
        targets: _0x217164,
        ease: _0x4d2da8(0xa6),
        duration: 0x320,
        y: gameHeight - 0x96,
      }),
      _0x217164
    );
  }
  ["handleNextScene"]() {
    const _0x3ee22c = _0x1e0428;
    this[_0x3ee22c(0x9b)]["add"]({
      targets: [this[_0x3ee22c(0x83)], this["nextStepButton"]],
      ease: "Back.in",
      duration: 0x258,
      x: gameWidth + 0x12c,
      onComplete: () => {
        const _0x4152e7 = _0x3ee22c;
        localStorage[_0x4152e7(0xb6)](_0x4152e7(0xab))
          ? this[_0x4152e7(0x77)][_0x4152e7(0x8d)](_0x4152e7(0x89))
          : this[_0x4152e7(0x77)][_0x4152e7(0x8d)]("LoginScene");
        const _0x430fb0 = this[_0x4152e7(0x77)][_0x4152e7(0xad)](
          _0x4152e7(0x84)
        );
        _0x430fb0[_0x4152e7(0xbf)](),
          _0x430fb0[_0x4152e7(0xbd)](this[_0x4152e7(0x9e)]),
          _0x430fb0[_0x4152e7(0xa2)](),
          this[_0x4152e7(0x77)]["remove"](_0x4152e7(0x95));
      },
    }),
      this[_0x3ee22c(0x9b)][_0x3ee22c(0xac)]({
        targets: this[_0x3ee22c(0xb5)],
        ease: _0x3ee22c(0x79),
        duration: 0x190,
        x: gameWidth + 0x12c,
      }),
      this[_0x3ee22c(0x9b)][_0x3ee22c(0xac)]({
        targets: this[_0x3ee22c(0x96)],
        ease: _0x3ee22c(0x79),
        duration: 0x1f4,
        x: gameWidth + 0x12c,
      }),
      this[_0x3ee22c(0x9b)][_0x3ee22c(0xac)]({
        targets: this[_0x3ee22c(0xa0)],
        ease: _0x3ee22c(0x79),
        duration: 0x190,
        x: gameWidth + 0x12c,
      });
  }
}
function _0x4690() {
  const _0x439d43 = [
    "audio",
    "mintNFTTextImage",
    "PlayScene",
    "1631254qezgsR",
    "ceil",
    "93960twTzcL",
    "pointerdown",
    "MenuScene",
    "Błąd:",
    "backButton",
    "sort",
    "start",
    "getUserNFTsFromBLockchain",
    "8pAseAQ",
    "halfH",
    "halfW",
    "45755508zwvLtT",
    "delayedCall",
    "game",
    "SkinSelectorScene",
    "mintButtons",
    "methods",
    "play",
    "push",
    "setInteractive",
    "tweens",
    "floor",
    "4359963HjeDHK",
    "chooseSkinID",
    "setItem",
    "chooseSkinFrame",
    "getUserWalletAddress",
    "playPlayerEntryAnimation",
    "click",
    "getUserTokensId",
    "4489266dtAZXP",
    "Back.out",
    "length",
    "call",
    "contract",
    "setScale",
    "nickname",
    "add",
    "get",
    "mintNFTTextCreateTween",
    "1DeqEXA",
    "choose_skin_text",
    "10HrUgqC",
    "createNFTImage",
    "image",
    "setAngle",
    "NFTImages",
    "getItem",
    "catch",
    "13PHpiMn",
    "then",
    "skin_ID",
    "nextStepButton",
    "2085325TeFVdA",
    "changePlayerSkin",
    "createMintNFTTextImage",
    "playStartSceneTween",
    "createChooseSkinFrame",
    "7DuclbQ",
    "time",
    "stop",
    "NFT_",
    "createNFTImages",
    "setOrigin",
    "scene",
    "760824wrgNqX",
    "Back.in",
    "choose_NFT_frame",
    "createNextButton",
    "loadingAnimation",
    "onClick",
    "setPosition",
    "sqrt",
    "Scene",
    "4oORzkN",
  ];
  _0x4690 = function () {
    return _0x439d43;
  };
  return _0x4690();
}
