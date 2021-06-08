(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    window.opspark.platform = window.opspark.platform || {};
    
    opspark.platform.factory = function (game) {
        game.platforms = game.add.group();
        game.platforms.enableBody = true;
        
        function create(x, y, scaleX, scaleY, immovable) {
            var platform = game.platforms.create(x, y, 'platform');
            platform.scale.setTo(scaleX || 1, scaleY || 1);
            platform.body.immovable = immovable || true;
            return platform;
        }
        opspark.platform.create = create;
    };
})(window);
/*
createPlatform(x, y, scaleX, scaleY);
 
x: The x coordinate for the platform.
y: The y coordinate for the platform.
scaleX: OPTIONAL The scale factor on the x-axis, this value will stretch the platform in width.
scaleY: OPTIONAL The scale factor on the y-axis, this value will stretch the platform in height.
*/


createPlatform(400, 460);           // normal platform
createPlatform(300, 200, 0.3)       // small horizontal platform (30% the normal width)
createPlatform(500, 500, 0.3, 10)   // tall vertical wall (30% the normal width and 10x the height)
/*
createCollectable(type, x, y, gravity, bounce);

type: The type of the collectable. 
x: The x coordineate for the collectable.
y: The y coordineate for the collectable.
gravity: OPTIONAL The gravitational pull on the collectable.
bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
*/
createCollectable(type.steve, 200, 170, 6, 0.7);
type.db         // worth 10 points
type.max        // worth 20 points
type.steve      // worth 30 points
type.grace      // worth 40 points
type.kennedi    // worth 50 points