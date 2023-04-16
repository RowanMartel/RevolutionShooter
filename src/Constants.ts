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
];