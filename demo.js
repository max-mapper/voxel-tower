// __dirname is the current working directory, we pass it in to
// the textures module and receive back the path from here to where
// the textures are located
var textures = require('painterly-textures')(__dirname)
var game = require('voxel-hello-world')({texturePath: textures})
var tower = require('./')(game)

// make a tower appear after 5 seconds at the players position
setTimeout(function() {
  tower.place(game.controls.target().avatar.position)
}, 5000)