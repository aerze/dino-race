import Phaser from 'phaser-ce'

class MainState {
  /**
   * Creates new state
   * @param {Phaser.Game} game 
   */
  constructor (game) {
    this.game = game
  }

  preload () {
    // load spritesheet
    this.game.load.atlasJSONHash('vita', '/assets/dino/vita.png', '/assets/dino/vita.json')
    this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE
    this.game.scale.setUserScale(4, 4)
    this.game.renderer.renderSession.roundPixels = true
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
  }

  create () {
    // create player and animations
    this.game.stage.backgroundColor = '#534D41'
    const vita = this.game.add.sprite(0, 0, 'vita')
  }

  update () {
    // handle button logic
  }
}

export default MainState
