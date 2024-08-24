import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [valueInputs, setValueInputs] = useState({
    email: "",
    nombre: "",
    rut: "",
    password: "",
    password2: "",
  });

  const handlerChange = (e) => {
    setValueInputs({ ...valueInputs, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <h1 className="text-danger">probando que funciones</h1>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @Correo
          </span>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="correo"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => handlerChange(e)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Nombre
          </span>
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Joe Do"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => handlerChange(e)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Rut
          </span>
          <input
            type="text"
            name="rut"
            className="form-control"
            placeholder="111.111.111-1"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => handlerChange(e)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            password
          </span>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="**********"
            aria-label="password"
            aria-describedby="basic-addon1"
            onChange={(e) => handlerChange(e)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            password
          </span>
          <input
            type="password"
            name="password2"
            className="form-control"
            placeholder="**********"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => handlerChange(e)}
          />
        </div>
        <button type="button" className="btn btn-primary">
          Crear usuario
        </button>
      </div>
    </>
  );
}

export default App;
