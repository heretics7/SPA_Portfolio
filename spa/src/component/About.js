import React, { Component } from 'react';
import axios from 'axios';
import AOS from 'aos';
import "aos/dist/aos.css";

class About extends Component {
    constructor(props){
        super(props)
        this.state ={
            message : '서비스요청을 기다리는 중...',
            skillData : [],
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
                this.setState({ skillData : [...res.data] }) 
                console.log(this.state.skillData)
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
        AOS.init({
            once : true,
            duration : 1000
        });
    }

    render() {
        return (
            <section id='about'>
            <div className="vertical-align">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div data-aos="fade-up">
                                    <h3>About Me</h3>
                                    <p>저를 소개합니다.</p>
                                    <div className='gap-sm'></div>
                                </div>
                                <div className='row row-cols-1 row-cols-lg-2'>
                                    <div className='introduce col row'>
                                        <div className='profile'>
                                            <h4 data-aos="fade-right" data-aos-delay="500">Profile</h4>
                                            <p>
                                                <span data-aos="fade-right" data-aos-delay="600">김신일 / KIM SHINIL</span>
                                                <span data-aos="fade-right" data-aos-delay="650">1995. 05. 17 (만 26세)</span>
                                                <span data-aos="fade-right" data-aos-delay="700">+82&#41; 010-9001-4560</span>
                                                <span data-aos="fade-right" data-aos-delay="750">heretics7@naver.com</span>
                                                <span data-aos="fade-right" data-aos-delay="800">서울시 구로구 거주</span>
                                                <span data-aos="fade-right" data-aos-delay="850">전주대학교 회계세무학과 졸업</span>
                                                <span data-aos="fade-right" data-aos-delay="900">ROTC 56기 육군 예비역 중위</span>
                                            </p>
                                        </div>
                                        <div className='cert'>
                                            <h4 data-aos="fade-right" data-aos-delay="1000">Certification</h4>
                                            <p>
                                                <span data-aos="fade-right" data-aos-delay="1100">웹디자인 기능사&#40;2022.04&#41;</span>
                                                <span data-aos="fade-right" data-aos-delay="1150">GTQ 그래픽 1급&#40;2022.03&#41;</span>
                                                <span data-aos="fade-right" data-aos-delay="1200">전산회계 1급&#40;2021.03&#41;</span>
                                                <span data-aos="fade-right" data-aos-delay="1250">운전면허 1종 보통&#40;2018.02&#41;</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='skill col' data-aos="fade-left" data-aos-delay="500">
                                        <h4>{ this.state.skillData.length > 0 ? this.props.dbinfo.titlenm : this.state.message }</h4>
                                        <ul className='row row-cols-3'>
                                            {this.state.skillData.map(
                                                (content) => {
                                                    return (
                                                        <li key={ content.skill_no }  className="col py-3" data-aos="fade-left" data-aos-delay={content.skill_delay} >
                                                        <img src={ content.skill_src } alt={content.skill_name} />
                                                    </li>
                                                    )
                                                }
                                            )}           
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
}

export default About;