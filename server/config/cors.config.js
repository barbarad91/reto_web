const cors = require('cors')

const whitelist = [process.env.DOMAIN]

const corsOptions = {
  origin: (origin, cb) => {
    const vercelRegex = /https:\/\/reto-web.*\.vercel\.app/
    const originIsWhitelisted = whitelist.includes(origin) || vercelRegex.test(origin)
    cb(null, originIsWhitelisted)
  },
  credentials: true,
}

module.exports = (app) => app.use(cors(corsOptions))
