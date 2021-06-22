import '../styles/globals.scss'

// function MyApp({Component, pageProps}) {
//     return (
//             <Component {...pageProps} />
//     )
// }


function MyApp({ Component, pageProps, websiteData }) {
    return <Component {...pageProps} website={websiteData} />
}

MyApp.getInitialProps = async (Component, ctx) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
    const res = await fetch(`http://localhost:4000/api/${process.env.station_id}/website`)
    const websiteData = await res.json()
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
  // const appProps = await App.getInitialProps(appContext);
    return { pageProps, websiteData };
  // return { ...appProps }
}

export default MyApp
//static async getInitialProps(ctx) {
//         const res = await fetch(`http://localhost:4000/api/${process.env.station_id}/website`)
//         const website = await res.json()
//         const initialProps = await Document.getInitialProps(ctx)
//         return {...initialProps, website}
//     }
// export default MyApp
