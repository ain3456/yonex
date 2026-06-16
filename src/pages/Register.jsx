import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../component/Input';
import { registerWithEmail } from '../services/auth'; 
import '../css/reset.css';
import '../css/register.css';

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [address, setAddress] = useState('');
    const [isEmailChecked, setIsEmailChecked] = useState(false);

    const handleEmailCheck = () => {
        if (!email) {
            alert("이메일을 입력해주세요.");
            return;
        }
        alert("사용 가능한 이메일입니다.");
        setIsEmailChecked(true);
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !pw || !pwCheck || !name || !hp || !address) {
            alert("항목을 모두 입력해주세요.");
            return;
        }
        if (!isEmailChecked) {
            alert("이메일 중복을 먼저 확인해주세요.");
            return;
        }
        if (pw !== pwCheck) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const data = await registerWithEmail(email, pw);

            if (data && data.success) {
                alert(data.message);
                navigate('/');
            } else {
                alert(data?.message || "회원가입에 실패했습니다.");
            }
        } catch (error) {
            console.error(error);
            alert("서버 전송에 실패했습니다.");
        }
    };

    const handleReset = () => {
        setEmail(''); 
        setPw(''); 
        setPwCheck(''); 
        setName(''); 
        setHp(''); 
        setAddress('');
        setIsEmailChecked(false);
    };

    return (
        <section id="registerSection">
            <form onSubmit={handleRegisterSubmit}>
                <h1 className='registerTitle'>회원가입</h1>
                
                <label className='idLabel'>이메일(아이디)
                    <div className='idBox'>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setIsEmailChecked(false); }}
                            className="idInput"
                        />
                        <button type='button' className='checkId' onClick={handleEmailCheck}>중복확인</button>
                    </div>
                </label>

                <label>비밀번호
                    <Input
                        type="password"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                    />
                </label>

                <label>비밀번호 확인
                    <Input
                        type="password"
                        value={pwCheck}
                        onChange={(e) => setPwCheck(e.target.value)}
                    />
                </label>

                <label>이름
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label>전화번호
                    <Input
                        type="tel"
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                    />
                </label>

                <label>주소
                    <Input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>

                <div className='btnBox'>
                    <button type="submit" className="registerBtn">회원가입</button>
                    <button type='button' className="resetBtn" onClick={handleReset}>초기화</button>
                </div>
            </form>
        </section>
    );
}