import Phaser from 'phaser-ce'

class GameState {
  /**
   * Creates new state
   * @param {Phaser.Game} game
   */
  constructor (game) {
    this.game = game
  }

  init (options) {
    this.dinoKey = options.dino || 'vita'
  }

  preload () {
    this.game.load.tilemap('tilemap', 'assets/dino-map.json', null, Phaser.Tilemap.TILED_JSON)
    this.game.load.image('tiles', 'assets/spritesheet_fix.png')
  }

  create () {

    this.map = this.game.add.tilemap('tilemap')
    this.map.addTilesetImage('k5', 'tiles')

    this.backgroundLayer1 = this.map.createLayer('background1')
    this.backgroundLayer2 = this.map.createLayer('background2')
    this.groundLayer = this.map.createLayer('platforms')
    // this.groundLayer.anchor.setTo(1, 0)
    // this.groundLayer.position.setTo(0, this.game.canvas.height)

    this.map.setCollisionBetween(1, 999, true, 'platforms')

    this.groundLayer.resizeWorld()

    this.dino = this.game.add.sprite(0, 0, this.dinoKey)

    this.game.physics.arcade.enable(this.dino)

    this.dino.body.bounce.y = 0.2
    this.dino.body.gravity.y = 2000
    this.dino.body.gravity.x = 20
    this.dino.body.velocity.x = 100

    this.game.camera.follow(this.dino)

    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.game.input.mouse.capture = true
  }

  update () {
    this.game.physics.arcade.collide(this.dino, this.groundLayer)

    if (this.cursors.up.isDown || this.game.input.activePointer.leftButton.isDown) {
      this.dino.body.velocity.y = -500
    }
  }
}

export default GameState
