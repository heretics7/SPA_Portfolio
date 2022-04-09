import React from "react";

function App() {
    return (
    <section id="about" className="position-relative">
        <div className="d-none d-lg-block">
            <div className="tagimg d-none d-xl-block">
                <img className="tagleft" src="/img/tagleft.png" alt="tagleft"/>
                <img className="tagright" src="/img/tagright.png" alt="tagright"/>
            </div>
            <div className="mainimg position-absolute">
                <img src="/img/mainimg.png" alt="mainimg"/>
            </div>
        </div>
    </section>
    );
}

export default App;