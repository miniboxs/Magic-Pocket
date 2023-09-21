import type { FC } from 'hono/jsx'

export const Layout: FC = (props) => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="A magical pocket that embraces all rivers" />
                <meta name="keywords" content="free ai,free images,free ps,free filter" />
                <link rel="shortcut icon" href="https://public.aisb.top/e06e8a0ef1a018d7b6944df936f2a3c1/HEDHPqP.png"></link>
                <title>Magic Pocket</title>
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}