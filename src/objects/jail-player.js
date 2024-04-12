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
    SceneManager,
} = elaria;

class JailPlayer extends Component {
    static FLOAT_RANGE = 5;
    static FLOAT_SPEED = 4;
    static MAX_SPEED = 700;
    static MIN_ACCELERATION = 15;
    static VERTICAL_CONTRACT = 100;
    static HORIZONTAL_CONTRACT = 100;

    constructor() {
        super("Player");
        this.velocity = new Vector2D(0, 0);
        this.acceleration = JailPlayer.MIN_ACCELERATION;
        this.friction = 0.90;
        this.delay = 0;
        this.loadSceneIndex = 0;
        this.age = 0;
    }

    awake() {
        this.transform.localPosition = new Vector2D(200, 80);
    }

    update(dt) {
        this.acceleration = Math.max(JailPlayer.MIN_ACCELERATION, this.acceleration + (Input.isKeyHold("ShiftLeft") ? 1 : -1) * this.acceleration * dt);

        if (Input.isKeyHold("KeyW")) {
            if (this.velocity.length <= JailPlayer.MAX_SPEED)
                this.velocity.y -= this.acceleration;
        }

        if (Input.isKeyHold("KeyA")) {
            if (this.velocity.length <= JailPlayer.MAX_SPEED)
                this.velocity.x -= this.acceleration;
        }

        if (Input.isKeyHold("KeyS")) {
            if (this.velocity.length <= JailPlayer.MAX_SPEED)
                this.velocity.y += this.acceleration;
        }

        if (Input.isKeyHold("KeyD")) {
            if (this.velocity.length <= JailPlayer.MAX_SPEED)
                this.velocity.x += this.acceleration;
        }

        this.transform.localPosition = this.transform.localPosition.add(new Vector2D(this.velocity.x * dt, this.velocity.y * dt));

        this.transform.localPosition = new Vector2D(
            clamp(-335, this.transform.localPosition.x, 335),
            clamp(-150, this.transform.localPosition.y, 176),  
        );

        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;

        this.age += dt;

        console.log(this.transform.localPosition);

        if(225 < this.transform.localPosition.x && this.transform.localPosition.x < 290 && this.transform.localPosition.y < -145) {
            SceneManager.loadScene(6);
        }
    }
}

export default JailPlayer;