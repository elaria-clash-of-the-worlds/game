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

class Bubble extends Component {
    #visible;
    #updateCount = 0;
    charactersVisible = 0;
    displayingText;
    color;

    constructor() {
        super("Bubble");
    }

    awake() {
        this.#visible = false;
        this.text = this.addComponent(Text);
        this.text.text = " ";
        this.text.font = "30px Ari-W9500 Display";
        this.text.color = this.color ?? "white";
        this.text.fontSize = 123;
        this.updateRate = 5;
    }

    update(dt) {
        if (this.displayingText.length === this.charactersVisible) {
            return;
        }

        this.#updateCount += 1;
        if (this.#updateCount >= this.updateRate) {
            this.#updateCount = 0;
            this.text.text += this.displayingText[this.charactersVisible++];
        }

        console.log(this.text.text);
    }

    set visible(newVisible) {
        this.#visible = newVisible;
    }
}

export default Bubble;