export default function Footer() {
    return (
        // <footer className="footer">
        //     <hr/>
        //     <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        //         <li>
        //             Created by
        //             <a
        //                 href="https://taylorbryant.dev/"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 className="font-bold"
        //             >
        //                 Taylor Bryant
        //             </a>
        //         </li>
        //
        //         <li>
        //             Powered by
        //         </li>
        //
        //         <li>
        //             <a
        //                 href="https://github.com/oddstronaut/next-starter-tailwind"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 className="font-bold"
        //             >
        //                 GitHub
        //             </a>
        //         </li>
        //     </ul>
        // </footer>
        <footer className="site-footer mt-12">
            <p>&copy; {new Date().getFullYear()} <a
                 // INSERT TITLE HERE
                className="-primary">TommyBlog</a> &bull; Powered by &nbsp;
                <a target="_blank" rel="noreferrer" href="https://www.podboxx.com">PodBoxx</a></p>
        </footer>
    );
}