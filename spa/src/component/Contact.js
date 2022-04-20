import React from 'react';
import $ from 'jquery';

function Contact() {

    $(document).ready(function(){
        $('.hope').click(function(){
            $(this).parent().addClass('on').siblings().removeClass('on');
        })
        $('.agree').click(function(){
            $(this).addClass('on');
        })
    });

    return(
        <section id='contact'>
            <div className='vertical-align'>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div data-aos="fade-up">
                                    <h3>Contact</h3>
                                </div>
                                <form action="DB주소" method="get" name="contactform" id="contactform" onsubmit="return forminspector(this);">
                                    <div className="position" data-aos="fade-up">
                                        <h6>* 포지션을 선택해주세요.</h6>
                                        <ul>
                                            <li><label htmlFor="frontend" className="hope"><input type="radio" name="position" id="frontend" value="f"/>프론트엔드</label></li>
                                            <li><label htmlFor="publisher" className="hope"><input type="radio" name="position" id="publisher" value="p"/>퍼블리셔</label></li>
                                            <li><label htmlFor="backend" className="hope"><input type="radio" name="position" id="backend" value="b"/>기획 / 마케팅</label></li>
                                            <li><label htmlFor="planner" className="hope"><input type="radio" name="position" id="planner" value="n"/>디자인</label></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="libox" data-aos="fade-up">
                                            <li>
                                                <label htmlFor="company">기업명</label>
                                                <input type="text" name="company" id="company"/>
                                            </li>
                                            <li>
                                                <label htmlFor="name">성함</label>
                                                <input type="text" name="name" id="name"/>
                                            </li>
                                            <li>
                                                <label htmlFor="email">이메일</label>
                                                <input type="text" name="email" id="email"/>
                                            </li>
                                            <li>
                                                <label htmlFor="contacthp">연락처</label>
                                                <input type="text" name="contacthp" id="contacthp"/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="messagebox" data-aos="fade-up">
                                        <label htmlFor="message">메세지</label>
                                        <div id="message">
                                            <textarea name="message" rows="3"></textarea>
                                        </div>
                                        <div className="d-flex">
                                            <div className="agree">
                                                <input type="checkbox" id="agreeTerm"/>
                                                <label htmlFor="agree">개인정보 수집이용 동의</label>
                                            </div>
                                            <div className="submit">
                                                <label htmlFor="submit">보내기</label>
                                                <input type="submit" id="submit" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <script>
                    // 리액트 실행문 { forminspector }
                    // window.onload = forminspector;
                    // 리액트 실행문 { e => { forminspector(); }}
                    // 이벤트가 있을 때는 return을 또 넣어줘야함
                    function forminspector(formarr){

                        var hp = document.getElementById('phone').value;
                        var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
                        if (regPhone.test(hp) === true) {
                            alert('입력된 값은 휴대전화번호입니다.');
                        }else{
                            alert('입력된 값은 전화번호가 아닙니다.')
                        }
                        console.log(regPhone);


                        //동의여부
                        var agreechk = formarr['agree']; // form을 this라고 할 때 그 form 안에 name이 agree인 객체
                        if(!agreechk.checked){
                            return false;
                        }
                    }
                </script> */}
            </div>
        </section>
    );
}

export default Contact;