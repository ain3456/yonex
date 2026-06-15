import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ openMenu, toggleMenu, setOpenMenu }) {
    const menu = [
        { title: "Tennis", sub: ["전체보기", "신상품", "라켓", "신발", "스트링", "셔틀콕"] },
        { title: "Badminton", sub: ["전체보기", "신상품", "라켓", "신발", "스트링"] },
        { title: "Golf", sub: ["전체보기", "드라이버", "파이어웨이우드", "유틸리티", "아이언", "풀세트", "악세서리", "요넥스골프홈페이지"] },
        { title: "Wears", sub: ["전체보기", "요넥스 수입의류/가방", "신상품", "남성", "여성"] },
        { title: "Brand", sub: ["YONEX 소개", "YONEX KOREA 소개", "인재채용"] },
        { title: "Customer", sub: ["렌탈 서비스", "A/S 조회", "정품 등록/조회", "대리점 매장 안내", "온라인전문점 안내", "대리점 개설안내", "고객센터"] }
    ];
    
    const [loginUser, setLoginUser] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const savedId = sessionStorage.getItem('id'); 
        
        if (savedId && savedId !== "undefined" && savedId !== "null") {
            setLoginUser(savedId); 
        } else {
            setLoginUser(null);
        }
    }, [location]);

    const handleLogout = () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            sessionStorage.removeItem('id'); 
            setLoginUser(null);
            window.location.href = '/';
        }
    };

    return (
        <header>
            <div id="upHeader">
                <h1><Link to='/'><img src={process.env.PUBLIC_URL + '/img/logo-white.png'} alt="요넥스 로고" /></Link></h1>
                <div id="account">
                    {loginUser ? (
                        <>
                            <p>{loginUser}&nbsp;님</p>
                            <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                            <button onClick={handleLogout} className='logout'>로그아웃</button>
                        </>
                    ) : (
                        <>
                            <Link to='/Register'>회원가입</Link>
                            <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                            <Link to='/Login'>로그인</Link>
                        </>
                    )}
                </div>
            </div>
            <div id="downHeader">
                <nav id="menu" onMouseLeave={() => setOpenMenu(null)}>
                    <ul>
                        {menu.map((item) => (
                           <li key={item.title} onMouseEnter={() => setOpenMenu(item.title)}>
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    toggleMenu(item.title);}}>
                                {item.title}
                                </a>
                                {openMenu === item.title && (
                                <div className="subMenu">
                                    <ul>
                                    {item.sub.map(sub => (
                                        <li key={sub}>
                                            <a href="#">{sub}</a>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div id="downAccount">
                    <ul>
                        <li>
                            <div id="searchBox">
                                <input type="text" id="search"/>
                                <i className="xi-search"></i>
                            </div>
                        </li>
                        <li><i className="xi-heart-o"></i></li>
                        <li><Link to='/Cart'><i className="xi-cart-o"></i></Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header;