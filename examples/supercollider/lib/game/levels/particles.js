ig.module('game.levels.particles')
    .requires('impact.image', 'game.entities.explosion-horizontal', 'plusplus.entities.checkpoint', 'plusplus.entities.levelchange', 'game.entities.villain-friendly', 'plusplus.entities.conversation')
    .defines(function() {
        LevelParticles = /*JSON[*/ {
            "entities": [{
                "type": "EntityExplosionHorizontal",
                "x": 124,
                "y": -52,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 304
                    }
                }
            }, {
                "type": "EntityExplosionHorizontal",
                "x": 96,
                "y": -52,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 304
                    }
                }
            }, {
                "type": "EntityCheckpoint",
                "x": 208,
                "y": 96,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "name": "right"
                }
            }, {
                "type": "EntityLevelchange",
                "x": 64,
                "y": 32,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 96
                    },
                    "levelName": "ui",
                    "playerSpawnerName": "right"
                }
            }, {
                "type": "EntityCheckpoint",
                "x": 152,
                "y": 96,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 32
                    },
                    "name": "left"
                }
            }, {
                "type": "EntityLevelchange",
                "x": 304,
                "y": 32,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 96
                    },
                    "levelName": "obstacles",
                    "playerSpawnerName": "left"
                }
            }, {
                "type": "EntityVillainFriendly",
                "x": 32,
                "y": 104
            }, {
                "type": "EntityConversation",
                "x": 160,
                "y": 112,
                "settings": {
                    "steps": {
                        "1": {
                            "name": "villain",
                            "text": "we've got all kinds of particles, including fully dynamic and super fast!"
                        },
                        "2": {
                            "name": "villain",
                            "text": "with drawing, we can push about ten thousand fast particles on screen at sixty fps with some browsers"
                        },
                        "3": {
                            "name": "villain",
                            "text": "on the other hand, we'd recommend no more than five hundred fully dynamic particles at a time"
                        }
                    },
                    "participate": {
                        "1": "player"
                    },
                    "size": {
                        "x": 56,
                        "y": 16
                    },
                    "autoAdvance": "false",
                    "target": {
                        "1": "villain"
                    },
                    "cameraFollows": "false"
                }
            }, {
                "type": "EntityExplosionHorizontal",
                "x": 152,
                "y": -52,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 304
                    }
                }
            }, {
                "type": "EntityExplosionHorizontal",
                "x": 180,
                "y": -52,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 304
                    }
                }
            }, {
                "type": "EntityExplosionHorizontal",
                "x": 208,
                "y": -52,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 304
                    }
                }
            }, {
                "type": "EntityExplosionHorizontal",
                "x": 236,
                "y": -52,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 304
                    }
                }
            }, {
                "type": "EntityExplosionHorizontal",
                "x": 264,
                "y": -52,
                "settings": {
                    "size": {
                        "x": 16,
                        "y": 304
                    }
                }
            }],
            "layer": [{
                "name": "collision",
                "width": 23,
                "height": 10,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "",
                "repeat": false,
                "preRender": false,
                "distance": 1,
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, {
                "name": "details",
                "width": 23,
                "height": 10,
                "linkWithCollision": false,
                "visible": 1,
                "tilesetName": "media/tileset_details.png",
                "repeat": false,
                "preRender": false,
                "distance": "1",
                "tilesize": 16,
                "foreground": false,
                "data": [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 217, 216, 216, 216, 216, 216, 216, 216, 216, 216, 216, 216, 216, 216, 216, 217, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }]
        } /*]JSON*/ ;
        LevelParticlesResources = [new ig.Image('media/tileset_details.png')];
    });
