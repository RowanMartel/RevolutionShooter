// game constants
export const STAGE_WIDTH:number = 640;
export const STAGE_HEIGHT:number = 480;
export const FRAME_RATE:number = 30;
export const STARTING_AMMO:number = 5;
export const MAX_AMMO:number = 10;
export const PLAYER_SPEED:number = 10;
export const SLOW_SPEED:number = 5;
export const ENEMY_POOL:number = 20;
export const STARTING_LIVES:number = 4;
export const MAX_LIVES:number = 10;
export const ENEMY_BULLETS:number = 5;
export const FLAG_POOL:number = 20;

export const ASSET_MANIFEST:Object[] = [
    {
        type:"json",
        src:"./lib/sprites/sprites.json",
        id:"sprites",
        data:0
    },
    {
        type:"image",
        src:"./lib/sprites/sprites.png",
        id:"sprites",
        data:0
    },
    {
        type:"json",
        src:"./lib/sprites/background.json",
        id:"background",
        data:0
    },
    {
        type:"image",
        src:"./lib/sprites/background.png",
        id:"background",
        data:0
    },
    {
        type:"json",
        src:"./lib/sprites/glyphs.json",
        id:"glyphs",
        data:0
    },
    {
        type:"image",
        src:"./lib/sprites/glyphs.png",
        id:"glyphs",
        data:0
    },
    {
        asset:"sound",
        src:"./lib/sounds/behead.ogg",
        id:"behead",
        data:5
    },
    {
        asset:"sound",
        src:"./lib/sounds/enemyHit.ogg",
        id:"enemyHit",
        data:5
    },
    {
        asset:"sound",
        src:"./lib/sounds/extraLife.ogg",
        id:"extraLife",
        data:5
    },
    {
        asset:"sound",
        src:"./lib/sounds/gameOver.ogg",
        id:"gameOver",
        data:5
    },
    {
        asset:"sound",
        src:"./lib/sounds/pickup.ogg",
        id:"pickup",
        data:5
    },
    {
        asset:"sound",
        src:"./lib/sounds/playerHit.ogg",
        id:"playerHit",
        data:5
    },
    {
        asset:"sound",
        src:"./lib/sounds/start.ogg",
        id:"start",
        data:5
    },
];