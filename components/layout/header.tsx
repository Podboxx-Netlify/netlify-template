import React from "react";
import Link from 'next/link'
import DarkMode from "../dark-mode";

export default function Header({...props}) {

    return (
        <header className="bg-hero mb-12 bg-black bg-gray-300 dark:bg-opacity-0">
            <ul className="flex items-center justify-center lg:container px-4 py-1 mx-auto text-sm text-black dark:text-white md:px-6">
                <li className="site-header text-main-dark dark:text-white text-5xl text-center justify-self-center select-none">
                    <Link href="/">
                        <a>{props.data.title}</a>
                    </Link>
                </li>
            </ul>
            <ul className="flex items-center text-center justify-center lg:container px-5 my-auto text-md text-black dark:text-white md:px-6 flex-wrap select-none">
                <li className='mb-5'>
                    {props.data.fb_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.fb_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Facebook
                        </a>
                    </>
                    }
                    {props.data.twitter_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.twitter_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Twitter
                        </a>
                    </>
                    }
                    {props.data.youtube_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.youtube_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Youtube
                        </a>
                    </>
                    }
                    {props.data.google_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.google_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Google
                        </a>
                    </>
                    }
                    {props.data.apple_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.apple_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Itunes
                        </a>
                    </>
                    }
                    {props.data.spotify_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.spotify_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Spotify
                        </a>
                    </>
                    }
                    {props.data.linkedin_url !== null &&
                    <>
                        <a className='select-none first:hidden last:hidden'> | </a>
                        <a
                            href={props.data.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-red-500"
                        >
                            Linkedin
                        </a>
                    </>
                    }
                </li>
            </ul>
            <DarkMode/>
        </header>
    );
}