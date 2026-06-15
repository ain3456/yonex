import { useEffect, useRef } from 'react';
import { videoScroll } from '../js/Scroll';

function Video(){
    const mainRef = useRef(null);
    const videoRef = useRef(null);
    const vidBtnRef = useRef(null);
    const scrollIconRef = useRef(null);

    useEffect(() =>{
    const removeScrollEvent = videoScroll(mainRef, videoRef, vidBtnRef, scrollIconRef);
    return() =>{
        removeScrollEvent();
    }
    },[]);

    return(
        <div id="main" ref={mainRef}>
        <video id="vid" ref={videoRef} src={process.env.PUBLIC_URL+'/img/main_video.mp4'} muted preload="auto" playsInline></video>
        <div id="vidBtn" ref={vidBtnRef}>
            <a href='https://www.yonexmall.com/shop/goods/goods_view.php?goodsno=6557&category=001006'>자세히 보러가기</a>
        </div>
        <div id="scrollIcon" ref={scrollIconRef}><i className="xi-angle-down"></i></div>
    </div>
    )
}

export default Video;