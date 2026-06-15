import '../css/reset.css';
import '../css/main.css';
import {Video,Collection,Banner,MdPick,News} from '../component';

function Main(){
    return(
        <>
        <section id='mainSection'>
                <Video/>
                <Collection/>
                <Banner
                imgSrc={process.env.PUBLIC_URL+'/img/banner01.png'}
                date="2026"
                name="VCORE α SL"
                text="빨라진 스윙 스피드가 만드는 압도적 스핀을 만나보세요"
                />
                <MdPick/>
                <Banner
                imgSrc={process.env.PUBLIC_URL+'/img/banner02.png'}
                date="2026"
                name="PRIME TRAINER"
                text="출퇴근길부터 가벼운 조깅, 마라톤까지 어떤 순간에도 발이 편안한 안정감을 경험해보세요"
                />
                <News/>
            </section>
        </>
    )
}
export default Main;