class SkinSelectorScene extends Phaser.Scene {
  constructor() {
    super("SkinSelectorScene");
  }

  async create() {
    this.gw = gameWidth;
    this.gh = gameHeight;
    this.halfW = halfGameWidth;
    this.halfH = halfGameHeight;

    this.NFTImages = [];
    this.mintButtons = [];

    this.mintNFTTextCreateTween = null;
    this.chooseSkinID = 0;

    this.loadingAnimation = new LoadingAnimation(this, this.halfW, this.halfH);
    this.loadingAnimation.start();

    const userNFTs = await this.getUserNFTsFromBLockchain();
    this.loadingAnimation.stop();

    this.chooseSkinFrame = this.createChooseSkinFrame();
    this.mintNFTTextImage = this.createMintNFTTextImage();
    this.nextStepButton = this.createNextButton();
    this.createNFTImages(userNFTs);
  }

  createMintNFTTextImage() {
    const image = this.add
      .image(this.halfW, -100, "choose_skin_text")
      .setOrigin(0.5, 0);

    this.mintNFTTextCreateTween = this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 1000,
      y: this.halfH - 400,
    });

    return image;
  }

  createNFTImage(x, y, imageKey) {
    const image = this.add
      .image(x, y, imageKey)
      .setOrigin(0.5, 0.5)
      .setScale(0)
      .setInteractive();

    this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 500,
      scale: 1,
    });

    return image;
  }

  createNFTImages(userNFTs) {
    const _userNFTs = userNFTs.map((element) => parseInt(element) + 1);
    _userNFTs.push(0);
    _userNFTs.sort((a, b) => a - b);
    const userNFTsCount = _userNFTs.length;
    const columns = Math.ceil(Math.sqrt(userNFTsCount + 2));

    for (let i = 0; i < userNFTsCount; i++) {
      const skinID = _userNFTs[i];
      let imageKey = "NFT_" + skinID;
      const x = (i % columns) * 230 + this.halfW - 230;
      const y = this.halfH - 100 + Math.floor(i / columns) * 230;

      this.time.delayedCall(100 * i, () => {
        const NFTImage = this.createNFTImage(x, y, imageKey);
        NFTImage.ID = skinID;
        NFTImage.on("pointerdown", () => {
          this.chooseSkinID = NFTImage.ID;
          this.chooseSkinFrame.setPosition(x, y);
        });

        this.NFTImages.push(NFTImage);
      });

      if (i === 0) this.chooseSkinFrame.setPosition(x, y);
    }
  }

  async getUserNFTsFromBLockchain() {
    const userWalletAddress = web3Manager.getUserWalletAddress();
    let respondStatus = null;

    await web3Manager.contract.methods
      .getUserTokensId(userWalletAddress)
      .call()
      .then((tokens) => {
        // console.log("Tokeny użytkownika:", tokens);
        respondStatus = tokens;
      })
      .catch((error) => {
        console.error("Błąd:", error);
        respondStatus = false;
      });

    return respondStatus;
  }

  createChooseSkinFrame() {
    const image = this.add
      .image(0, 0, "choose_NFT_frame")
      .setOrigin(0.5, 0.5)
      .setScale(0);

    this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 800,
      scale: 1,
    });

    return image;
  }

  createNextButton() {
    const button = new Button(this, this.halfW, gameHeight, "backButton")
      .onClick(() => {
        this.game.audio.click.play();
        localStorage.setItem("skin_ID", this.chooseSkinID);
        this.handleNextScene();
      })
      .setAngle(180);

    this.tweens.add({
      targets: button,
      ease: "Back.out",
      duration: 800,
      y: gameHeight - 150,
    });

    return button;
  }

  handleNextScene() {
    this.tweens.add({
      targets: [this.mintNFTTextImage, this.nextStepButton],
      ease: "Back.in",
      duration: 600,
      x: gameWidth + 300,
      onComplete: () => {
        localStorage.getItem("nickname")
          ? this.scene.start("MenuScene")
          : this.scene.start("LoginScene");
        const playScene = this.scene.get("PlayScene");
        playScene.playStartSceneTween();
        playScene.changePlayerSkin(this.chooseSkinID);
        playScene.playPlayerEntryAnimation();
        this.scene.remove("SkinSelectorScene");
      },
    });

    this.tweens.add({
      targets: this.NFTImages,
      ease: "Back.in",
      duration: 400,
      x: gameWidth + 300,
    });
    this.tweens.add({
      targets: this.mintButtons,
      ease: "Back.in",
      duration: 500,
      x: gameWidth + 300,
    });
    this.tweens.add({
      targets: this.chooseSkinFrame,
      ease: "Back.in",
      duration: 400,
      x: gameWidth + 300,
    });
  }
}
