import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeTab from "../pages/Home/Home";
import RescueTeams from "../pages/RescueTeams/RescueTeams";
import Vulnerables from "../pages/Vulnerables/Vulnerables";
import Alerts from "../pages/Alerts/Alerts";
import ManualRequest from "../pages/ManualRequest/ManualRequest";
import Account from "../pages/Account/Account";
import ManagePoints from "../pages/ManagePoints/ManagePoints";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPass";
import ResetPass from "../pages/Auth/ResetPass";
import RegisterStep1 from "../pages/Auth/RegisterStep1";
import RegisterStep2 from "../pages/Auth/RegisterStep2";
import RegisterStep3 from "../pages/Auth/RegisterStep3";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Navigate to='/login' replace />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<ResetPass />} />
      <Route path='/RegisterStep1' element={<RegisterStep1 />} />
      <Route path='/RegisterStep2' element={<RegisterStep2 />} />
      <Route path='/RegisterStep3' element={<RegisterStep3 />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register-step1" element={<RegisterStep1 />} /> */}
      {/* Main app layout */}
      <Route element={<MainLayout />}>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<HomeTab />} />
        <Route path='/rescue-teams' element={<RescueTeams />} />
        <Route path='/vulnerables' element={<Vulnerables />} />
        <Route path='/alerts' element={<Alerts />} />
        <Route path='/manual' element={<ManualRequest />} />
        <Route path='/account' element={<Account />} />
        <Route path='/points' element={<ManagePoints />} />
      </Route>
    </Routes>
  );
}
