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
import Materials from "./components/About/Materials/Materials";
import Venue from "./components/About/Venue/Venue";
import Login from "./components/Auth/LoginPage/Login";
import CreateComm from "./components/Committees/CreateComm";
import ForgotPassword from "./components/Forgot/ForgotPassword";
import ResetPass from "./components/Reset/ResetPass";
 
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
          <Route path="/materials" element={<Materials />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/create/committee" element={<CreateComm />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset-password/:resetPasswordToken" element={<ResetPass />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
