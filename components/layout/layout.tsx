import Header from './header'
import Footer from './footer'
import VerticalAd from "../vertical-ad";
import Socials from "../socials"
import React from "react";
import DarkMode from "../dark-mode";
import useSWR from 'swr'

export function GetWebsite() {
    const { data, error } = useSWR(`http://localhost:4000/api/${process.env.station_id}/website`)
    if (error) return <span className='text-2xl text-white'>failed to load</span>
    if (!data) return <span className='text-2xl text-white'>loading...</span>
    return data
}

export default function Layout({...props}) {
    const website = GetWebsite()
    return (
        <div className="flex flex-col min-h-screen">
            <Header data={website}/>
            {/*<Socials data={props.data}/>*/}
            <div className='container mx-auto flex-grow'>
                {props.children}
            </div>
            <VerticalAd/>
            <Footer data={website}/>
        </div>
    );
}