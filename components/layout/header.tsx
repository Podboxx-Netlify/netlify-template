import React from "react";
import Link from 'next/link'
import DarkMode from "../dark-mode";

export default function Header({...props}) {

    return (
        <header className="dark:bg-hero mb-12">
            <ul className="flex items-center justify-center lg:container px-4 py-1 mx-auto text-sm text-black dark:text-white md:px-6">
                <li className="site-header text-main-dark dark:text-white text-5xl text-center justify-self-center select-none">
                    <Link href="/">
                        <a>{props.data?.title || 'Loading...'}</a>
                    </Link>
                </li>
            </ul>
            {props.data && props.data.my_podboxx &&
            <ul
                className="flex items-center text-center justify-center lg:container px-5 my-auto text-md text-black dark:text-white md:px-6 flex-wrap select-none">
                <li>
                    {props.data.fb_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.my_podboxx?.fb_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Facebook
                        </a>
                    </>
                    }
                    {props.data.my_podboxx?.twitter_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.my_podboxx?.twitter_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Twitter
                        </a>
                    </>
                    }
                    {props.data.my_podboxx?.youtube_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.my_podboxx?.youtube_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Youtube
                        </a>
                    </>
                    }
                    {props.data.my_podboxx?.google_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.my_podboxx?.google_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Google
                        </a>
                    </>
                    }
                    {props.data.my_podboxx?.apple_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.my_podboxx?.apple_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Itunes
                        </a>
                    </>
                    }
                    {props.data.my_podboxx?.spotify_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.my_podboxx?.spotify_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Spotify
                        </a>
                    </>
                    }
                    {props.data.my_podboxx?.linkedin_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.my_podboxx?.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Linkedin
                        </a>
                    </>
                    }
                </li>
            </ul>}
            <ul className="flex items-end text-right justify-end lg:container select-none mt-3 md:mt-0">
                <DarkMode/>
            </ul>
        </header>
    );
}