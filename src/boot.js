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
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL

    this.game.renderer.renderSession.roundPixels = false

    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.game.state.start('load')
  }
}

export default BootState
