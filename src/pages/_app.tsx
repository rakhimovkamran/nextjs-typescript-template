import type { AppProps } from "next/app"
import "assets/styles/index.css"

function Application({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default Application
