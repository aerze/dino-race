import Phaser from 'phaser-ce'

class LoadState {
  /**
   * Creates new state
   * @param {Phaser.Game} game
   */
  constructor (game) {
    this.game = game
  }

  loadAtlas (name) {
    this.game.load.atlas(name, `/assets/dino/${name}.png`, `/assets/dino/${name}.json`, Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY)
  }

  preload () {
    const fontOptions = { font: '30px Papyrus', fill: '#ffffff' }
    this.game.add.text(8, 8, 'loading..', fontOptions)

    this.game.load.bitmapFont('black', 'assets/PressStart2P_24.png', 'assets/PressStart2P_24.fnt')
    this.game.load.bitmapFont('white', 'assets/PressStart2P_24w.png', 'assets/PressStart2P_24w.fnt')

    this.loadAtlas('vita')
    this.loadAtlas('doux')
    this.loadAtlas('mort')
    this.loadAtlas('tard')
  }

  create () {
    this.game.state.start('menu')
  }
}

export default LoadState
