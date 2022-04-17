import React, {useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

function About() {
    
    const skillDB = [
        {
            delay : "600",
            p : "html5 & css3",
            svg : "/img/skill/HTML5CSS3-logo.svg"
        },
        {
            delay : "700",
            p : "ES5 & ES6",
            svg : "/img/skill/ES6-logo.svg"
        },
        {
            delay : "800",
            p : "SASS",
            svg : "/img/skill/sass-logo.svg"
        },
        {
            delay : "900",
            p : "React",
            svg : "/img/skill/react-logo.svg"
        },
        {
            delay : "1000",
            p : "Node.js",
            svg : "/img/skill/nodejs-logo.svg"
        },
        {
            delay : "1100",
            p : "jQuery",
            svg : "/img/skill/jquery-logo.svg"
        },
        {
            delay : "1200",
            p : "AWS",
            svg : "/img/skill/aws-logo.svg"
        },
        {
            delay : "1300",
            p : "MySQL",
            svg : "/img/skill/mysql-logo.svg"
        },
        {
            delay : "1400",
            p : "Bootstrap",
            svg : "/img/skill/bootstrap-logo.svg"
        },
        {
            delay : "1500",
            p : "Github",
            svg : "/img/skill/github-logo.svg"
        },
        {
            delay : "1600",
            p : "Figma",
            svg : "/img/skill/figma-logo.svg"
        },
        {
            delay : "1700",
            p : "Adobe Graphic Tool",
            svg : "/img/skill/graphic-logo.svg"
        }
    ]

    useEffect(() => {
        AOS.init({
            once : true,
            duration : 1000
        });
    })
    return(
        <section id='about'>
            <div className="vertical-align">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div data-aos="fade-up">
                                    <h3>About Me</h3>
                                    <p>내가 누구냐고?</p>
                                    <div className='gap'></div>
                                </div>
                                <div className='row row-cols-1 row-cols-lg-2'>
                                    <div className='introduce col row'>
                                        <div className='profile'>
                                            <h4 data-aos="fade-right" data-aos-delay="500">Profile</h4>
                                            <p>
                                                <span data-aos="fade-right" data-aos-delay="550">김신일 / KIM SHINIL</span>
                                                <span data-aos="fade-right" data-aos-delay="600">1995. 05. 17 (만 26세)</span>
                                                <span data-aos="fade-right" data-aos-delay="650">+82&#41; 010-9001-4560</span>
                                                <span data-aos="fade-right" data-aos-delay="700">heretics7@naver.com</span>
                                                <span data-aos="fade-right" data-aos-delay="750">서울시 구로구 거주</span>
                                                <span data-aos="fade-right" data-aos-delay="800">전주대학교 회계세무학과 졸업</span>
                                                <span data-aos="fade-right" data-aos-delay="850">ROTC 56기 육군 예비역 중위</span>
                                            </p>
                                        </div>
                                        <div className='cert'>
                                            <h4 data-aos="fade-right" data-aos-delay="1000">Certification</h4>
                                            <p>
                                                <span data-aos="fade-right" data-aos-delay="1050">구글 애널리틱스 ---- (2022.05)</span>
                                                <span data-aos="fade-right" data-aos-delay="1100">웹디자인 기능사 ---- (2022.04)</span>
                                                <span data-aos="fade-right" data-aos-delay="1150">GTQ 그래픽 1급 ---- (2022.03)</span>
                                                <span data-aos="fade-right" data-aos-delay="1200">전산회계 1급 ------- (2021.03)</span>
                                                <span data-aos="fade-right" data-aos-delay="1250">운전면허 1종 보통 -- (2018.02)</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='skill col' data-aos="fade-left" data-aos-delay="500">
                                        <h4>Skill</h4>
                                        <ul className='row row-cols-3'>
                                            {skillDB.map((skillArr) => {
                                                return(
                                                    <li className="col py-3" data-aos="fade-left" data-aos-delay={skillArr.delay}>
                                                        <img src={skillArr.svg} alt={skillArr.p} />
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;