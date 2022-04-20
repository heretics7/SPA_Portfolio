import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function App() {

    const projectDB = [
        {
            name : "포트폴리오",
            src : "/img/portfolio.png",
            delay : "500",
            skillDB : ["SPA","MySQL","Node.js","React","Bootstrap","RESTful API","AWS"],
            plan : "#none"
        },
        {
            name : "리액트",
            src : "/img/portfolio.png",
            delay : "550",
            skillDB : ["SPA","MySQL","Node.js","React","Bootstrap","RESTful API","AWS"],
            plan : "#none"
        },
        {
            name : "그누보드",
            src : "/img/portfolio.png",
            delay : "600",
            skillDB : ["SPA","MySQL","Node.js","React","Bootstrap","RESTful API","AWS"],
            plan : "#none"
        },
        {
            name : "협업",
            src : "/img/portfolio.png",
            delay : "650",
            skillDB : ["SPA","MySQL","Node.js","React","Bootstrap","RESTful API","AWS"],
            plan : "#none"
        },
    ]

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
        return('<span data-aos=\"fade-right\" data-aos-delay=\"' +  (projectDB[index].delay) + '\"' + 'className="' + className + '">' + '<a href="#none">' + (projectDB[index].name) + '</a>' + "</span>");
        },
    };

    return (
        <section id="swiper">
            <div className="vertical-align">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div data-aos='fade-up'>
                                    <h3>Project</h3>
                                    <p>프로젝트</p>
                                </div>
                                <div className='gap-sm'></div>
                                <Swiper
                                    pagination={pagination}
                                    modules={[EffectFade, Pagination]}
                                    touchRatio={0}
                                    effect={"fade"}
                                    fadeEffect={true}
                                    className="position-relative"
                                >
                                    {projectDB.map((projectArr) => {
                                        return(
                                            <SwiperSlide>
                                                <img data-aos="fade-up" data-aos-delay="500" src={projectArr.src} alt={projectArr.name} />
                                                <h5 data-aos="fade-up" data-aos-delay="600">{projectArr.name}</h5>
                                                <p data-aos="fade-up" data-aos-delay="700">
                                                    {projectArr.skillDB.map((skill) => {
                                                        return(<span>{skill}</span>)
                                                    })}
                                                </p>
                                                <div className="gap-sm"></div>
                                                <div data-aos="fade-up" data-aos-delay="800" className="plan">
                                                    <a href="#none">제작노트</a>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
