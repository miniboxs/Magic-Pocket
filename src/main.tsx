import { Context } from "hono";
import { Page } from "./pages/page"

export default function (c: Context) {
    return c.html(<Page />)
}