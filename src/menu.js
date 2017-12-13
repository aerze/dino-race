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

    dino.animations.add('idle', [0, 1, 2, 3], 15, true)

    return dino
  }

  /**
   * Create text with some defaults
   * @param {number} x
   * @param {number} y
   * @param {string} content
   */
  makeText (x, y, content) {
    const fontOptions = { font: '26px Arial', fill: '#FFFFFF' }
    const text = this.game.add.text(x, y, content, fontOptions)
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

    const vita = this.createCharacterSelect(150, 200, 'vita')
    const mort = this.createCharacterSelect(350, 200, 'mort')
    const tard = this.createCharacterSelect(150, 400, 'tard')
    const doux = this.createCharacterSelect(350, 400, 'doux')
  }
}

export default MainState
