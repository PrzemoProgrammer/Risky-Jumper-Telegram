class RequestStateInformation extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, sprite) {
    super(scene, x, y, sprite);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    scene.add.existing(this);
    this.setOrigin(0.5, 0.5);
    this.setScale(0);
    this.startShowTween();
  }

  startShowTween() {
    this.scene.tweens.add({
      targets: this,
      duration: 800,
      ease: "Back.out",
      scale: 1,
    });
  }

  // showTween(x = this.x, y = this.y) {
  //   this.setPosition(x, y);
  //   this.setVisible(true);
  //    this.scene.tweens.add({
  //     targets: this,
  //     angle: 360,
  //     duration: 800,
  //     ease: "Linear",
  //     repeat: -1,
  //   });

  //   this.scene.tweens.add({
  //     targets: this,
  //     duration: 1200,
  //     ease: "Back.out",
  //     scale: 0.8,
  //   });
  // }

  // stop() {
  //   this.loadingTween.remove();
  //   this.loadingTween = null;
  //   this.angle = this.startAngle;
  //   this.setVisible(false);
  //   this.setScale(0);
  // }
}
