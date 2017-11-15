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
    this.game.load.atlas('vita', '/assets/dino/vita.png', '/assets/dino/vita.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY)
    this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE
    this.game.scale.setUserScale(4, 4)
    this.game.renderer.renderSession.roundPixels = true
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
  }

  create () {
    // create player and animations
    this.game.stage.backgroundColor = '#534D41'
    const vita = this.game.add.sprite(0, 0, 'vita')

    vita.animations.add('idle', [0, 1, 2, 3], 10, true)
    vita.animations.add('move', [4, 5, 6, 7, 8, 9], 10, true)
    vita.animations.add('kick', [10, 11, 12], 10, true)
    vita.animations.add('hurt', [13, 14, 15, 16], 10, true)
    vita.animations.add('crouch', [17], 10, true)
    vita.animations.add('sneak', [18, 19, 20, 21, 22, 23], 10, true)

    vita.animations.play('move')
  }

  update () {
    // handle button logic
  }
}

export default MainState
