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
import JailPlayer from "../objects/jail-player.js";
import Player from "../objects/player.js";

class JailLevel extends SceneDescription {
    constructor() {
        super("Elaria");
    }

    build() {
        const camera = new GameObject("Camera");
        camera.addComponent(Camera, {});

        const jail = new GameObject("Landscape");
        const jailSprite = jail.addComponent(Sprite, {
            imageSource: "../src/assets/jail-level.png", width: 240, height: 128
        });
        jail.transform.localScale = new Vector2D(3, 3);
        jailSprite.pixelPerfect = true;
        jail.transform.setParent(camera.transform, false);

        const player = new GameObject("Player");
        const playerSprite = player.addComponent(Sprite, {
            imageSource: "../src/assets/bouble-sand.png"
        });
        player.addComponent(JailPlayer, {});
        player.transform.localScale = new Vector2D(3, 3);
        playerSprite.pixelPerfect = true;
        player.transform.setParent(camera.transform, false);

        const bubble = new GameObject("Bubble", true);

        console.log(bubble);

        const bubbleComponent = bubble.addComponent(Bubble, { displayingText: "Выберись отсюда!", color: "black" });
        bubbleComponent.transform.height = 32;
        bubbleComponent.transform.width = Game.canvas.width;
        bubbleComponent.transform.setAnchors(AnchorsPreset.topLeft);
    }
}

export default JailLevel;