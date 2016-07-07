# YAL Dashboard

## A better way to manage YAL's network.

Created by [Kevin Mulcrone] using [Node.js], [AmpersandJS], and [MongoDB].

"I have always believed that technology should do the hard work - discovery, organization, communication - so users can do what makes them happiest: living and loving, not messing with annoying computers!" - Larry Page


## Installation
Download and install [MongoDB] and [Redis]
```
git clone https://github.com/KayBeSee/yal-dash.git
npm install
mongod
redis-server
npm start
```

By default, mongo runs at `mongodb://localhost:27017/YAL` and redis runs at port `6379`.

## How to use
A user account is required to log into the dashboard and manipulate objects. Therefore, send a POST request to `localhost:3000/api/users` with an `email` and `password` property. Additional parameters can be added from the front end once logged in.

[Kevin Mulcrone]: <http://KayBeSee.com>
[Node.js]: <https://nodejs.org/en/>
[AmpersandJS]: <http://ampersandjs.com>
[MongoDB]: <https://www.mongodb.org/>
[Redis]: <http://redis.io/>

