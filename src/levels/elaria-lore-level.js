import ElariaLoreText from "../components/elaria-lore-text.js";

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

class ElariaLoreLevel extends SceneDescription {
    constructor() {
        super("Elaria Lore");
    }

    build() {
        const width = 480;
        const height = 384;
        const scale = Game.canvas.width / width;
        const menu = new GameObject("Menu", true);
        const menuSprite = menu.addComponent(Sprite, {
            imageSource: "../src/assets/elaria-lore-level.png", width: width * scale, height: height * scale
        });
        const menuSound = menu.addComponent(AudioSource, { source: "../src/assets/sounds/tolja frolov - lukewarm wind.mp3" });
        menuSound.play();
        menu.transform.position = new Vector2D(menuSprite.width / 2, menuSprite.height / 2);
        menuSprite.pixelPerfect = true;

        const playButton = new GameObject("Play Button", true).addComponent(Button);
        playButton.transform.width = 64;
        playButton.transform.height = 64;
        playButton.transform.position = new Vector2D(Game.canvas.width / 2, Game.canvas.height / 2 + 128);
        playButton.hoverColor = "rgb(220, 220, 220)";
        playButton.pressedColor = "rgb(200, 200, 200)";
        playButton.onClick = () => SceneManager.loadScene(3);

        const buttonImage = playButton.addComponent(UIImage);
        buttonImage.imageSource = "../src/assets/skip-button.png";
        buttonImage.pixelPerfect = true;

        const loreText = menu.addComponent(ElariaLoreText, { texts: [
            "...",
            "Какой сегодня чудный день!",
            "Наконец-то закончился дождик, и я могу погулять до поляны!",
            "Я так долго этого ждал!",
            "Пока мои друзья спят, можно посмотреть какие-нибудь новые места!!",
            "Но куда мне лучше пойти?",
            "Может, к водопаду за лесом?",
            "Или на пляж?",
            "Ладно, по дороге решу",
            "...",
            "...???",
            "Что это за шум?",
            "",
            "",
            "",
        ]});
        loreText.transform.height = 32;
        loreText.transform.width = Game.canvas.width;
        loreText.transform.setAnchors(AnchorsPreset.center);
        loreText.pixelPerfect = true;
    }
}

export default ElariaLoreLevel;