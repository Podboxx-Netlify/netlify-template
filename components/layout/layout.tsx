import Header from './header'
import Footer from './footer'

export default function Layout({...props}) {
    return (
        <>
            <Header/>
            <div className='container mx-auto'>
                {props.children}
            </div>
            <Footer/>
        </>
    );
}