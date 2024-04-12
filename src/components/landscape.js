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
    Input,
    Game,
} = elaria;

class Landscape extends Component {
    constructor() {
        super("Landscape");
    }

    update() {
        this.getComponent(AudioSource).play();
    }
}

export default Landscape;