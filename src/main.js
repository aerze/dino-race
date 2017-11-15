import Phaser from 'phaser-ce'
import MainState from './state'

const game = new Phaser.Game(128, 128, Phaser.AUTO, 'canvas')
game.state.add('main', new MainState(game))
game.state.start('main')
