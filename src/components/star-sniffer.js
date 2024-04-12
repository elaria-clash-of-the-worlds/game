import clamp from "../math/limits.js";

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
    Component,
    Debug,
    Input,
    Game,
} = elaria;

class StarSniffer extends Component {
    constructor() {
        super("Player");
    }

    awake() {
        this.transform.localPosition = new Vector2D(0, 0);
    }

    update(dt) {
    }
}

export default StarSniffer;