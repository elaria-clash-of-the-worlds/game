const {Game, SceneManager} = elaria;
import CaughtLevel from "./levels/caught-level.js";
import ElariaLevel from "./levels/elaria-level.js";
import ElariaLoreLevel from "./levels/elaria-lore-level.js";
import LoreLevel from "./levels/lore-level.js";
import MenuLevel from "./levels/menu-level.js";
import JailLevel from "./levels/jail-level.js";
import JailLoreLevel from "./levels/jail-lore-level.js";
import CorridorLevel from "./levels/corridor-level.js";
import EscapeLevel from "./levels/escape-level.js";

const canvas = document.getElementById("elaria-game-canvas");
const game = new Game(canvas);
const menu = new MenuLevel();
const lore = new LoreLevel();
const elariaLore = new ElariaLoreLevel();
const planet = new ElariaLevel();
const caught = new CaughtLevel();
const jail = new JailLevel();
const jailLore = new JailLoreLevel();
const corridor = new CorridorLevel();
const escapeLore = new EscapeLevel();

SceneManager.registerScene(menu);
SceneManager.registerScene(lore);
SceneManager.registerScene(elariaLore);
SceneManager.registerScene(planet);
SceneManager.registerScene(caught);
SceneManager.registerScene(jail);
SceneManager.registerScene(jailLore);
SceneManager.registerScene(corridor);
SceneManager.registerScene(escapeLore);

game.start();