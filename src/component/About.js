import React from "react";

function App() {
    return (
    <section id="about" className="position-relative">
        <div className="inner">
            <div className="textbox">
                <p></p>
                <h3>I'm Front-end
                    <br/>
                    Developer
                </h3>
                <p>
                    안녕하세요. 프론트엔드 개발자 김신일입니다.
                    <br/>
                    제 포트폴리오에 와주셔서 감사합니다.
                </p>
            </div>
        </div>
        <div className="imgbox">
            <div className="tagimg d-none d-xxl-block position-absolute">
                <img className="tagleft" src="/img/tagleft.png" alt="tagleft"/>
                <img className="tagright" src="/img/tagright.png" alt="tagright"/>
            </div>
            <div className="mainimg position-absolute">
                <img src="/img/mainimg.png" alt="mainimg"/>
            </div>
        </div>
    </section>
    );
};

export default App;