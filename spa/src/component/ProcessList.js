import React, { Component } from 'react';
import axios from 'axios';
//import useWindowSize from '../hook/useWindowsize';

class About extends Component {
    constructor(props){
        super(props)
        this.state ={
            message : '서비스요청을 기다리는 중...',
            processData : [],
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
                this.setState({ processData : [...res.data] })
                console.log(this.state.processData)
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
        //const size = useWindowSize();
        
        return (
            <section id='process'>
                <div className='vertical-align'>
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div data-aos="fade-up">
                                        <h3 className='text-light'>{ this.state.processData.length > 0 ? this.props.dbinfo.titlenm : this.state.message }</h3>
                                        <p className='text-light'>저의 작업 프로세스입니다.</p>
                                    </div>
                                    <div className="gap"></div>
                                    <ul className="row row-cols-1 row-cols-lg-5">
                                        {this.state.processData.map(
                                            (content) => {
                                                return(
                                                    <li className="col" key={ content.process_no }>
                                                        <div data-aos="fade-up"
                                                        //data-aos-delay={size.width >= 1024 ? content.process_delay : 200 }
                                                        data-aos-delay={content.process_delay}
                                                        >
                                                            <div className="process">
                                                                <h5 className="text-light">{content.process_title}</h5>
                                                                <p className="text-light text-opacity-75">{content.process_text}</p>
                                                            </div>
                                                        </div>
                                                        <div className='gap-sm'></div>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
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