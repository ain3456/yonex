import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/reset.css';
import '../css/register.css';
import Input from '../component/Input';

function Register(){
    const navigate = useNavigate();
    const [id,setId] = useState('');
    const [pw,setPw] = useState('');
    const [pwCheck,setPwCheck] = useState('');
    const [name,setName] = useState('');
    const [hp,setHp] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');

    const [isIdChecked,setIsIdChecked] = useState(false);
    const BASE_URL = 'http://ain.dothome.co.kr/yonex_data/';

    /*-- 아이디 중복 확인 --*/
    const handleIdChecked = async()=>{
        if(!id.trim()){
            alert("아이디를 입력해주세요.");
            return;

        }
        try{
            const response = await fetch(`${BASE_URL}/check_id.php`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            const data = await response.json();

            if (data.success) {
                alert(data.message);
                setIsIdChecked(true);
            } else {
                alert(data.message);
                setIsIdChecked(false);
            }
        } catch (error) {
            console.error(error);
            alert("서버 연결에 실패했습니다.");
        }
        
    };

    /*-- 항목 확인--*/
    const handleRegisterSubmit = async(e)=>{
        e.preventDefault();

        if(!id || !pw || !pwCheck || !name || !hp || !email || !address){
            alert("항목을 모두 입력해주세요.");
            return;
        };
        if(!isIdChecked){
            alert("아이디 중복을 먼저 확인해주세요.");
            return;
        }
        /*-- 비밀번호 일치 확인 --*/
        if(pw !== pwCheck){
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        try {
            const response = await fetch(`${BASE_URL}/insert.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, pw, name, hp, email, address })
            });
            const data = await response.json();

            if (data.success) {
                alert(data.message);
                navigate('/');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert("서버 전송에 실패했습니다.");
        }
    };

    /*-- 리셋 --*/
    const handleReset = () => {
        setId(''); setPw(''); setPwCheck(''); setName(''); setHp(''); setEmail(''); setAddress('');
        setIsIdChecked(false);
    }
    return(
        <section id="registerSection">
            <form onSubmit={handleRegisterSubmit}>
                <h1 className='registerTitle'>회원가입</h1>
                <label className='idLabel'>아이디
                <div className='idBox'>
                <Input
                type="text"
                value={id}
                onChange={(e)=>{setId(e.target.value); setIsIdChecked(false)}}
                className="idInput"
                />
                <button type='button' className='checkId' onClick={handleIdChecked}>중복확인</button>
                </div>
                </label>
                <label>비밀번호
                <Input
                type="password"
                value={pw}
                onChange={(e)=>setPw(e.target.value)}
                />
                </label>
                <label>비밀번호 확인
                <Input
                type="password"
                value={pwCheck}
                onChange={(e)=>setPwCheck(e.target.value)}
                />
                </label>
                <label>이름
                <Input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                </label>
                <label>전화번호
                <Input
                type="tel"
                value={hp}
                onChange={(e)=>setHp(e.target.value)}
                />
                </label>
                <label>이메일
                <Input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                </label>
                <label>주소
                <Input
                type="text"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                />
                </label>
                <div className='btnBox'>
                <button type="submit" className="registerBtn">회원가입</button>
                <button type='button' className="resetBtn" onClick={handleReset}>초기화</button>
                </div>
            </form>
        </section>
    )
}
export default Register;