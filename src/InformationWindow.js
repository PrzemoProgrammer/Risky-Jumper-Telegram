class InformationWindow extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);
    scene.add.existing(this);
    this.scene = scene;

    this.showTween = null;

    this.background = this.createBackground();
    this.image = this.createImage();
    this.countdownText = this.createCountdownText();
    this.okButton = this.createOkButton();
    this.visible = false;
    // this.startShowTween();
    // this.setOrigin(0.5, 0.5);
  }

  createBackground() {
    const image = this.scene.add
      .image(0, 0, "informationWIndow")
      .setOrigin(0.5, 0.5);
    this.add(image);
    return image;
  }

  createImage() {
    const image = this.scene.add
      .image(0, -117, "dailyReward")
      .setOrigin(0.5, 0.5);
    this.add(image);
    return image;
  }

  createCountdownText() {
    const text = this.scene.add
      .text(0, 24, "200", {
        font: "60px Arial",
        fill: "black",
      })
      .setOrigin(0.5, 0.5);
    this.add(text);
    return text;
  }

  createOkButton() {
    const image = new Button(this.scene, 0, 200, "okButton").setOrigin(
      0.5,
      0.5
    );
    image.onClick(() => {
      this.visible = false;
    });
    this.add(image);
    return image;
  }

  updateAndDisplay(data) {
    const { type, texture, amount } = data;
    this.visible = true;
    this.countdownText.text = amount;
    this.image.setTexture(texture);
    this.startShowTween();
  }

  startShowTween() {
    this.scene.audio.awardReward.play();
    this.visible = true;
    this.scaleX = 0;
    this.scaleY = 0;
    this.showTween = this.scene.tweens.add({
      targets: this,
      ease: "Back.out",
      duration: 400,
      scale: 1,
    });
  }
}
