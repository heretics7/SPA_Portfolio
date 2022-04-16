import React, {useEffect} from 'react';
import useWindowSize from '../hook/useWindowsize';
import AOS from 'aos';
import "aos/dist/aos.css";

function Process() {
	
	const size = useWindowSize();

	const processDB = [
		{
			delay : 150,
			dt : "기획 및 디자인",
			dd : "퍼소나의 니즈와 매체 적응을 고려한 프로토타입 구상\n"+
				"원활한 협업을 위한 소스관리와 프레임워크 및 플러그인 선정"
		},
		{
			delay : 300,
			dt : "데이터베이스 아키텍쳐",
			dd : "프론트엔트 사후 관리에 대응된\n"+
				"효율적인 유지보수를 위한 데이터베이스 설계"
		},
		{
			delay : 450,
			dt : "퍼블리싱",
			dd : "퍼소나의 사용성과 빠른 유지보수를 고려한 프레임워크 선정,\n"+
				"커스터마이징 최소화와 그에 따른 메뉴얼 작업"
		},
		{
			delay : 600,
			dt : "커스터마이징",
			dd : "인수인계 및 유지보수 관련 메뉴얼 제작\n"+
				"1. 리액트 컴포넌트의 속성갑으로 쉽게 변경 가능\n"+
				"2. 주요 속성 값은 클래스 (화면 구현의 직접적인 영향)\n"+
				"3. 협업을 위해 플러그인, 프레임워크 기본 스타일과 자바 수정 X\n"+
				"4. 스타일의 우선순위를 위한 빠른 화면 구현"
		},
		{
			delay : 750,
			dt : "배포 및 유지보수",
			dd : "테스트와 디버깅으로 검수 후 웹 사이트를 배포\n"+
				"유지보수 할 수 있는 메뉴얼 배포"
		}
	]

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    })

    return(
        <section id='process'>
            <div className='container'>
                <div className='text_box' data-aos="fade-up">
                    <h3>Process</h3>
                    <p>저의 웹 / 앱 제작 프로세스입니다.
					</p>
                </div>
                <ul className='d-flex'>
					{processDB.map((processArr) => {
						return(
							<li data-aos="fade-up" data-aos-delay={size.width >= 1024 ? processArr.delay : 100 }>
								<dl>
									<dt>{processArr.dt}</dt>
									<dd>
										{processArr.dd}
									</dd>
								</dl>
							</li>
						);
					})}
				</ul>
            </div>
        </section>
    );
}

export default Process;