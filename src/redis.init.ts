import * as redis from 'redis';

export class RedisInit {
    redisObj: any;
    //--------------------------------------------------------------
    constructor() { }
    //--------------------------------------------------------------
    initRedis(app: any) {
        this.redisObj = redis.createClient();
        this.redisObj.on('connect', () => {
            console.log('Redis Connect');
        })
        this.redisObj.on('error', (err) => {
            console.log(err);
        })
        app.locals.redis = this.redisObj;
    }
    //--------------------------------------------------------------
}