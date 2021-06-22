import Link from 'next/link'
import DarkMode from "../dark-mode";
import React from "react";

export default function Header({...props}) {
    // console.log(props)
    // console.log(props.data.title)
    return (
        <header className="bg-hero mb-12">
            <ul className="flex items-center justify-center lg:container px-4 py-1 mx-auto text-sm text-white md:px-6">
                <li className="site-header text-white text-5xl text-center justify-self-center">
                    <Link href="/">
                        {/*oi*/}
                        <a>{props.data.title}</a>
                    </Link>
                </li>
            </ul>
            <ul className="flex items-center text-center justify-center lg:container px-5 my-auto text-md text-white md:px-6 flex-wrap">
                <li className='mb-5'>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:text-red-500"
                    >
                        Facebook
                    </a>
                    <a className='select-none'> | </a>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:text-red-500"
                    >
                        Twitter
                    </a>
                    <a className='select-none'> | </a>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:text-red-500"
                    >
                        Youtube
                    </a>
                    <a className='select-none'> | </a>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:text-red-500"
                    >
                        Google
                    </a>
                    <a className='select-none'> | </a>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:text-red-500"
                    >
                        Itunes
                    </a>
                    <a className='select-none'> | </a>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:text-red-500"
                    >
                        Spotify
                    </a>
                    {/*{props.data.linkedin_url !== null &&*/}
                    <>
                        <a className='select-none'> | </a>
                        <a
                            href="https://github.com/oddstronaut/next-starter-tailwind"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Linkedin
                        </a>
                    </>
                    {/*}*/}
                </li>
            </ul>
            <DarkMode data={{data: ''}}/>
        </header>
    );
}