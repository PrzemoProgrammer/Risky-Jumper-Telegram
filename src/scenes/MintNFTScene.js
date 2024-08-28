function _0x562e(_0x5067d6, _0x15671a) {
  const _0x1c09d9 = _0x1c09();
  return (
    (_0x562e = function (_0x562ecd, _0x55cf19) {
      _0x562ecd = _0x562ecd - 0x1dd;
      let _0xedf7d = _0x1c09d9[_0x562ecd];
      return _0xedf7d;
    }),
    _0x562e(_0x5067d6, _0x15671a)
  );
}
const _0x336e50 = _0x562e;
(function (_0x368510, _0x89651e) {
  const _0x1222d9 = _0x562e,
    _0x52c09f = _0x368510();
  while (!![]) {
    try {
      const _0x49be99 =
        -parseInt(_0x1222d9(0x1e0)) / 0x1 +
        -parseInt(_0x1222d9(0x1f7)) / 0x2 +
        (-parseInt(_0x1222d9(0x1ea)) / 0x3) *
          (parseInt(_0x1222d9(0x20b)) / 0x4) +
        (parseInt(_0x1222d9(0x1e9)) / 0x5) *
          (parseInt(_0x1222d9(0x1fd)) / 0x6) +
        -parseInt(_0x1222d9(0x1fc)) / 0x7 +
        (-parseInt(_0x1222d9(0x1f1)) / 0x8) *
          (parseInt(_0x1222d9(0x217)) / 0x9) +
        (parseInt(_0x1222d9(0x1e8)) / 0xa) * (parseInt(_0x1222d9(0x205)) / 0xb);
      if (_0x49be99 === _0x89651e) break;
      else _0x52c09f["push"](_0x52c09f["shift"]());
    } catch (_0x55f290) {
      _0x52c09f["push"](_0x52c09f["shift"]());
    }
  }
})(_0x1c09, 0x1c1bc);
class MintNFTScene extends Phaser[_0x336e50(0x1f8)] {
  constructor() {
    const _0x300b69 = _0x336e50;
    super(_0x300b69(0x200));
  }
  [_0x336e50(0x1ee)]() {
    const _0x5bfb14 = _0x336e50;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this["halfW"] = halfGameWidth),
      (this[_0x5bfb14(0x1fb)] = halfGameHeight),
      (this[_0x5bfb14(0x1ef)] = []),
      (this[_0x5bfb14(0x213)] = []),
      (this[_0x5bfb14(0x1f5)] = null),
      (this[_0x5bfb14(0x201)] = this[_0x5bfb14(0x209)]()),
      (this[_0x5bfb14(0x1fa)] = this[_0x5bfb14(0x1f0)]()),
      this[_0x5bfb14(0x1ff)](),
      (this[_0x5bfb14(0x1f3)] = new LoadingAnimation(
        this,
        this[_0x5bfb14(0x207)],
        this[_0x5bfb14(0x1fb)] + 0x12c
      ));
  }
  [_0x336e50(0x209)]() {
    const _0x21ab0b = _0x336e50,
      _0x14b49a = this[_0x21ab0b(0x216)]
        [_0x21ab0b(0x218)](this[_0x21ab0b(0x207)], -0x64, _0x21ab0b(0x1e5))
        ["setOrigin"](0.5, 0x0);
    return (
      (this[_0x21ab0b(0x1f5)] = this[_0x21ab0b(0x1eb)][_0x21ab0b(0x216)]({
        targets: _0x14b49a,
        ease: _0x21ab0b(0x1fe),
        duration: 0x3e8,
        y: this[_0x21ab0b(0x1fb)] - 0x15e,
      })),
      _0x14b49a
    );
  }
  [_0x336e50(0x1e2)](_0x4cbf8b) {
    const _0x2636cd = _0x336e50,
      _0x50c803 = new Button(
        this,
        0xe6 * _0x4cbf8b + this[_0x2636cd(0x207)] - 0xe6,
        this[_0x2636cd(0x1fb)] + 0x50,
        _0x2636cd(0x1ec)
      )[_0x2636cd(0x20f)](0x0);
    return (
      this[_0x2636cd(0x1eb)][_0x2636cd(0x216)]({
        targets: _0x50c803,
        ease: "Back.out",
        duration: 0x384,
        scale: 0x1,
        onComplete: () => {
          _0x50c803["onClick"](async () => {
            const _0x52a6c6 = _0x562e;
            if (
              this[_0x52a6c6(0x1f3)]["loadingTween"] &&
              this["loadingAnimation"][_0x52a6c6(0x1dd)]["isPlaying"]()
            )
              return;
            _0x50c803[_0x52a6c6(0x214)](![]),
              this[_0x52a6c6(0x215)]["audio"][_0x52a6c6(0x1e3)]["play"](),
              this[_0x52a6c6(0x1f3)]["start"](
                _0x50c803["x"],
                _0x50c803["y"] + 0xa
              ),
              this["handleRequestToBlockchain"](_0x4cbf8b);
          });
        },
      }),
      _0x50c803
    );
  }
  async [_0x336e50(0x1e7)](_0x455d06) {
    const _0x2816e2 = _0x336e50,
      _0x105466 = _0x455d06,
      _0x2253b5 = web3Manager[_0x2816e2(0x20d)]();
    await web3Manager["contract"]["methods"]
      [_0x2816e2(0x1e1)](_0x105466)
      [_0x2816e2(0x1f9)]({ from: _0x2253b5 })
      [_0x2816e2(0x204)]((_0x151bf4) => {
        const _0xbb62a2 = _0x2816e2;
        console["log"](_0x151bf4),
          _0x151bf4[_0xbb62a2(0x203)] === !![]
            ? new RequestStateInformation(
                this,
                this["loadingAnimation"]["x"],
                this[_0xbb62a2(0x1f3)]["y"],
                _0xbb62a2(0x1f6)
              )
            : new RequestStateInformation(
                this,
                this["loadingAnimation"]["x"],
                this["loadingAnimation"]["y"],
                _0xbb62a2(0x210)
              );
      })
      [_0x2816e2(0x20a)]((_0x4529d4) => {
        const _0x4ede4d = _0x2816e2;
        new RequestStateInformation(
          this,
          this[_0x4ede4d(0x1f3)]["x"],
          this[_0x4ede4d(0x1f3)]["y"],
          _0x4ede4d(0x210)
        ),
          this[_0x4ede4d(0x1f3)][_0x4ede4d(0x1de)]();
      }),
      this[_0x2816e2(0x1f3)][_0x2816e2(0x1de)]();
  }
  [_0x336e50(0x20e)](_0x3ab8eb) {
    const _0xe7f428 = _0x336e50,
      _0x4bec16 = _0xe7f428(0x208) + (_0x3ab8eb + 0x1),
      _0x277e1c = this[_0xe7f428(0x216)]
        [_0xe7f428(0x218)](
          0xe6 * _0x3ab8eb + this[_0xe7f428(0x207)] - 0xe6,
          this["halfH"] - 0xc8,
          _0x4bec16
        )
        [_0xe7f428(0x1e4)](0.5, 0x0)
        ["setScale"](0x0);
    return (
      this["tweens"]["add"]({
        targets: _0x277e1c,
        ease: _0xe7f428(0x1fe),
        duration: 0x258,
        scale: 0x1,
      }),
      _0x277e1c
    );
  }
  [_0x336e50(0x1ff)]() {
    const _0xe68d64 = _0x336e50;
    for (let _0x1cdb92 = 0x0; _0x1cdb92 < 0x3; _0x1cdb92++) {
      this["time"][_0xe68d64(0x1f4)](0xc8 * _0x1cdb92, () => {
        const _0x381449 = _0xe68d64,
          _0x467dcd = this[_0x381449(0x20e)](_0x1cdb92),
          _0x4574bf = this["createMintButton"](_0x1cdb92);
        this["NFTImages"][_0x381449(0x1df)](_0x467dcd),
          this[_0x381449(0x213)][_0x381449(0x1df)](_0x4574bf);
      });
    }
  }
  ["createNextButton"]() {
    const _0x176f0a = _0x336e50,
      _0x5e350f = new Button(
        this,
        this[_0x176f0a(0x207)],
        gameHeight,
        "backButton"
      )
        ["onClick"](() => {
          const _0x536455 = _0x176f0a;
          if (
            this[_0x536455(0x1f3)][_0x536455(0x1dd)] &&
            this["loadingAnimation"][_0x536455(0x1dd)]["isPlaying"]()
          )
            return;
          this[_0x536455(0x215)]["audio"][_0x536455(0x1e3)]["play"](),
            this[_0x536455(0x206)]();
        })
        [_0x176f0a(0x202)](0xb4);
    return (
      this["tweens"][_0x176f0a(0x216)]({
        targets: _0x5e350f,
        ease: _0x176f0a(0x1fe),
        duration: 0x320,
        y: gameHeight - 0x96,
      }),
      _0x5e350f
    );
  }
  ["handleNextScene"]() {
    const _0x4ec10f = _0x336e50;
    this[_0x4ec10f(0x1eb)][_0x4ec10f(0x216)]({
      targets: [this[_0x4ec10f(0x201)], this["nextStepButton"]],
      ease: "Back.in",
      duration: 0x258,
      x: gameWidth + 0x12c,
      onComplete: () => {
        const _0x209213 = _0x4ec10f;
        this[_0x209213(0x212)][_0x209213(0x1ed)](_0x209213(0x1e6)),
          this[_0x209213(0x211)](),
          this[_0x209213(0x212)][_0x209213(0x20c)]("MintNFTScene");
      },
    }),
      this[_0x4ec10f(0x1eb)]["add"]({
        targets: this[_0x4ec10f(0x1ef)],
        ease: _0x4ec10f(0x1f2),
        duration: 0x190,
        x: gameWidth + 0x12c,
      }),
      this[_0x4ec10f(0x1eb)][_0x4ec10f(0x216)]({
        targets: this[_0x4ec10f(0x213)],
        ease: _0x4ec10f(0x1f2),
        duration: 0x1f4,
        x: gameWidth + 0x12c,
      });
  }
  [_0x336e50(0x211)]() {}
}
function _0x1c09() {
  const _0x1e5d4f = [
    "setScale",
    "false_icon",
    "clearTweens",
    "scene",
    "mintButtons",
    "setVisible",
    "game",
    "add",
    "468tjdCGj",
    "image",
    "loadingTween",
    "stop",
    "push",
    "99555aLapSl",
    "userMintToken",
    "createMintButton",
    "click",
    "setOrigin",
    "mint_nft_text",
    "SkinSelectorScene",
    "handleRequestToBlockchain",
    "7585730ZIqomw",
    "222385JaTDLZ",
    "2916KPoRHN",
    "tweens",
    "mint_button",
    "start",
    "create",
    "NFTImages",
    "createNextButton",
    "35248ugfSQQ",
    "Back.in",
    "loadingAnimation",
    "delayedCall",
    "mintNFTTextCreateTween",
    "correct_icon",
    "285852HmUeop",
    "Scene",
    "send",
    "nextStepButton",
    "halfH",
    "954702lsfcwO",
    "12EoyiYI",
    "Back.out",
    "createNFTImages",
    "MintNFTScene",
    "mintNFTTextImage",
    "setAngle",
    "status",
    "then",
    "11XODOTU",
    "handleNextScene",
    "halfW",
    "NFT_",
    "createMintNFTTextImage",
    "catch",
    "512QxMhzF",
    "remove",
    "getUserWalletAddress",
    "createNFTImage",
  ];
  _0x1c09 = function () {
    return _0x1e5d4f;
  };
  return _0x1c09();
}
