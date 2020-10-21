const Redis = require("ioredis");
const utils = require("ioredis/built/utils")
class RedisClient {
    constructor(settings) {
        this._client = new Redis(settings.url);
        initRedisSettings(settings.expireAtQuery);
    }

    set = async (key, value) => {
        return await  this._client.set(key, value);
    }
}
module.exports = RedisClient;
 function initRedisSettings(expireAtQuery) {
    Redis.Command.setArgumentTransformer("set", function (args) {
        if (args.length === 2) {
            return [...args].concat(utils.convertObjectToArray(expireAtQuery));
        }
        return args;
      });
 }