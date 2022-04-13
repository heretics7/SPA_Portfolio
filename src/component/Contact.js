import React from 'react';

function Contact() {
    return(
        <section id='contact'>
            <div className='inner'>
                <div data-aos="fade-up">
                    <h2>Contact</h2>
                </div>
                <form action="DB주소" method="get" name="contactform" id="contactform" onsubmit="return forminspector(this);">
                    <div className="position" data-aos="fade-up">
                        <h2>* 포지션을 선택해주세요.</h2>
                        <ul>
                            <li><label for="frontend" class="hope"><input type="radio" name="position" id="frontend" value="f"/>프론트엔드</label></li>
                            <li><label for="publisher" class="hope"><input type="radio" name="position" id="publisher" value="p"/>퍼블리셔</label></li>
                            <li><label for="backend" class="hope"><input type="radio" name="position" id="backend" value="b"/>기획 / 마케팅</label></li>
                            <li><label for="planner" class="hope"><input type="radio" name="position" id="planner" value="n"/>디자인</label></li>
                        </ul>
                    </div>
                    <div>
                        <ul class="libox" data-aos="fade-up">
                            <li>
                                <label for="company">기업명</label>
                                <input type="text" name="company" id="company"/>
                            </li>
                            <li>
                                <label for="name">성함</label>
                                <input type="text" name="name" id="name"/>
                            </li>
                            <li>
                                <label for="email">이메일</label>
                                <input type="text" name="email" id="email"/>
                            </li>
                            <li>
                                <label for="phone">연락처</label>
                                <input type="text" name="phone" id="phone"/>
                            </li>
                        </ul>
                    </div>
                    <div id="messagebox" data-aos="fade-up">
                        <label for="message">메세지</label>
                        <div id="message">
                            <textarea name="message" rows="3"></textarea>
                        </div>
                        <div className="d-flex">
                            <div class="agree">
                                <input type="checkbox" id="agree" name="agree"/>
                                <label for="agree">개인정보 수집이용 동의</label>
                            </div>
                            <div class="submit">
                                <label for="submit">보내기</label>
                                <input type="submit" id="submit"/>
                            </div>
                        </div>
                    </div>
                </form>
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