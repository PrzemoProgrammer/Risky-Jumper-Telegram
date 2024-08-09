class LoginScene extends Phaser.Scene {
  constructor() {
    super("LoginScene");
  }

  create() {
    this.nickText = "";
    this.id = this.generateId();
    // this.addResponseText(this.profile.x, this.profile.y + 195);
    this.fetchData();
  }

  // addResponseText(x, y) {
  //   const text = "Nickname is not available";

  //   this.notAvailableNickname = this.add
  //     .text(x, y, text, {
  //       fontFamily: "Arial",
  //       fontSize: "30px",
  //       color: "#FF0000",
  //       stroke: "#FF0000",
  //       strokeThickness: 0,
  //       shadow: { blur: 0, stroke: false, fill: false },
  //     })
  //     .setOrigin(0.5, 0.5)
  //     .setVisible(false);
  // }

  generateId() {
    let randomNumbers = [];

    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.floor(Math.random() * 100));
    }
    const id = randomNumbers.join("");
    // localStorage.setItem("id", id);

    return id;
  }

  async fetchData() {
    const currentUrl = window.location.href;
    const currentUrlObject = new URL(currentUrl);
    const username = currentUrlObject.searchParams.get("username");
    const currentId = currentUrlObject.searchParams.get("id");

    const data = {
      nick: username || "Guest",
      id: currentId,
      telegram: true,
    };

    try {
      const respond = await (await CREATE_ACCOUNT(data)).json();
      console.log(respond);
      const { newNick, success } = respond;
      if (success) {
        // localStorage.setItem("skin_ID", 0);
        localStorage.setItem("id", currentId);
        localStorage.setItem("nickname", newNick);
        this.changeScene();
      } else {
        //CAN ADD ERROR AND NOT CHANGE SCENE
        this.changeScene();
      }
    } catch (error) {
      this.changeScene();
    }
    // this.changeScene();
  }

  changeScene() {
    this.scene
      .start("PlayScene")
      .pause("PlayScene")
      .start("BackgroundScene")
      .start("MenuScene")
      .swapPosition("PlayScene", "BackgroundScene")
      .swapPosition("BackgroundScene", "MenuScene");
  }
}
