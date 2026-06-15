import { useEffect } from 'react'; 
import { Animaition } from '../js/Animation';

function Collection(){

    useEffect(() => {
        Animaition(); 
    }, []); // 딱 한 번만 실행

    return (
        <div id="collection">
            <ul>
                <li><a href="https://www.yonexmall.com/shop/goods/goods_list.php?category=024002"><img src={process.env.PUBLIC_URL+'/img/collection.png'} alt="테니스 컬렉션"/><p>Yonex Tennis 컬렉션 보러가기</p></a></li>
                <li><a href="https://www.yonexmall.com/shop/goods/goods_list.php?category=022015&isWorldCollection=Y"><img src={process.env.PUBLIC_URL+'/img/collection2.png'} alt="월드 컬렉션"/><p>Yonex World 컬렉션 보러가기</p></a></li>
            </ul>
        </div>
    );
}
export default Collection;