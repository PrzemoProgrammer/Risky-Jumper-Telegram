class DailyReward extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);
    scene.add.existing(this);
    this.scene = scene;

    this.isActive = false;
    this.countDownInterval = null;
    this.pulseTween = null;

    this.image = this.createImage();
    this.countdownText = this.createCountdownText();
  }

  createImage() {
    const image = new Button(this.scene, 0, 0, "dailyReward").setAlpha(0.5);
    this.add(image);
    return image;
  }

  createCountdownText() {
    const text = this.scene.add
      .text(0, 67, "...", {
        fontSize: "17px",
        fill: "#fff",
      })
      .setOrigin(0.5, 0.5);
    this.add(text);
    return text;
  }

  setState(value) {
    if (value) {
      this.image.setAlpha(1);
      this.isActive = true;
      this.startPulseTweenAnimation();
    } else {
      this.image.setAlpha(0.5);
      this.isActive = false;
      if (this.pulseTween) this.pulseTween.stop().remove();
      this.pulseTween = null;
      this.image.scaleX = 1;
      this.image.scaleY = 1;
    }
  }

  update(data) {
    const { dailyClaimTIme, success, canClaim } = data;
    console.log(data);
    let timeLeft = dailyClaimTIme;
    // this.setState(canClaim);

    const updateCountDown = () => {
      if (!timeLeft || canClaim || this.countdownText.text == "00:00:00") {
        this.setState(true);
        this.countdownText.text = "Get reward!";
        console.log("You can claim your reward now!");
        clearInterval(this.countDownInterval);
      } else {
        this.setState(false);
        const totalSeconds = Math.floor(timeLeft / 1000);
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
          2,
          "0"
        );
        const seconds = String(totalSeconds % 60).padStart(2, "0");
        this.countdownText.text = `${hours}:${minutes}:${seconds}`;
        timeLeft -= 1000;
      }
    };

    this.countDownInterval = setInterval(() => {
      updateCountDown();
    }, 1000);

    updateCountDown();
  }

  startPulseTweenAnimation() {
    this.pulseTween = this.scene.tweens.add({
      targets: this,
      scaleX: 1.1,
      scaleY: 1.1,
      //   ease: "Sine.easeInOut",
      duration: 500,
      yoyo: true,
      repeat: -1,
    });
  }

  stop() {
    this.setState(false);
    clearInterval(this.countDownInterval);
  }
}
