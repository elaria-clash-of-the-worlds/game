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
    SceneManager,
} = elaria;

class ElariaLoreText extends Component {
    #visible;
    #updateCount = 0;
    charactersVisible = 0;
    texts;
    textIndex;

    constructor() {
        super("Bubble");
        this.textIndex = 0;
    }

    awake() {
        this.#visible = false;
        this.text = this.addComponent(Text);
        this.text.text = " ";
        this.text.font = "30px Ari-W9500 Display";
        this.text.color = "#9de64e";
        this.text.fontSize = 123;
        this.updateRate = 5;
        this.narrator = this.addComponent(AudioSource, { source: "../src/assets/sounds/bouble.mp3" });
        this.narrator.loop = true;
    }

    update(dt) {
        if (this.textIndex === this.texts.length) {
            SceneManager.loadScene(3);
            return;
        }

        if (this.texts[this.textIndex].length === this.charactersVisible) {
            this.narrator.pause();
            this.textIndex += 1;
            this.#updateCount = -100;
            return;
        }

        if(this.#updateCount === -1) {
            this.charactersVisible = 0;
            this.text.text = "";
        }

        if(this.#updateCount === 0) {
            this.narrator.play();
        }

        this.#updateCount += 1;
        if (this.#updateCount >= this.updateRate) {
            this.#updateCount = 0;
            this.text.text += this.texts[this.textIndex][this.charactersVisible++];
            if (this.texts[this.textIndex].length !== this.charactersVisible)
                this.text.text += this.texts[this.textIndex][this.charactersVisible++];
        }

        console.log(this.text.text);
    }

    set visible(newVisible) {
        this.#visible = newVisible;
    }
}

export default ElariaLoreText;