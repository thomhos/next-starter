require('dotenv').config()

import express from 'express'
import next from 'next'
import { handleExpress } from 'next-routing-tools'
import { routes } from './routes'
import { env } from './utils'

const port = env.PORT || 3000
const dev = env.NODE_ENV !== 'production'

const app = next({ dev, dir: __dirname })
const server = express()

app.prepare().then(() => {
    server.get('*', handleExpress(routes, app))

    server.listen(port, (err: Error) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
