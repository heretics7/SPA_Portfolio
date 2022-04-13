import React, {useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

function Process() {

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    })

    return(
        <section id='process'>
            <div className='inner'>
                <div className='text_box' data-aos="fade-up">
                    <h3>Process</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <ul class="approach_list">
					<li class="aos-init aos-animate active" data-aos="fade-up" data-aos-delay="100">
						<dl>
							<dt>Think<span class="round" data-cursor="view"></span></dt>
							<dd>트렌드를 분석하여 변화하는 환경에서<br/>제품·서비스의 차별화 방향을 제시합니다.</dd>
						</dl>
					</li>
					<li data-aos="fade-up" data-aos-delay="150" class="aos-init aos-animate">
						<dl>
							<dt>Tell<span class="round" data-cursor="view"></span></dt>
							<dd>카피라이팅, 핵심 비주얼, 스토리텔링으로 제품·서비스의 차별화 요소를 생생하게 고객에게 각인시킵니다.</dd>
						</dl>
					</li>
					<li data-aos="fade-up" data-aos-delay="200" class="aos-init aos-animate">
						<dl>
							<dt>Design<span class="round" data-cursor="view"></span></dt>
							<dd>최상의 고객 경험(UX)을 설계하고, 최적화한 UI를 제공하는 웹·앱·패키지 디자인으로 웹 비지니스의 프로토타입을 제공합니다.</dd>
						</dl>
					</li>
					<li data-aos="fade-up" data-aos-delay="250" class="aos-init aos-animate">
						<dl>
							<dt>Develop<span class="round" data-cursor="view"></span></dt>
							<dd>O2O 플랫폼, 이커머스, 반응형 홈페이지, 네이티브 앱을 신속하고 안정적으로 제작합니다.</dd>
						</dl>
					</li>
					<li data-aos="fade-up" data-aos-delay="300" class="aos-init aos-animate">
						<dl>
							<dt>Connect<span class="round" data-cursor="view"></span></dt>
							<dd>고객들과 더 많이 연결될 수 있도록 디지털 콘텐츠 마케팅을 지원하고, 정량적 데이터 분석에 기반한 퍼포먼스 마케팅을 제공합니다.</dd>
						</dl>
					</li>
				</ul>
            </div>
        </section>
    );
}

export default Process;