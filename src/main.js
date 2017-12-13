import Phaser from 'phaser-ce'

import BootState from './boot'
import LoadState from './load'
import MenuState from './menu'
import GameState from './game'

const game = new Phaser.Game(512, 512, Phaser.AUTO, 'canvas')
game.state.add('boot', new BootState(game))
game.state.add('load', new LoadState(game))
game.state.add('menu', new MenuState(game))
game.state.add('game', new GameState(game))
game.state.start('boot')

window.game = game
