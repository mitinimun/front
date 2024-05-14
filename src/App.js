import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/Auth/LoginPage/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/context";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Mitini from "./components/About/Mitini";
import Register from "./components/Auth/RegisterPage/Register";
import Terms from "./components/Legal/Terms";
import OC from "./components/About/OC";
import SecGen from "./components/About/SecGens/SecGen";
import Logi from "./components/About/Logi/Logi";
import Marketing from "./components/About/Marketing/Marketing";
import Comms from "./components/About/Comms/Comms";
import Daffairs from "./components/About/Daffairs/Daffairs";
import Photo from "./components/About/Photo/Photo";
import Equity from "./components/About/Equity/Equity";
import Committee from "./components/About/Committee/Committee";
import OCRegister from "./components/Auth/RegisterPage/OCRegister";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <NavBar />

        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/mitini" element={<Mitini />} />
          <Route path="/sccsclogimrktngcmnctndffrs/lgn" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sccsclogimrktngcmnctndffrs/rgstr" element={<OCRegister />} />
          <Route path="/tandc" element={<Terms />} />
          <Route path="/oc" element={<OC />} />
          <Route path="/secgen" element={<SecGen />} />
          <Route path="/logi" element={<Logi />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/comms" element={<Comms />} />
          <Route path="/daffairs" element={<Daffairs />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/equity" element={<Equity />} />
          <Route path="/committees" element={<Committee />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
