import type { FC } from 'hono/jsx'
import { Layout } from '../layout/layout'

export const Page: FC = () => {
    return (
        <Layout>
            <iframe src={'https://fabfilters.online/'} frameborder="0" width="100%" height="100%"></iframe>
            <div style="text-align:center;margin:5px 0;">Power by Jesmora</div>
        </Layout>
    )
}