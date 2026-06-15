import {useState} from 'react';
import '../css/reset.css';
import '../css/login.css';
import {Link} from 'react-router-dom';
import Input from '../component/Input';

function Login(){
    const [id,setId] = useState('');
    const [pw,setPw] = useState('');
    const BASE_URL = 'http://ain.dothome.co.kr/yonex_data/';

    const handleLoginSubmit = async(e) => {
        e.preventDefault();

        if(!id || !pw){
            alert("아이디와 비밀번호를 모두 입력해주세요!");
            return;
        }
        try{
            const response = await fetch(`${BASE_URL}/login.php`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id,pw })
            });
            const data = await response.json();

            if (data.success) {
                alert(data.message);
                sessionStorage.setItem('id', id);
                window.location.href='/';
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert("서버 연결에 실패했습니다.");
        }
    }
    return(
        <section id='loginSection'>
            <form onSubmit={handleLoginSubmit}>
                <h1 className='loginTitle'>로그인</h1>
                <label>아이디</label>
                <Input
                type='text'
                value={id}
                onChange={(e) => setId(e.target.value)}
                />
                <label>비밀번호</label>
                <Input
                type='password'
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                />
                <button type='submit' className='loginBtn'>로그인</button>
            </form>
            <div id='registerBox'>
                <Link to="/Register">아직 회원이 아니신가요?</Link>
            </div>
        </section>
    )
}
export default Login;