import { useEffect } from 'react';
import { useState } from 'react';

// import logo
import logo from '../assets/logo.svg';
import { HiMenu } from 'react-icons/hi';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticy, setIsStiky] = useState(false);

    // toggle menubtn
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // function for making navbar sticky when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsStiky(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className='w-full fixed top-0 left-0 right-0'>
            <nav className={`py-4 md:px-12 px-4 bg-white ${isSticy ? "sticky top-0 left-0 right-0 bg-white": " "}`}>
                {/* for large devices */}
                <div className="flex items-center justify-between">
                    {/* logo */}
                    <div className="cursor-pointer">
                        <img src={logo} alt="logo" className="h-10" />
                    </div>
                    {/* menu item for large devices  */}
                    <div className="lg:flex items-center gap-3 hidden text-body">
                        <a
                            href="/"
                            className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-600"
                        >
                            Home
                        </a>
                        <a
                            href="/"
                            className="block py-2 px-4 cursor-pointer text-body hover:text-gray-600"
                        >
                            Portfolio
                        </a>{' '}
                        <a
                            href="/"
                            className="block py-2 px-4 cursor-pointer text-body hover:text-gray-600"
                        >
                            About Me
                        </a>
                        <a
                            href="/"
                            className="block py-2 px-4 cursor-pointer text-body hover:text-gray-600"
                        >
                            Testimonals
                        </a>
                    </div>
                    <div className="lg:block hidden">
                        <button className="outlineBtn">Contact Me</button>
                    </div>
                    {/* menu btn for mobile devices  */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-body text-3xl"
                    >
                        <HiMenu />
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="mt-4 p-4 bg-body rounded-lg text-white">
                        <a
                            href="/"
                            className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-600"
                        >
                            Home
                        </a>
                        <a
                            href="/"
                            className="block py-2 px-4 cursor-pointer text-body hover:text-gray-600"
                        >
                            Portfolio
                        </a>{' '}
                        <a
                            href="/"
                            className="block py-2 px-4 cursor-pointer text-body hover:text-gray-600"
                        >
                            About Me
                        </a>
                        <a
                            href="/"
                            className="block py-2 px-4 cursor-pointer text-body hover:text-gray-600"
                        >
                            Testimonals
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
