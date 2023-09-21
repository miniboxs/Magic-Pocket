import type { FC } from 'hono/jsx'
import { Layout } from '../layout/layout'

export const Page: FC = (props: any) => {
    const { source } = props
    const item: { [key: string]: string } = {
        "sd": "https://camenduru-com-webui-docker.hf.space/?__theme=light/",
        "ft": "https://fabfilters.online/"
    }
    return (
        <Layout>
            <iframe src={item[source]} frameborder="0" width="100%" height="100%"></iframe>
            <div style="text-align:center;margin:5px 0;">Power by Jesmora</div>
        </Layout>
    )
}