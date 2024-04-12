const {
    AnchorsPreset,
    AudioSource,
    GameObject,
    SceneDescription,
    Sprite,
    Vector2D,
    Button,
    UIImage,
    AnimatedSprite,
    SpriteSheet,
    Text,
    Animation,
    Game,
} = elaria;

import Bubble from "../components/bubble.js";
import Camera from "../components/camera.js";
import Landscape from "../components/landscape.js";
import StarSniffer from "../components/star-sniffer.js";
import Player from "../objects/player.js";

class ElariaLevel extends SceneDescription {
    constructor() {
        super("Elaria");
    }

    build() {
        const camera = new GameObject("Camera");
        camera.addComponent(Camera, {});

        const landscape = new GameObject("Landscape");
        const landscapeSprite = landscape.addComponent(Sprite, {
            imageSource: "../src/assets/elaria-level.png", width: 800, height: 480
        });
        const landscapeAudio = landscape.addComponent(AudioSource, { source: "../src/assets/sounds/meadow-ambience.mp3" });
        landscapeAudio.loop = true;
        landscape.transform.localScale = new Vector2D(3, 3);
        landscape.addComponent(Landscape, {});
        landscapeSprite.pixelPerfect = true;
        landscape.transform.setParent(camera.transform, false);

        const player = new GameObject("Player");
        const playerSprite = player.addComponent(Sprite, {
            imageSource: "../src/assets/bouble-sand.png"
        });
        player.addComponent(Player, {landscapeAudio});
        player.transform.localScale = new Vector2D(3, 3);
        playerSprite.pixelPerfect = true;
        player.transform.setParent(camera.transform, false);

        const bubble = new GameObject("Bubble", true);

        console.log(bubble);

        const bubbleComponent = bubble.addComponent(Bubble, { displayingText: "Найди, что это такое шумит!" });
        bubbleComponent.transform.height = 32;
        bubbleComponent.transform.width = Game.canvas.width;
        bubbleComponent.transform.setAnchors(AnchorsPreset.topLeft);

        const astronaut = new GameObject("Astronaut").addComponent(AnimatedSprite);
        astronaut.transform.setParent(camera.transform, false);
        astronaut.transform.localPosition = new Vector2D(-781, 234);
        astronaut.width = 16 * 4;
        astronaut.height = 32 * 4;
        astronaut.pixelPerfect = true;
        const astronautIdle = new Animation(
            "idle",
            "../src/assets/astronaut.png",
            new SpriteSheet(16, 32, 7, 7),
            0.75,
            "forward",
            true
        );
        astronaut.addAnimation(astronautIdle);
        astronaut.playAnimation("idle");

        const starSniffer = new GameObject("Star Sniffer").addComponent(AnimatedSprite);
        starSniffer.transform.setParent(camera.transform, false);
        starSniffer.transform.localPosition = new Vector2D(-900, 0);
        starSniffer.width = 48 * 4;
        starSniffer.height = 160 * 4;
        starSniffer.pixelPerfect = true;
        const starSnifferIdle = new Animation(
            "idle",
            "../src/assets/star-sniffer.png",
            new SpriteSheet(48, 160, 1, 1),
            0.75,
            "forward",
            true
        );
        starSniffer.addAnimation(starSnifferIdle);
        starSniffer.playAnimation("idle");
    }
}

export default ElariaLevel;