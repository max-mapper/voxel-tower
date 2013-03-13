# voxel-tower

an example/template node module for voxel.js.

places a tower of voxels at some specific game position.

### install it

```
npm install voxel-tower
```

## API

### var tower = require('voxel-tower')(game, options)

pass in your voxel-engine instance as `game`. `options` is an optional object that defaults to:

```js
{
  "height": 5,
  "material": "brick"
}
```

### tower.place(position)

places your tower at some position. `position` is an array vector game position, e.g. [1, 1, 1]

## license

BSD