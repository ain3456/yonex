import { useState } from "react";
import { register } from "../services/auth";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(password, name, email, phone, address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="이름" onChange={(e) => setName(e.target.value)} />
      <input placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="비밀번호" type="password" onChange={(e) => setPassword(e.target.value)} />
      <input placeholder="전화번호" onChange={(e) => setPhone(e.target.value)} />
      <input placeholder="주소" onChange={(e) => setAddress(e.target.value)} />

      <button type="submit">회원가입</button>
    </form>
  );
}