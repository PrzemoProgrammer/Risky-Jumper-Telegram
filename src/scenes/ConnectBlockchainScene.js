class ConnectBlockchainScene extends Phaser.Scene {
  constructor() {
    super("ConnectBlockchainScene");
  }

  create() {
    this.gw = gameWidth;
    this.gh = gameHeight;
    this.halfW = halfGameWidth;
    this.halfH = halfGameHeight;

    this.cloudsMoveTween = null;
    this.scaleStateTextTween = null;
    this.scaleRiskyJumperTextTween = null;
    this.scaleMetamaskIconTween = null;
    this.changeStateTextTween = null;

    this.stateText = null;
    this.riskyJumperText = this.addRiskyJumperText();
    this.metaMaskImage = this.createMetamaskImage();

    if (document.getElementById("loadingIcon"))
      document.getElementById("loadingIcon").remove();

    this.handleMetamaskAndWeb3Connect();
  }

  addRiskyJumperText() {
    const image = this.add
      .image(this.halfW, gameStartY + 100, "riskyJumperText")
      .setOrigin(0.5, 0)
      .setScale(0);

    this.scaleRiskyJumperTextTween = this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 1000,
      scale: 1,
    });

    return image;
  }

  createMetamaskImage() {
    const image = this.add
      .image(this.halfW, this.halfH - 100, "metamask")
      .setOrigin(0.5, 0)
      .setScale(0);

    this.scaleMetamaskIconTween = this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 600,
      scale: 1,
    });

    return image;
  }

  createMetaMaskConnectText() {
    this.stateText = this.add
      .image(this.halfW, this.halfH + 200, "connect_metamask_text")
      .setOrigin(0.5, 0)
      .setScale(0);

    this.scaleStateTextTween = this.tweens.add({
      targets: this.stateText,
      ease: "Back.out",
      duration: 1200,
      scale: 1,
    });
  }

  createMetaMaskInstallText() {
    this.stateText = this.add
      .image(this.halfW, this.halfH + 200, "install_metamask_text")
      .setOrigin(0.5, 0)
      .setScale(0);

    this.scaleStateTextTween = this.tweens.add({
      targets: this.stateText,
      ease: "Back.out",
      duration: 1200,
      scale: 1,
    });
  }

  changeStateTextTexture(state) {
    this.stateText.setTexture(state);

    if (this.scaleStateTextTween.isPlaying()) return;
    this.changeStateTextTween = this.tweens.add({
      targets: this.stateText,
      ease: "Circ.out",
      duration: 400,
      yoyo: true,
      scale: 1.2,
    });
  }

  async handleMetamaskAndWeb3Connect() {
    try {
      if (metaMaskManager.checkIsAvailable()) {
        console.log("Metamask installed");
        this.createMetaMaskConnectText();
        const switchNetworkState =
          await metaMaskManager.connectToSepoliaNetworkIfNeeded();
        if (switchNetworkState === false) {
          this.changeStateTextTexture("false_icon");
          return;
        }
        await metaMaskManager.getAccountAccess();
        await web3Manager.connect();
        await web3Manager.assignUserWalletAddress();
        console.log("Connect Complete");
        this.changeStateTextTexture("correct_icon");
        this.time.delayedCall(1000, () => {
          this.handleNextScene();
        });
      } else {
        console.log("Metamask not installed");
        this.createMetaMaskInstallText();
      }
    } catch (error) {
      console.error("Error while checking wallet connection:", error.message);
      this.changeStateTextTexture("false_icon");
    }
  }

  moveAnim({ target, x, y, time, ease = "Sine.easeInOut" }) {
    return this.tweens.add({
      targets: target,
      x,
      y,
      ease,
      duration: time,
      yoyo: true,
      repeat: -1,
    });
  }

  handleNextScene() {
    this.tweens.add({
      targets: this.stateText,
      scale: 0,
      duration: 700,
      ease: "Back.in",
    });

    this.tweens.add({
      targets: this.riskyJumperText,
      scale: 0,
      duration: 500,
      ease: "Back.in",
    });

    this.tweens.add({
      targets: this.metaMaskImage,
      scale: 0,
      duration: 1000,
      ease: "Back.in",
      onComplete: () => {
        this.scene.start("MintNFTScene");
        this.clearTweens();
        this.scene.remove("ConnectBlockchainScene");
      },
    });
  }

  clearTweens() {
    // this.cloudsMoveTween.remove();
    this.cloudsMoveTween = null;
    this.scaleStateTextTween = null;
    this.scaleRiskyJumperTextTween = null;
    this.scaleMetamaskIconTween = null;
    this.changeStateTextTween = null;
  }
}
