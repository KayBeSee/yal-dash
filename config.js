module.exports = {
  PORT:                     process.env.PORT || 3000,

  mongoUrl:                 process.env.MONGO_URL || 'mongodb://localhost:27017/YAL',
  mongoUser:                process.env.mongoUser,
  mongoPass:                process.env.mongoPass,
  facebook_api_key:         process.env.facebook_api_key || '692945770843019',
  facebook_api_secret:      process.env.facebook_api_secret || 'b217798f8c49810c6b86cf4395d7b0d0',
  facebook_callback_url:    process.env.facebook_callback_url || '/login/facebook/callback',

  isDev:                    process.env.NODE_ENV || true,



  redis: {
    host:                   process.env.redisHost || 'localhost',
    port:                   process.env.redisPort || 6379,
    auth:                   process.env.redisAuth || 'null',
    key:                    process.env.redisKey || 'yal.sid',
    secret:                 process.env.redisSecret || 'mises',
    cookie:                 null,
  },

  client: {
        apiUrl:             process.env.PORT || "http://localhost:3000",
        debugMode:          true
    }

};


