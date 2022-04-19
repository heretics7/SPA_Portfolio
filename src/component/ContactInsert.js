import React, { useEffect, useState } from "react";
import axios from 'axios'
import $ from 'jquery';


function InsertContact(props){

    const [ message, setMessage ] = useState('');

    const submitContact = async (type, e) => {

        const fnValidate = () => {
            if(!$('#agreeTerm').is(':checked')){ 
                setMessage("개인정보 수집 동의를 해주세요");
                return false;
            } 
            if($('#wr_position').val() == '' ){
                $('#wr_position').focus();
                setMessage("포지션을 선택해주세요");       
                return false;
            }
            if($('#wr_company').val() == '' ){
                $('#wr_company').focus();
                setMessage("회사명을 입력해주세요");       
                return false;
            } 
            if($('#wr_name').val() == '' ){
                $('#wr_name').focus();
                setMessage("성함을 입력해주세요");       
                return false;
            }
            if($('#wr_hp').val() == '' ){
                $('#wr_hp').focus();
                setMessage("연락처를 입력해주세요");       
                return false;
            }
            if($('#wr_email').val() == '' ){
                $('#wr_email').focus();
                setMessage("이메일을 입력해주세요");       
                return false;
            }
            return true;
        }

        if( fnValidate() ){       
            var jsonstr = decodeURIComponent($("[name='"+type+"']").serialize());
            var Json_data = JSON.stringify(jsonstr).replace(/\&/g, '\",\"')
                Json_data = '{' + Json_data.replace(/=/gi, '\":\"') + '}'
                console.log(typeof Json_data);
        
                try{
                axios.post('/api?type='+type,
                //아래의 내용을 post전송한다. req.body객체임
                    {         
                        headers : {
                        "Content-Type": `application/json`
                        },
                        body : Json_data
                    })
                    .then( result =>  {  
                        //console.log(result); 
                        if(result.data == 'succ')  {
                        setMessage('노드에 잘 접속되고 전달되었음');
                        $('.formStyle [name]').val('');
            
                        } else{
                        setMessage('쿼리 혹은 xml 접속문제')
                        }
            
                        }
                    ).catch(
                        (err) => { 
                        setMessage('답을 못 가져옴 서버 어느파일인지 조사해야함 '+err )
                        }
                    )  
                    
                    }
                catch(err){
                    setMessage('서버 연결도 안됨 '+err )
                }
        }
    }

    useEffect((e)=>{      
        submitContact(props.dbinfo.botable, e)
    }, [message])

    $(document).ready(function(){
        $('.hope').click(function(){
            $(this).parent().addClass('on').siblings().removeClass('on');
        })
        $('.agree').click(function(){
            $(this).addClass('on');
        })
    });

    return(
        <section id="contact">
            <div className="vertical-align">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div data-aos="fade-up">
                                    <h2>{props.dbinfo.titlenm}</h2>
                                </div>
                                <form action="" method="post" name={props.dbinfo.botable}>
                                    <input type='hidden' name='crud' value={props.dbinfo.crud} />
                                    <input type='hidden' name='mapper' value={props.dbinfo.mapper} />
                                    <input type='hidden' name='mapperid' value={props.dbinfo.mapperid} />
                                    <div class="position">
                                        <h6>* 포지션을 선택해주세요.</h6>
                                        <ul>
                                            <li>
                                                <label for="frontend" class="hope">
                                                    <input type="radio" name="wr_position" id="frontend" value="frontend"/>
                                                    프론트엔드
                                                </label>
                                            </li>
                                            <li>
                                                <label for="publisher" class="hope">
                                                    <input type="radio" name="wr_position" id="publisher" value="publisher"/>
                                                    퍼블리셔
                                                </label>
                                            </li>
                                            <li>
                                                <label for="planner" class="hope">
                                                    <input type="radio" name="wr_position" id="planner" value="planner"/>
                                                    기획 / 마케팅
                                                </label>
                                            </li>
                                            <li>
                                                <label for="design" class="hope">
                                                    <input type="radio" name="wr_position" id="design" value="design"/>
                                                    디자인
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul class="libox">
                                            <li>
                                                <label for="wr_company">기업명</label>
                                                <input type="text" name="wr_company" id="wr_company"/>
                                            </li>
                                            <li>
                                                <label for="wr_name">성함</label>
                                                <input type="text" name="wr_name" id="wr_name"/>
                                            </li>
                                            <li>
                                                <label for="wr_email">이메일</label>
                                                <input type="text" name="wr_email" id="wr_email"/>
                                            </li>
                                            <li>
                                                <label for="wr_hp">연락처</label>
                                                <input type="text" name="wr_hp" id="wr_hp"/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="messagebox">
                                        <label for="wr_message">메세지</label>
                                        <div id="wr_message">
                                            <textarea name="wr_message" rows="3"></textarea>
                                        </div>
                                        <div className="row">
                                            <div class="agree">
                                                <input type="checkbox" id="agreeTerm"/>{" "}
                                                <label for="agreeTerm">개인정보 수집이용 동의</label>
                                            </div>
                                            <div class="submit">
                                                <label for="submit">보내기</label>
                                                <input type="submit" id="submit" onClick={e => { submitContact(props.dbinfo.botable, e) }}/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p>{ message }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InsertContact;