export default function Footer() {
    return (
        <footer className="site-footer mt-12 object-none object-bottom">
            <p className="select-none">&copy; {new Date().getFullYear()} <a
                 // INSERT TITLE HERE
                className="-primary">TommyBlog</a> &bull; Powered by &nbsp;
                <a target="_blank" rel="noreferrer" href="https://www.podboxx.com">PodBoxx</a></p>
        </footer>
    );
}