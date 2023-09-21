import { Hono } from 'hono'
import { cache } from 'hono/cache'
import Main from "./main"

const app = new Hono()

app.get('/', (c) => Main(c))
app.get(
    '*',
    cache({
        cacheName: 'Online Edit Picture',
        cacheControl: 'max-age=3600',
    })
)

export default app