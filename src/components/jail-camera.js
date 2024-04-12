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
    Input,
    Game,
} = elaria;

class Camera extends Component {
    static FLOAT_RANGE = 5;
    static FLOAT_SPEED = 4;
    static MAX_SPEED = 700;
    static MIN_ACCELERATION = 15;
    static VERTICAL_CONTRACT = 200;
    static HORIZONTAL_CONTRACT = 600;

    constructor() {
        super("Camera");
        this.velocity = new Vector2D(0, 0);
        this.acceleration = Camera.MIN_ACCELERATION;
        this.friction = 0.90;
        this.delay = 0;
        this.loadSceneIndex = 0;
        this.age = 0;
    }

    update(dt) {
        if (Input.isKeyHold("KeyW")) {
            if (this.velocity.length <= Camera.MAX_SPEED)
                this.velocity.y += this.acceleration;
        }

        if (Input.isKeyHold("KeyA")) {
            if (this.velocity.length <= Camera.MAX_SPEED)
                this.velocity.x += this.acceleration;
        }

        if (Input.isKeyHold("KeyS")) {
            if (this.velocity.length <= Camera.MAX_SPEED)
                this.velocity.y -= this.acceleration;
        }

        if (Input.isKeyHold("KeyD")) {
            if (this.velocity.length <= Camera.MAX_SPEED)
                this.velocity.x -= this.acceleration;
        }

        this.transform.localPosition = this.transform.localPosition.add(new Vector2D(this.velocity.x * dt, this.velocity.y * dt));
        this.transform.localPosition = new Vector2D(
            clamp(Camera.HORIZONTAL_CONTRACT, this.transform.localPosition.x, Game.canvas.width - Camera.HORIZONTAL_CONTRACT),
            clamp(Camera.VERTICAL_CONTRACT, this.transform.localPosition.y, Game.canvas.height - Camera.VERTICAL_CONTRACT),  
        );

        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;
    }
}

export default Camera;