function News(){
    return(
        <div id="news">
        <h1>Inside Yonex</h1>
        <ul>
            <li className="n1"><img src={process.env.PUBLIC_URL+'/img/n01.jpg'} alt="연맹회장기 전국실업배드민턴선수권대회 결과"/>
                <div className="newsBox"><p><span className="newsDate">2026.04.24</span><br/>연맹회장기<br/>전국실업배드민턴선수권대회 결과</p></div>
            </li>
            <li className="n1"><img src={process.env.PUBLIC_URL+'/img/n02.jpg'} alt="아시아개인배드민턴선수권대회 결과"/>
                <div className="newsBox"><p><span className="newsDate">2026.04.24</span><br/>2026<br/>아시아개인배드민턴선수권대회 결과</p></div>
            </li>
        </ul>
    </div>
    )
}
export default News;