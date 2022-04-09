import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="hd" className='position-fixed'>
                <nav className="navi d-flex justify-content-between align-items-center py-3">
                    <h1 className="logo">
                        <a href="#none">
                            <img src="/img/logo.svg" alt="logo"/>
                        </a>
                    </h1>
                    <div className="menu">
                        <ul className="gnb d-none d-lg-flex align-items-center">
                            <li><a href="#none" >Process</a></li>
                            <li><a href="#none" >Ability</a></li>
                            <li><a href="#none" >Project</a></li>
                            <li><a href="#none" >Contact</a></li>
                            <li><a href="#none" onclick="javascript:alert('깃허브'); return false;" class="btn_git">GitHub 바로가기</a></li>
                        </ul>
                        <div className='navibtn d-block d-lg-none'>
                            <a href="#none" className="ham d-block py-3">
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
}

export default Header;