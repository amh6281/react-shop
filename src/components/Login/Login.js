import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>로그인</h1>
        <form>
          <h5>이메일</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>비밀번호</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button onClick={signIn} className="login_btn">
            로그인 하기
          </button>
        </form>
        <p>이용 약관에 동의</p>
        <button onClick={signUp} className="login_registerBtn">
          회원가입
        </button>
      </div>
    </div>
  );
}
