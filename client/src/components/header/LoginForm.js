import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div>
      <center>
        <h2>로그인</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>이메일</span>
            <input type="email" />
          </div>
          <div>
            <span>비밀번호</span>
            <input type="password" />
          </div>
          <div>
            
          </div>
          <button className="btn btn-login" type="submit">
            로그인
          </button>
        </form>
      </center>
    </div>
  );
};

export default LoginForm;
