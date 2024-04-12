import LoreText from "../components/lore-text.js";

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
    AnchorsPreset,
} = elaria;

class JailLoreLevel extends SceneDescription {
    constructor() {
        super("Caught");
    }

    build() {
        const width = 480;
        const height = 384;
        const scale = Game.canvas.width / width;
        const menu = new GameObject("Menu", true);
        const menuSprite = menu.addComponent(Sprite, {
            imageSource: "../src/assets/lore-level.png", width: width * scale, height: height * scale
        });
        menu.transform.position = new Vector2D(menuSprite.width / 2, menuSprite.height / 2);
        menuSprite.pixelPerfect = true;

        const playButton = new GameObject("Play Button", true).addComponent(Button);
        playButton.transform.width = 64;
        playButton.transform.height = 64;
        playButton.transform.position = new Vector2D(Game.canvas.width / 2, Game.canvas.height / 2 + 128);
        playButton.hoverColor = "rgb(220, 220, 220)";
        playButton.pressedColor = "rgb(200, 200, 200)";
        playButton.onClick = () => {
            SceneManager.loadScene(7);
        }

        const buttonImage = playButton.addComponent(UIImage);
        buttonImage.imageSource = "../src/assets/skip-button.png";
        buttonImage.pixelPerfect = true;

        const loreText = menu.addComponent(LoreText, { texts: [
            "Во многих вещах люди действительно умны и находчивы...",
            "Но когда дело доходит до эмоций...",
            "...",
            "У них тут же выключается мозг!",
            "Обрадовавшись тому, что они нашли тебя",
            "Они забыли запереть камеру",
            "Кажется, настало время быстро бегать!",
            "",
        ], nextScene: 7});
        loreText.transform.height = 32;
        loreText.transform.width = Game.canvas.width;
        loreText.transform.setAnchors(AnchorsPreset.center);
        loreText.pixelPerfect = true;
    }
}

export default JailLoreLevel;