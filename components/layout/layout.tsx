import Header from './header'
import Footer from './footer'
import VerticalAd from "../vertical-ad";
import React from "react";
import DarkMode from "../dark-mode";

export default function Layout({...props}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header data={props.website}/>

            <div className='container mx-auto flex-grow z-10'>
                {props.children}
            </div>
            <VerticalAd/>
            <Footer data={props.website}/>
        </div>
    );
}