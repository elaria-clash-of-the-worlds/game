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

class CaughtLevel extends SceneDescription {
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
        const menuSound = menu.addComponent(AudioSource, { source: "../src/assets/sounds/tolja frolov - i can touch that cloud!.mp3" });
        menuSound.play();
        menu.transform.position = new Vector2D(menuSprite.width / 2, menuSprite.height / 2);
        menuSprite.pixelPerfect = true;

        const playButton = new GameObject("Play Button", true).addComponent(Button);
        playButton.transform.width = 64;
        playButton.transform.height = 64;
        playButton.transform.position = new Vector2D(Game.canvas.width / 2, Game.canvas.height / 2 + 128);
        playButton.hoverColor = "rgb(220, 220, 220)";
        playButton.pressedColor = "rgb(200, 200, 200)";
        playButton.onClick = () => {
            SceneManager.loadScene(5);
            menuSound.pause();
        }

        const buttonImage = playButton.addComponent(UIImage);
        buttonImage.imageSource = "../src/assets/skip-button.png";
        buttonImage.pixelPerfect = true;

        const loreText = menu.addComponent(LoreText, { texts: [
            "Бедный бубл...",
            "Он всю жизнь жил в гармонии с природой и в чистой доброте",
            "Он никогда не видел людей",
            "Поэтому, доверился...",
            "...",
            "Странный металлический щелчок пронзил тишину",
            "Ты в клетке?",
            "Неужели тебя просто вот так заберут!?",
            "Хотя, почему я удивляюсь",
            "Элария на воображаемом галактическом кладбище далеко не первая",
            "",
            "...",
            "",
            "Спустя какое-то время",
            "",
            "...",
            "",
            "клетка распахивается...",
            "Кажется, тебя доставили на Землю...",
            "",
        ], menuSound, nextScene: 5});
        loreText.transform.height = 32;
        loreText.transform.width = Game.canvas.width;
        loreText.transform.setAnchors(AnchorsPreset.center);
        loreText.pixelPerfect = true;
    }
}

export default CaughtLevel;