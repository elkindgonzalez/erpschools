import { useState } from "react";
import { CForm, CFormInput, CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Intentando iniciar sesión...");
    console.log({ email, password });

    // Aquí luego conectamos con authApi.login()
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <CCard style={{ width: "380px" }}>
        <CCardHeader className="text-center">
          <h4 className="mt-2 mb-0 fw-bold">ERPSCHOOLS</h4>
          <span className="text-muted">Iniciar sesión</span>
        </CCardHeader>

        <CCardBody>
          <CForm onSubmit={handleSubmit}>
            <CFormInput
              type="email"
              label="Correo electrónico"
              placeholder="usuario@colegio.edu.co"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-3"
              required
            />

            <CFormInput
              type="password"
              label="Contraseña"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
              required
            />

            <div className="d-grid">
              <CButton type="submit" color="primary">
                Ingresar
              </CButton>
            </div>
          </CForm>

          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default LoginPage;
