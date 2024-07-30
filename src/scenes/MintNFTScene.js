class MintNFTScene extends Phaser.Scene {
  constructor() {
    super("MintNFTScene");
  }

  create() {
    this.gw = gameWidth;
    this.gh = gameHeight;
    this.halfW = halfGameWidth;
    this.halfH = halfGameHeight;

    this.NFTImages = [];
    this.mintButtons = [];

    this.mintNFTTextCreateTween = null;

    this.mintNFTTextImage = this.createMintNFTTextImage();
    this.nextStepButton = this.createNextButton();
    this.createNFTImages();
    this.loadingAnimation = new LoadingAnimation(
      this,
      this.halfW,
      this.halfH + 300
    );
  }

  createMintNFTTextImage() {
    const image = this.add
      .image(this.halfW, -100, "mint_nft_text")
      .setOrigin(0.5, 0);

    this.mintNFTTextCreateTween = this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 1000,
      y: this.halfH - 350,
    });

    return image;
  }

  createMintButton(i) {
    const button = new Button(
      this,
      230 * i + this.halfW - 230,
      this.halfH + 80,
      "mint_button"
    ).setScale(0);

    this.tweens.add({
      targets: button,
      ease: "Back.out",
      duration: 900,
      scale: 1,
      onComplete: () => {
        button.onClick(async () => {
          if (
            this.loadingAnimation.loadingTween &&
            this.loadingAnimation.loadingTween.isPlaying()
          )
            return;

          button.setVisible(false);
          this.game.audio.click.play();
          this.loadingAnimation.start(button.x, button.y + 10);
          this.handleRequestToBlockchain(i);
        });
      },
    });

    return button;
  }

  async handleRequestToBlockchain(i) {
    const NFT_ID = i;
    const userWalletAddress = web3Manager.getUserWalletAddress();
    await web3Manager.contract.methods
      .userMintToken(NFT_ID)
      .send({
        from: userWalletAddress,
      })
      .then((receipt) => {
        console.log(receipt);
        if (receipt.status === true) {
          new RequestStateInformation(
            this,
            this.loadingAnimation.x,
            this.loadingAnimation.y,
            "correct_icon"
          );
        } else {
          new RequestStateInformation(
            this,
            this.loadingAnimation.x,
            this.loadingAnimation.y,
            "false_icon"
          );
        }
      })
      .catch((error) => {
        new RequestStateInformation(
          this,
          this.loadingAnimation.x,
          this.loadingAnimation.y,
          "false_icon"
        );
        this.loadingAnimation.stop();
      });

    this.loadingAnimation.stop();
  }

  createNFTImage(i) {
    const imageKey = "NFT_" + (i + 1);
    const image = this.add
      .image(230 * i + this.halfW - 230, this.halfH - 200, imageKey)
      .setOrigin(0.5, 0)
      .setScale(0);

    this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 600,
      scale: 1,
    });

    return image;
  }

  createNFTImages() {
    for (let i = 0; i < 3; i++) {
      this.time.delayedCall(200 * i, () => {
        const NFTImage = this.createNFTImage(i);
        const mintButton = this.createMintButton(i);
        this.NFTImages.push(NFTImage);
        this.mintButtons.push(mintButton);
      });
    }
  }

  createNextButton() {
    const button = new Button(this, this.halfW, gameHeight, "backButton")
      .onClick(() => {
        if (
          this.loadingAnimation.loadingTween &&
          this.loadingAnimation.loadingTween.isPlaying()
        )
          return;
        this.game.audio.click.play();
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
        this.scene.start("SkinSelectorScene");
        this.clearTweens();
        this.scene.remove("MintNFTScene");
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
  }

  clearTweens() {
    // this.cloudsMoveTween.remove();
    // this.cloudsMoveTween = null;
    // this.scaleStateTextTween = null;
    // this.scaleRiskyJumperTextTween = null;
    // this.scaleMetamaskIconTween = null;
    // this.changeStateTextTween = null;
  }
}
