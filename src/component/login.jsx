import { useState } from "react";
import { login } from "./services/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="비밀번호" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">로그인</button>
    </form>
  );
}