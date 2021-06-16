import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'

function MyApp({Component, pageProps}) {
    console.log("enter");
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
