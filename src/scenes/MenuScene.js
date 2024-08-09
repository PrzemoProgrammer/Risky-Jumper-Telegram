class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }
  create() {
    this.gw = gameWidth;
    this.gh = gameHeight;
    this.halfW = halfGameWidth;
    this.halfH = halfGameHeight;

    this.canClickPlay = false;

    this.cloudsMoveTween = null;
    this.playerMoveTween = null;
    this.playButtonTween = null;
    this.platform1Tween = null;
    this.platform2Tween = null;

    this.audio = this.game.audio;
    this.audio.mainMenu.play();

    this.platform1 = null;
    this.platform2 = null;
    this.heroIcon = null;
    this.ground = null;
    this.addBackgroundComponents();
    this.riskyJumperText = this.addRiskyJumperText();
    this.playButton = this.addPlayButton();
    this.settingsButton = this.addSettingsButton();
    this.rankingButton = this.addRankingButton();
    this.achievementsButton = this.addAchievementsButton();
    this.dailyReward = this.createDailyReward();
    this.informationWindow = this.createInformationWindow();
    //! /////////////////////////
    // this.tonWalletsTemplate();
    // this.shareScoreTelegramButton = this.shareScoreTelegramButton();
    //! /////////////////////////
    //! WYŚWIETL NICK GRACZOWI
    this.fetchData();
    // this.checkConnectionStatus();
    if (document.getElementById("loadingIcon"))
      document.getElementById("loadingIcon").remove();
  }
  // ! /////////////////////////// TON WALLET
  // async tonWalletsTemplate() {
  //   const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
  //     manifestUrl: "https://<YOUR_APP_URL>/tonconnect-manifest.json",
  //   });
  //   const connectButton = new Button(this, this.halfW, 150, "tg-wallet-icon");
  //   connectButton.onClick(() => {
  //     tonConnectUI.modal.open();
  //   });

  //   tonConnectUI.modal.onStateChange((state) => console.log(state));
  // }
  // ! //////////////////////////////////////

  // ! ////////// SHARE BUTTON //////////////////
  // shareScoreTelegramButton() {
  //   const shareButton = new Button(
  //     this,
  //     halfGameWidth + 220,
  //     halfGameHeight + halfGameHeight / 2,
  //     "shareButton"
  //   ).setScale(0.7);
  //   shareButton.onClick(() => {
  //     console.log("clicked share button");
  //     // TelegramGameProxy.shareScore();
  //     window.parent.postMessage(
  //       JSON.stringify({ eventType: "share_score", eventData: "33333" }),
  //       "*"
  //     );
  //   });

  //   return shareButton;
  // }
  // ! //////////////////////////////////////

  // ! ///////// DAILY REWARD ///////////////
  createDailyReward() {
    const dailyReward = new DailyReward(
      this,
      halfGameWidth + 220,
      gameStartY + 500
    );
    dailyReward.image.onClick(async () => {
      if (!this.dailyReward.isActive) return;
      this.dailyReward.setState(false);
      const data = {
        id: localStorage.getItem("id"),
        daily: true,
      };
      const dailyRewardData = await (await CLAIM_REWARD(data)).json();
      this.informationWindow.updateAndDisplay(dailyRewardData.reward);
      this.dailyReward.update(dailyRewardData);
    });
    return dailyReward;
  }
  // ! //////////////////////////////////////

  // ! ////////// FETCH DATA ///////////////////
  async fetchData() {
    const data = {
      id: localStorage.getItem("id"),
    };

    const gameState = await (await GAME_STATE(data)).json();
    const { dailyReward } = gameState;
    this.dailyReward.update(dailyReward);
  }
  // ! //////////////////////////////////////

  // ! ////////// INFROMATION WINDOW ///////////////////
  createInformationWindow() {
    const window = new InformationWindow(this, this.halfW, this.halfH);
    return window;
  }
  // ! //////////////////////////////////////

  addRiskyJumperText() {
    const image = this.add
      .image(this.halfW, gameStartY + 100, "riskyJumperText")
      .setOrigin(0.5, 0)
      .setScale(0);

    this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 1000,
      scale: 1,
    });

    return image;
  }

  addSettingsButton() {
    const button = new Button(
      this,
      halfGameWidth - 220,
      gameHeight,
      "settingsButton"
    ).onClick(() => {
      this.audio.click.play();
      this.scene.bringToTop("SettingsScene");
      this.scene.setVisible(true, "SettingsScene");
      this.scene.resume("SettingsScene");
      if (!this.scene.isPaused("SettingsScene")) {
        this.scene.launch("SettingsScene");
      }
    });

    this.tweens.add({
      targets: button,
      ease: "Back.out",
      duration: 800,
      y: halfGameHeight + 500,
    });

    return button;
  }
  addRankingButton() {
    const button = new Button(
      this,
      this.halfW,
      gameHeight,
      "rankingButton"
    ).onClick(() => {
      this.audio.click.play();
      this.changeScene("RankingScene", "MenuScene");
    });

    this.tweens.add({
      targets: button,
      ease: "Back.out",
      duration: 800,
      y: halfGameHeight + 500,
    });

    return button;
  }
  addAchievementsButton() {
    const button = new Button(
      this,
      halfGameWidth + 220,
      gameHeight,
      "achivButton"
    ).onClick(() => {
      this.audio.click.play();
      this.changeScene("RankScene", "MenuScene");
    });

    this.tweens.add({
      targets: button,
      ease: "Back.out",
      duration: 800,
      y: halfGameHeight + 500,
    });

    return button;
  }
  changeScene(key, key2) {
    if (!this.scene.isPaused(key)) {
      this.scene.launch(key, { currentScene: key2 });
      this.scene.bringToTop(key);
      return;
    }

    const scene = this.scene.get(key);
    this.scene.pause();
    this.scene.setVisible(false, key2);
    this.scene.setVisible(true, key);
    scene.scene.restart({ currentScene: key2 });
    this.scene.bringToTop(key);
  }
  addBackgroundComponents() {
    this.addPlatform1(this.halfW - 150, this.gh - this.gh / 3);
    this.addPlatform2(this.halfW + 200, this.gh - this.gh / 3 - 200);
    this.addHeroIcon(this.halfW, this.halfH);
    this.addGround(gameStartX, gameHeight);
  }

  addPlatform1(x, y) {
    const platform1 = this.add
      .image(x, gameHeight, "menuPlatform1")
      .setOrigin(0.5, 0);
    this.platform1 = platform1;

    this.tweens.add({
      targets: platform1,
      ease: "Back.out",
      duration: 1100,
      y: y,
      onComplete: () => {
        const animConfig = {
          target: platform1,
          x: platform1.x - 20,
          y: platform1.y + 15,
          time: 2000,
        };

        this.platform1Tween = this.moveAnim(animConfig);
      },
    });
  }

  addPlatform2(x, y) {
    const platform2 = this.add
      .image(x, gameHeight, "menuPlatform2")
      .setOrigin(0.5, 0);
    this.platform2 = platform2;

    this.tweens.add({
      targets: platform2,
      ease: "Back.out",
      duration: 1300,
      y: y,
      onComplete: () => {
        const animConfig = {
          target: platform2,
          x: platform2.x - 20,
          y: platform2.y + 15,
          time: 2500,
        };

        this.platform2Tween = this.moveAnim(animConfig);
      },
    });
  }

  addHeroIcon(x, y) {
    const menuHero = this.add
      .image(x, 0, "heroMenuIcon")
      .setOrigin(0.5, 0.5)
      .setScale(3);
    this.heroIcon = menuHero;

    this.tweens.add({
      targets: menuHero,
      ease: "Back.out",
      duration: 1500,
      y: y,
      scale: 1,
      onComplete: () => {
        this.canClickPlay = true;
        const animConfig = {
          target: menuHero,
          x: menuHero.x - 20,
          y: menuHero.y + 15,
          time: 2200,
        };

        this.playerMoveTween = this.moveAnim(animConfig);
      },
    });
  }

  addGround(x, y) {
    this.ground = this.add
      .tileSprite(x, y, gameWidth + deltaX, 55, "ground")
      .setOrigin(0, 1);
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
  addPlayButton() {
    const button = new Button(
      this,
      halfGameWidth,
      gameHeight,
      "playButton"
    ).onClick(() => {
      if (this.canClickPlay) this.handleNextScene();
      this.canClickPlay = false;
    });

    this.tweens.add({
      targets: button,
      ease: "Back.out",
      duration: 500,
      y: halfGameHeight + halfGameHeight / 2,
      onComplete: () => {
        this.playButtonTween = this.tweens.add({
          targets: button,
          ease: "Power2",
          scaleX: 1.1,
          scaleY: 1.1,
          duration: 500,
          yoyo: true,
          repeat: -1,
        });
      },
    });

    return button;
  }

  addConnectionProblemText(x, y) {
    const text = "Nick couldn't be saved\ndue to a connection problem";

    this.connectionStatus = this.add
      .text(x, y, text, {
        fontFamily: "Arial",
        fontSize: "50px",
        color: "#FF0000",
        stroke: "#FF0000",
        strokeThickness: 3,
        shadow: { blur: 0, stroke: false, fill: false },
      })
      .setOrigin(0.5, 0.5);
  }

  checkConnectionStatus() {
    if (localStorage.getItem("nickname")) return;
    this.addConnectionProblemText(this.halfW, this.halfH);
  }

  handleNextScene() {
    this.audio.click.play();
    this.stopTweens();
    this.dailyReward.stop();

    const backgroundScene = this.scene.get("BackgroundScene");
    backgroundScene.removeTween();

    this.tweens.add({
      targets: this.riskyJumperText,
      ease: "Back.in",
      duration: 300,
      scale: 0,
    });

    this.tweens.add({
      targets: [
        this.settingsButton,
        this.rankingButton,
        this.achievementsButton,
      ],
      ease: "Back.in",
      duration: 200,
      y: gameHeight + 200,
    });

    this.tweens.add({
      targets: [this.platform1, this.playButton],
      ease: "Back.in",
      duration: 400,
      y: gameHeight + 200,
    });

    this.tweens.add({
      targets: this.dailyReward,
      ease: "Back.in",
      duration: 450,
      y: gameHeight,
    });

    this.tweens.add({
      targets: this.platform2,
      ease: "Back.in",
      duration: 300,
      y: gameHeight,
    });

    this.tweens.add({
      targets: this.heroIcon,
      ease: "Back.in",
      duration: 500,
      y: 0,
      scale: 3,
      onComplete: () => {
        this.audio.mainMenu.stop();
        this.scene.remove("BackgroundScene");
        this.scene
          .sleep("MenuScene")
          .resume("PlayScene")
          .swapPosition("MenuScene", "PlayScene");
        this.scene.remove("MenuScene");
      },
    });
  }

  stopTweens() {
    this.playerMoveTween.remove();
    this.playButtonTween.remove();
    this.platform1Tween.remove();
    this.platform2Tween.remove();
    this.playerMoveTween = null;
    this.playButtonTween = null;
    this.platform1Tween = null;
    this.platform2Tween = null;
  }
}
