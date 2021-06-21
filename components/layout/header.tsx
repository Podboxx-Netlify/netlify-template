import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-hero mb-12">
            <ul className="flex items-center justify-center lg:container px-4 py-1 mx-auto text-sm text-white md:px-6">
                <li className="site-header text-white text-5xl text-center justify-self-center">
                    <Link href="/">
                        Tommy&apos;s Blog
                    </Link>
                </li>
            </ul>
            <ul className="flex items-center text-center justify-center lg:container px-5 my-auto text-md text-white md:px-6 flex-wrap">
                <li className='mb-5'>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                    >
                        Facebook
                    </a>
                    <a> | </a>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                    >
                        Twitter
                    </a>
                    <a> | </a>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                    >
                        Youtube
                    </a>
                    <a> | </a>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                    >
                        Google
                    </a>
                    <a> | </a>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                    >
                        Itunes
                    </a>
                    <a> | </a>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                    >
                        Spotify
                    </a>
                    <a> | </a>
                    <a
                        href="https://github.com/oddstronaut/next-starter-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                    >
                        Linkedin
                    </a>
                </li>
            </ul>
        </header>
    );
}