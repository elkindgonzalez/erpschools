import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/Layout";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
