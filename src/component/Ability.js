import React from 'react';

function Ability() {
    return(
        <section id='ability'>
            <div className='container' data-aos="fade-up">
                <h3>Ability</h3>
                <ul class="d-flex position-relative">
                    <li data-aos="fade-up" data-aos-duration="600">
                        <div class="tit">
                            <p>Strategy <br/>Consulting</p>
                        </div>
                        <ul class="list">
                            <li>· 디지털 트랜스포메이션 전략</li>
                            <li>· BM 컨설팅</li>
                            <li>· 커뮤니케이션 전략</li>
                            <li>· IR &amp; 정부지원사업 컨설팅</li>
                        </ul>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="800">
                        <div class="tit">
                            <p>Brand <br/>Experience</p>
                        </div>
                        <ul class="list">
                            <li>· BI/CI 디자인</li>
                            <li>· 패키지 디자인</li>
                            <li>· UX 기획</li>
                        </ul>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1000">
                        <div class="tit">
                            <p>Web·App <br/>Development</p>
                        </div>
                        <ul class="list">
                            <li>· O2O 플랫폼</li>
                            <li>· 이커머스</li>
                            <li>· 반응형 웹사이트</li>
                            <li>· 앱(하이브리드/네이티브)</li>
                        </ul>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1200">
                        <div class="tit">
                            <p>Digital <br/>Marketing</p>
                        </div>
                        <ul class="list">
                            <li>· GA 셋업</li>
                            <li>· 온라인 콘텐츠 마케팅</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Ability;