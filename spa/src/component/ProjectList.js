import React, { Component } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


class About extends Component {
    constructor(props){
        super(props)
        this.state ={
            message : '서비스요청을 기다리는 중...',
            projectData : [],
        }
    }
    
    componentDidMount = async () => {
        try{
        axios.post('/api?type='+this.props.dbinfo.botable, {
            headers :{ 'Content-Type' : 'application/json' },
            body : { ...this.props.dbinfo }

        }).then( res => { 
            
            console.log(res.data) 
        
            try{
                this.setState({ projectData : [...res.data] })
                console.log(this.state.projectData)
            }
            catch(err){
                this.setState({ message : 'DB데이터타입검수바람 ' +  err});
            }
        }).catch( err => {
            this.setState({ message : '접속하였으나 처리하지 못함 ' +  err});
        })
        }
        catch(err){
            this.setState({ message : '서버접속불가 ' +  err});
        }

    }
    
    render() {
        const pagination = {
            clickable: true,
            renderBullet: function (index, className) {
            return('<span data-aos=\"fade-right\" data-aos-delay=\"' +  (this.state.projectData[index].delay) + '\"' + 'class="' + className + '">' + '<a href="#none">' + (this.state.projectData[index].name) + '</a>' + "</span>");
            },
        };
        
        return (
            <section id='swiper'>
                <div className='vertical-align'>
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div data-aos="fade-up">
                                        <h3 className='text-light'>{ this.state.projectData.length > 0 ? this.props.dbinfo.titlenm : this.state.message }</h3>
                                        <p className='text-light'>제가 작업한 프로젝트입니다.</p>
                                    </div>
                                    <div className="gap-sm"></div>
                                    <Swiper
                                        pagination={pagination}
                                        modules={[EffectFade, Pagination]}
                                        touchRatio={0}
                                        effect={"fade"}
                                        fadeEffect={true}
                                        className="position-relative"
                                    >
                                        {this.state.projectData.map(
                                            (content) => {
                                            return(
                                                <SwiperSlide key={ content.project_no }>
                                                    <img data-aos="fade-up" data-aos-delay="500" src={content.project_src} alt={content.project_title} />
                                                    <h5 data-aos="fade-up" data-aos-delay="600">{content.project_title}</h5>
                                                    <p data-aos="fade-up" data-aos-delay="700">
                                                        {content.skillDB.map((skill) => {
                                                            return(<span>{skill}</span>)
                                                        })}
                                                    </p>
                                                    <div className="gap-sm"></div>
                                                    <div data-aos="fade-up" data-aos-delay="800" className="plan">
                                                        <a href={content.project_plan} target="_blank">제작노트</a>
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
}

export default About;