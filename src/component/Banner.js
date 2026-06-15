function Banner(props){
    return(
        <div className="banner">
        <a href="#"><img src={props.imgSrc} alt={props.name}/></a>
        <p>
            <span className="bannerDate">{props.date}</span>
            <span className="bannerName">{props.name}</span>
            <span className="bannerText">{props.text}</span>
        </p>
        <button className="purchaseBtn">구매하기</button>
    </div>
    )
}
export default Banner;