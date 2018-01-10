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
    // load sprite sheet
    this.game.load.atlas('vita', '/assets/dino/vita.png', '/assets/dino/vita.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY)
    this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE
    this.game.scale.setUserScale(4, 4)
    this.game.renderer.renderSession.roundPixels = true
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
  }

  create () {
    // create player and animations
    this.game.stage.backgroundColor = '#534D41'
    this.vita = this.game.add.sprite(0, 0, 'vita')
    this.vita.anchor.set(0.5, 0.5)

    this.vita.animations.add('idle', [0, 1, 2, 3], 15, true)
    this.vita.animations.add('move', [4, 5, 6, 7, 8, 9], 16, true)
    this.vita.animations.add('kick', [10, 11, 12], 10, true)
    this.vita.animations.add('hurt', [13, 14, 15, 16], 10, true)
    this.vita.animations.add('crouch', [17], 10, true)
    this.vita.animations.add('sneak', [18, 19, 20, 21, 22, 23], 10, true)

    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.physics.arcade.gravity.y = 300

    this.game.physics.enable(this.vita, Phaser.Physics.ARCADE)

    this.vita.body.collideWorldBounds = true
    this.vita.body.gravity.y = 1000
    this.vita.body.maxVelocity.y = 500

    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
  }

  update () {
    // handle button logic
    this.vita.body.velocity.x = 0

    if (this.cursors.left.isDown) {
      this.vita.body.velocity.x = -150
      this.vita.scale.x = -1
      this.vita.animations.play('move')
    } else if (this.cursors.right.isDown) {
      this.vita.body.velocity.x = 150
      this.vita.scale.x = 1
      this.vita.animations.play('move')
    } else {
      this.vita.animations.play('idle')
    }

    if (this.jumpButton.isDown && this.vita.body.onFloor()) {
      this.vita.body.velocity.y = -500
    }
  }
}

export default MainState
