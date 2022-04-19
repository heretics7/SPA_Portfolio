import React, { useEffect, useState } from 'react';
import useWindowSize from '../hook/useWindowsize';
import { Link } from 'react-scroll';

function Header() {
    
    const size = useWindowSize();

    const vh = (v) => {
        var h = Math.max(size.height, window.innerHeight || 0);
        return (v * h) / 100;
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);

        updateScroll();
        
        return () => window.removeEventListener("scroll", updateScroll);
    });

    const navi = document.getElementById('gnb');

    const btnclick = () => {
        navi.classList.toggle('m-navi');
    }
    const navclick = () => {
        if(navi.classList.contains('m-navi')){
            navi.classList.remove('m-navi');
        }
    }

    return (
        <header id="hd" className={scrollPosition >= vh(200) && scrollPosition < vh(300) ? "active" : " "}>
            <nav className="d-flex justify-content-between align-items-center">
                <h1 className="logo">
                    <Link to="main"><a href="#none"><img src="/img/logo.svg" alt="logo"/></a></Link>
                </h1>
                <div id="gnb" className="">
                    <div className='navi'>
                        <ul className="d-none d-lg-flex flex-column flex-lg-row justify-content-lg-center align-items-lg-center">
                            <li><Link to="about"><a href="#none" onClick={navclick}>About</a></Link></li>
                            <li><Link to="process"><a href="#none" onClick={navclick}>Process</a></Link></li>
                            <li><Link to="swiper"><a href="#none" onClick={navclick}>Project</a></Link></li>
                            <li><Link to="contact"><a href="#none" onClick={navclick}>Contact</a></Link></li>
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