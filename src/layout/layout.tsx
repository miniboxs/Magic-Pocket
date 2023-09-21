import type { FC } from 'hono/jsx'

export const Layout: FC = (props) => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                <title>Online Edit Picture</title>
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}
