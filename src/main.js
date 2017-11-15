import Phaser from 'phaser-ce'
import MainState from './state'

const game = new Phaser.Game(400, 450)
game.state.add('main', MainState(game))
game.state.start('main')
