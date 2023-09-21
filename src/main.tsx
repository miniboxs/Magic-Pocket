import { Context } from "hono";
import { Page } from "./pages/page"

export default function (c: Context) {
    const { source } = c.req.query()
    if (!source) {
        return c.text('我的发，Excuse me baby，你丢失了source：["ft","sd"]')
    } else {
        return c.html(<Page source={source.trim()} />)
    }
}