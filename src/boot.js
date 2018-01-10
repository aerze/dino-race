import Phaser from 'phaser-ce'

class BootState {
  /**
   * Creates new state
   * @param {Phaser.Game} game
   */
  constructor (game) {
    this.game = game
  }

  create () {
    // this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT
    // this.game.scale.setUserScale(4, 4)
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
    this.game.renderer.renderSession.roundPixels = false

    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.game.state.start('load')
  }
}

export default BootState
