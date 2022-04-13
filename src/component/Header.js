import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

function Header() {

    const vh = (v) => {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (v * h) / 100;
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

    const btnclick = () => {
        const navi = document.getElementById('gnb');
        navi.classList.toggle('m-navi');
    }

    return (
        <header id="hd" className={scrollPosition >= vh(100) && scrollPosition < 1970 ? "active" : " "}>
            <nav className="d-flex justify-content-between align-items-center">
                <h1 className="logo">
                    <Link to="about"><a href="#none"><img src="/img/logo.svg" alt="logo"/></a></Link>
                </h1>
                <div id="gnb">
                    <div className='navi'>
                        <ul className="d-none d-lg-flex flex-column flex-lg-row justify-content-lg-center align-items-lg-center">
                            <li><Link to="process"><a href="#none">Process</a></Link></li>
                            <li><Link to="ability"><a href="#none">Ability</a></Link></li>
                            <li><Link to="project"><a href="#none">Project</a></Link></li>
                            <li><Link to="contact"><a href="#none">Contact</a></Link></li>
                            <li className="d-none d-lg-block"><a href="https://github.com/heretics7" target="_blank" className="btn_git">GitHub 바로가기</a></li>
                        </ul> 
                    </div>
                    <div className='m-btn d-block d-lg-none'>
                        <a href="#none" className="d-block py-3" onClick={btnclick}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}


export default Header;