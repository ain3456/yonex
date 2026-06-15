import '../css/reset.css';
import '../css/cart.css'


function Cart(){
    return(
        <>
        <section id='cartSection'>
              <div id='cartTitle'>
                <h2>장바구니</h2>
                <div className='line'></div>
              </div>  
              <div id='cartBox'>
                <div className='itemBox'>
                <div className='item'>
                    <div className='itemImg'><a href='#'><img src={process.env.PUBLIC_URL + '/img/item01.png'} alt="VCORE 100" /></a></div>
                    <div className='itemInfo'>
                        <ul className='info'>
                            <li>VCORE 100 (2026)</li>
                            <li>400,000원</li>
                        </ul>
                        <ul className='selectBox'>
                            <li>
                                <select class="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>						   
                                </select>
                            </li>
                            <li><button className='deleteBtn'>삭제</button></li>
                        </ul>
                    </div>
                    <div className='line2'></div>
                </div>
                </div>
              </div>
        </section>
        </>
    )
}
export default Cart;