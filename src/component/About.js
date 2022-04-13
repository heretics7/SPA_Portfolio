import React from "react";

function App() {
    return (
    <section id="about" className="position-relative">
        <div className="inner">
            <div className="textbox d-none d-lg-block position-absolute">
                <p></p>
                <h3>I'm Front-end
                    <br/>
                    Developer
                </h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
        <div className="imgbox d-none d-lg-block">
            <div className="tagimg d-none d-xxl-block position-absolute">
                <img className="tagleft" src="/img/tagleft.png" alt="tagleft"/>
                <img className="tagright" src="/img/tagright.png" alt="tagright"/>
            </div>
            <div className="mainimg position-absolute">
                <img src="/img/mainimg.png" alt="mainimg"/>
            </div>
        </div>
        <div className="m-imgbox d-lg-none position-absolute start-50 translate-middle-x">
            <div className="">
                <img src="/img/mainimg.png" alt="m-mainimg"/>
            </div>
        </div>
    </section>
    );
}

export default App;