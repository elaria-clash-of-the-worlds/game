const {
    AudioSource,
    GameObject,
    SceneDescription,
    Sprite,
    Vector2D,
    Game,
    Button,
    UIImage,
    SceneManager,
} = elaria;

class MenuLevel extends SceneDescription {
    constructor() {
        super("Menu");
    }

    build() {
        const width = 480;
        const height = 384;
        const scale = Game.canvas.width / width;
        const menu = new GameObject("Menu");
        const menuSprite = menu.addComponent(Sprite, {
            imageSource: "../src/assets/menu-level.png", width: width * scale, height: height * scale
        });
        menu.transform.position = new Vector2D(menuSprite.width / 2, menuSprite.height / 2);
        menuSprite.pixelPerfect = true;

        const playButton = new GameObject("Play Button", true).addComponent(Button);
        playButton.transform.width = 64;
        playButton.transform.height = 64;
        playButton.transform.position = new Vector2D(Game.canvas.width / 2, Game.canvas.height / 2 + 128);
        playButton.hoverColor = "rgb(220, 220, 220)";
        playButton.pressedColor = "rgb(200, 200, 200)";
        playButton.onClick = () => SceneManager.loadScene(1);

        const buttonImage = playButton.addComponent(UIImage);
        buttonImage.imageSource = "../src/assets/play-button.png";
        buttonImage.pixelPerfect = true;
    }
}

export default MenuLevel;