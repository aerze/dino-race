import Phaser from 'phaser-ce'

class MainState {
  /**
   * Creates new state
   * @param {Phaser.Game} game
   */
  constructor (game) {
    this.game = game
  }

  /**
   * Create dino sprite
   * @param {number} x
   * @param {number} y
   * @param {string} name
   */
  loadDino (x, y, name) {
    const dino = this.game.add.sprite(x, y, name)

    dino.texture.baseTexture.scaleMode = window.PIXI.scaleModes.NEAREST
    dino.anchor.set(0.5)
    dino.scale.set(4)

    dino.animations.add('idle', [0, 1, 2, 3], 10, true)
    dino.animations.play('idle')
    return dino
  }

  /**
   * Create text with some defaults
   * @param {number} x
   * @param {number} y
   * @param {string} content
   */
  makeText (x, y, content) {
    const text = this.game.add.bitmapText(x, y, 'white', content)
    text.anchor.set(0.5)
    return text
  }

  /**
   * Enable input on sprites
   * @param {Phaser.Sprite} sprite
   */
  enableInput (sprite) {
    sprite.inputEnabled = true
    sprite.events.onInputDown.add((dino) => {
      this.game.state.start('game', true, false, { dino: dino.key })
    })
  }

  createCharacterSelect (x, y, name) {
    const dino = this.loadDino(x, y, name)
    this.makeText(x, y - 60, name)
    this.enableInput(dino)
    return dino
  }

  create () {
    this.game.stage.backgroundColor = '#3E80BE'

    this.makeText(this.game.canvas.width / 2, 60, 'Choose a Dino')

    const text = this.makeText(this.game.canvas.width / 2, 85, 'Full screen')
    text.inputEnabled = true
    text.events.onInputDown.add(this.fullScreen, this)

    const vita = this.createCharacterSelect(150, 200, 'vita')
    const mort = this.createCharacterSelect(350, 200, 'mort')
    const tard = this.createCharacterSelect(150, 400, 'tard')
    const doux = this.createCharacterSelect(350, 400, 'doux')

    this.game.input.gamepad.start()
    this.connect(this.game.input.gamepad.pad1)
    this.connect(this.game.input.gamepad.pad2)
    this.connect(this.game.input.gamepad.pad3)
    this.connect(this.game.input.gamepad.pad4)
  }

  /**
   * Attach gamepad event listeners
   * @param {Phaser.SinglePad} gamepad
   */
  connect (gamepad) {
    gamepad.addCallbacks(this, {
      onConnect () {
        console.log(`P${gamepad.index + 1}`, 'connect', gamepad)
      },
      onDisconnect () {
        console.log(`P${gamepad.index + 1}`, 'disconnect', gamepad)
      },
      onDown (code) {
        console.log(`P${gamepad.index + 1}`, 'down', code)
      },
      onUp (code) {
        console.log(`P${gamepad.index + 1}`, 'up', code)
      },
      onAxis (gamepad, axis, value) {
        console.log(`P${gamepad.index + 1}`, 'axis', axis, value)
      },
      onFloat (gamepad) {
        console.log(`P${gamepad.index + 1}`, 'float', gamepad)
      }
    })
  }

  render () {
    // this.game.debug.inputInfo(32, 32)
  }

  fullScreen () {
    if (this.game.scale.isFullScreen) {
      this.game.scale.stopFullScreen()
    } else {
      this.game.scale.startFullScreen()
    }
  }
}

export default MainState
