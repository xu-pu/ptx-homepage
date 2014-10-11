'use strict';

var TILE_TYPES = {
    SINGLE: 0,
    TRIPPLE: 1
};

var CONTENT_TYPES = {
    THUMBNAIL: 0,
    EXPANDABLE: 1
};

module.exports = [

    {
        name: 'single',
        caption: 'this is a single tile',
        tileType: TILE_TYPES.SINGLE,
        contentType: CONTENT_TYPES.THUMBNAIL,
        image: '/src/images/nabla.jpg',
        tile: []
    },

    {
        name: 'tripple',
        caption: 'this is a tripple tile',
        tileType: TILE_TYPES.TRIPPLE,
        contentType: CONTENT_TYPES.THUMBNAIL,
        image: '/src/images/profile.jpg',
        tiles: []
    }

];

module.exports.TILE_TYPES = TILE_TYPES;
module.exports.CONTENT_TYPES = CONTENT_TYPES;