import React from 'react';

function Project() {
    return(
        <section id='project'>
            <div className="vertical-align">
                <div className="content">
                    <div className='container'>
                        <div className="row">
                            <div className="col-12">
                                <div data-aos='fade-up'>
                                    <h3>Project</h3>
                                    <p>프로젝트</p>
                                </div>
                                <div className='gap-sm'></div>
                                <div className='row'>
                                    <div className="swiper col-12 col-lg-4">
                                        <ul className='row row-cols-4 row-cols-lg-1'>
                                            <li className='col' data-aos="fade-right" data-aos-delay="500"><a data-toggle="tab" href="#home">포트폴리오</a></li>
                                            <li className='col' data-aos="fade-right" data-aos-delay="550"><a data-toggle="tab" href="#menu1">리액트프로젝트</a></li>
                                            <li className='col' data-aos="fade-right" data-aos-delay="600"><a data-toggle="tab" href="#menu2">그누보드</a></li>
                                            <li className='col' data-aos="fade-right" data-aos-delay="650"><a data-toggle="tab" href="#menu3">협업</a></li>
                                        </ul>
                                    </div>
                                    <div className='project col-12 col-lg-8'>
                                        {/* map으로 돌릴거임 */}
                                            <div className='projectbox' data-aos="fade-up" data-aos-delay="500">
                                                <div className="projectimg">
                                                </div>
                                                <div className="projecttext">
                                                    <h5>포트폴리오</h5>
                                                    <p>
                                                        <span>SPA</span>
                                                        <span>MySQL</span>
                                                        <span>Node.js</span>
                                                        <span>Bootstrap</span>
                                                        <span>React</span>
                                                        <span>RESTful API</span>
                                                        <span>AWS</span>
                                                        <span>RDS</span>
                                                    </p>
                                                    <div className='gap-sm'></div>
                                                    <div className="plan">
                                                        <a href="#none">제작노트</a>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* map으로 돌릴거임 */}
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

export default Project;