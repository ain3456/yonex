import { useState } from 'react';
import '../css/reset.css';
import '../css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../component/Input';
import { loginWithEmail } from '../services/auth'; 

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
  e.preventDefault();

  console.log("id:", id);
  console.log("pw:", pw);

  const result = await loginWithEmail(id, pw);

  console.log("login result:", result);

  if (result.success) {
    sessionStorage.setItem('id', result.user.email);
    navigate('/');
  } else {
    alert(result.message);
  }
};

  return (
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
  );
}