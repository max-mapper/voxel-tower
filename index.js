// a convenience function, usage:
// var tower = require('voxel-tower')(game)
// if we did module.exports = Tower then the usage would
// have to be:
// var Tower = require('voxel-tower')
// var tower = new Tower()
module.exports = function(game, opts) {
  return new Tower(game, opts)
}

// expose the Tower constructor so that it is available
// in case someone wants to access the .prototype methods, etc
module.exports.Tower = Tower

function Tower(game, opts) {
  // protect against people who forget 'new'
  if (!(this instanceof Tower)) return new Tower(game, opts)

  // we need to store the passed in variables on 'this'
  // so that they are available to the .prototype methods
  this.game = game
  this.opts = opts || {}
  this.height = this.opts.height || 5
  this.material = this.opts.material || 'brick'
}

// creates a new stack of voxels
// usage:
// var tower = require('voxel-tower')(game, { height: 5 })
// tower.place([5, 30, 0])
Tower.prototype.place = function(position) {
  for (var i = 1; i < this.height + 1; i++) {
    var pos = [position.x, position.y + i, position.z]
    this.game.setBlock(pos, this.material)
  }
}