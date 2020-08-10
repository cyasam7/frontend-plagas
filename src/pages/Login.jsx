import React from "react";
import { useUser } from "../Context/user-context";
function Login() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const { login } = useUser();

  const handleOnChangeEmail = (e) =>{
    setEmail(e.target.value)
    console.log(email);
  }
  const handleOnChangePass = (e) =>{
    setPass(e.target.value);
    console.log(pass);
  }

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (email === "" || pass === "") {
      alert("Colocar bien los datos");
      return;
    }
    login(email, pass);
  };
  return (
    <div className="page-login bg-primary">
      <form onSubmit={handleLogin} className="card">
        <div className="card-body">
          <h1 className="card-title">Iniciar Sesion</h1>
          <div className="form-group">
            <input
              name="email"
              placeholder="Email"
              type="text"
              className="form-control"
              onChange={handleOnChangeEmail}
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              placeholder="Password"
              type="password"
              className="form-control"
              onChange={handleOnChangePass}
            />
          </div>
          <button className="btn btn-block btn-primary">
            Iniciar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
