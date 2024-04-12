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

class LoreLevel extends SceneDescription {
    constructor() {
        super("Lore");
    }

    build() {
        const width = 480;
        const height = 384;
        const scale = Game.canvas.width / width;
        const menu = new GameObject("Menu", true);
        const menuSprite = menu.addComponent(Sprite, {
            imageSource: "../src/assets/lore-level.png", width: width * scale, height: height * scale
        });
        const menuSound = menu.addComponent(AudioSource, { source: "../src/assets/sounds/tolja frolov - star sniffer.mp3" });
        menuSound.loop = true;
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
            SceneManager.loadScene(2);
            menuSound.pause();
        }

        const buttonImage = playButton.addComponent(UIImage);
        buttonImage.imageSource = "../src/assets/skip-button.png";
        buttonImage.pixelPerfect = true;

        const loreText = menu.addComponent(LoreText, { texts: [
            "Однажды",
            "Где-то в 3090 году,",
            "технологии людей развились до предела.",
            "",
            "Долететь до соседней звезды стало пустяком.",
            "Всего 5 часов - и перед тобой другой мир.",
            "Но людскую глупость они так и не победили...",
            "...",
            "Земля перестала радовать голубым сиянием просторы Вселенной...",
            "Теперь она - пустыня, изрытая котлованами и рвами",
            "Серая, сухая, и безжизненная.",
            "Зеленый цвет здесь излучают только баннеры полуразрушенных небоскребов.",
            "...",
            "Людей осталось всего лишь около десятка тысяч.",
            "Все они живут в отдалённых друг от друга городах.",
            "...",
            "Люди не могли так больше жить...",
            "Воды и еды почти не осталось",
            "И люди начали поиски на других планетах",
            "Кампания Kapture, проводимая одной из космических корпораций",
            "заключалась в поиске богатых ресурсами планет",
            "...",
            "Ах, если бы они догадались просто переселиться на одну из таких",
            "Не-е-ет...",
            "Вместо этого, они жестоко грабили их,",
            "превращая звёздные оазисы в такие же серые планеты, как и их дом.",
            "Вместо любопытных исследователей, о которых писали в фантастических книжках,",
            "человечество будущего превратилось в межгалактических разбойников.",
            "Но как-то на радары космического корабля Star Sniffer...",
            "...попалась любопытная планета",
            "Элария",
            "",
            "",
        ], menuSound, nextScene: 2});
        loreText.transform.height = 32;
        loreText.transform.width = Game.canvas.width;
        loreText.transform.setAnchors(AnchorsPreset.center);
        loreText.pixelPerfect = true;
    }
}

export default LoreLevel;