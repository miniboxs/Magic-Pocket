import { Hono } from 'hono'
import { cache } from 'hono/cache'
import Main from "./main"

const app = new Hono()

app.get('/', (c) => Main(c))
app.get('*', cache({ cacheName: 'Magic Pocket', cacheControl: 'max-age=3600', }))

export default app