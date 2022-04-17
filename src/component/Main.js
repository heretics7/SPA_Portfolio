import React from "react";

function Main() {
    return (
    <section id="main">
        <div className="vertical-align">
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="textbox">
                                <h1>I'm Front-end
                                    <br/>
                                    Developer
                                </h1>
                                <p>
                                    안녕하세요. 프론트엔드 개발자 김신일입니다.
                                    <br/>
                                    제 포트폴리오에 와주셔서 감사합니다.
                                </p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Main;