require('dotenv').config()

// DB connection
require('./config/db.config')

const server = require('./config/apollo.config')

server.listen({ port: process.env.PORT }).then(({ url }) => console.log(`Server is running on ${url}`))
