function Footer(){
    return(
        <footer id="footer">
            <ul id="footerUp">
                <li className="footerLogo"><a href="main.html"><img src={process.env.PUBLIC_URL+'/img/footer_logo.png'} alt="요넥스 로고"/></a></li>
                <li>
                    <ul>
                        <li className="footerTitle"><i className="xi-call"></i>&nbsp;전화상담</li>
                        <li><a href="#">02-335-8077</a></li>
                        <li>10:00-17:00</li>
                        <li className="footerEmail"><a href="#"><i className="xi-mail"></i>webmaster@yonex.co.kr</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="footerTitle">고객센터</li>
                        <li><a href="#">자주 묻는 질문 (FAQ)</a></li>
                        <li><a href="#">배송정책</a></li>
                        <li><a href="#">반품 및 교환</a></li>
                        <li><a href="#">매장 안내</a></li>
                        <li><a href="#">A/S 및 렌탈 관련 문의</a></li>
                        <li><a href="#">요넥스 골프 A/S 관련 문의</a></li>
                        <li><a href="#">요넥스 배드민턴 아카데미 관련 문의</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="footerTitle">회사정보</li>
                        <li><a href="#">요넥스 브랜드</a></li>
                        <li><a href="#">요넥스 코리아</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="footerTitle">SNS</li>
                        <li><a href="#">유튜브</a></li>
                        <li><a href="#">블로그</a></li>
                        <li><a href="#">페이스북</a></li>
                        <li><a href="#">인스타그램</a></li>
                        <li><a href="#">카카오톡</a></li>
                    </ul>
                </li>
            </ul>
            <ul id="footerDown">
                <li>
                    <ul className="footerInfo">
                        <li><a href="#">이용약관&nbsp;&nbsp;&nbsp;</a>|</li>
                        <li><a href="#">&nbsp;&nbsp;&nbsp;개인정보처리방침&nbsp;&nbsp;&nbsp;</a>|</li>
                        <li><a href="#">&nbsp;&nbsp;&nbsp;사업자정보확인</a></li>
                    </ul>
                </li>
                <li>
                <p className="footerText">(주)동승통상&nbsp;&nbsp;서울시 서초구 남부순환로 2543, DS1977 서초빌딩&nbsp;&nbsp;대표이사 : 김철웅(공동대표),김세준(공동대표)&nbsp;&nbsp; 사업자등록번호 :&nbsp;105-81-04692&nbsp;&nbsp;통신판매신고 : 제 2025-서울서초-2230호<br/>개인정보보호책임자 : 신동원 팀장&nbsp;</p>
                </li>
           </ul>
        </footer>
    )
}
export default Footer; 