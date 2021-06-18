import Document, {Html, Head, Main, NextScript} from 'next/document'
import Footer from "../components/layout/footer";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head/>
                    {/*<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>*/}
                    {/*<link*/}
                    {/*    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons&display=swap"*/}
                    {/*    rel="stylesheet"/>*/}
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument