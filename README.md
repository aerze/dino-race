# Dino Race
#### A [San Diego JS Community][sdjs] Built Phaser Game.

This game is being built piece by piece at each [SDJS GameDev Night Meetup][sdjs-meetup].
Every night we try to add new features to the game.
Each time learning new parts of the massive Phaser API.

## Game

The idea is to make a local multiplayer side-scrolling running game (similar Super Mario Bros.)

## Features
Game or Phaser API Features that we'd like to see implementation examples for.

Implemented:
- [x] Sprite Sheets
- [x] Sprite Sheet Animation
- [x] Full Screen 
- [x] Bitmap Font


Desired Features:
- [ ] Platforming Physics
- [ ] Camera (Side-Scrolling)
- [ ] Multiplayer Controller Input
- [ ] Music
- [ ] Sound Effects
- [ ] Gamepad support for menu

Bugs:
- [ ] Camera/World scaling
- [ ] Assets with improper color


## How to help

If you have an idea or feature you'd like to add, make a pull request.

I'll try to add as much to the game so long as it adheres to the goal of learning something new or showing alternative implementations existing code.

[It would be especially awesome if you would present on your PR at one of the meetups.][sdjs-speak]

## Notes

### Spritesheets

First you need assets, this has typically been the most difficult for me.
I know I'm _not_ a great artist but there are plenty of people who will share their talents for free.

The dinosaur assets are coming from [@ScissorMarks](https://twitter.com/ScissorMarks), you can check out the page here https://arks.itch.io/dino-characters

I've used the Aseprite files to view the spritesheet and re-export them, this time with the matching json files.
Phaser can import and read these json files and automatically slice the sprite sheet into the separate animations that were tagged in Aseprite.

[sdjs]: http://sandiegojs.org/
[sdjs-speak]: http://sandiegojs.org/speak
[sdjs-meetup]: https://www.meetup.com/sandiegojs 
