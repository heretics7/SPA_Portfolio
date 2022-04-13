import React from 'react';

function Project() {
    return(
        <section id='project'>
            <div className='inner'>
                <div>
                    <h3>Project</h3>
                    <p></p>
                </div>
                <div>
                    <div className="swiper-container">
                        <ul>
                            <li data-aos="fade-right"><a data-toggle="tab" href="#home">Strategy Consulting</a></li>
                            <li data-aos="fade-right" data-aos-delay="50"><a data-toggle="tab" href="#menu1">Brand Experience</a></li>
                            <li data-aos="fade-right" data-aos-delay="100"><a data-toggle="tab" href="#menu2">Web·App Development</a></li>
                            <li data-aos="fade-right" data-aos-delay="150"><a data-toggle="tab" href="#menu3">Digital Marketing</a></li>
                        </ul>
                    </div>
                    <div className='content'>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;